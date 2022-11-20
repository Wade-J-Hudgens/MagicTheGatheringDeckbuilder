import { Inject, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { Users } from '../../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserResponseInterface, RegisterUserErrorCodes } from './registration.interfaces';
const bcrypt = require('bcrypt')

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>
  ) {}

  async checkEmailFormat (email: string): Promise<boolean> {
    return true;
  }

  async checkPasswordFormat (password: string) {
    const MINIMUM_LENGTH = 8;
    return password.length >= MINIMUM_LENGTH;
  }

  async ensureValidInput(email: any, username: any, password: any, firstName: any, lastName: any) {
    return (
        typeof(email) == 'string' &&
        typeof(username) == 'string' &&
        typeof(password) == 'string' &&
        typeof(firstName) == 'string' &&
        typeof(lastName) == 'string'
    )
  }
  async checkIfEmailExists(email: string): Promise<boolean> {
    const results = await this.userRepo.findOne({where: {email: email}})
    return results !== null;
  }

  async checkIfUsernameExists(username: string): Promise<boolean> {
    const results = await this.userRepo.findOne({where: {username: username}})
    return results !== null;
  }

  async hashPassword(password: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword;
  }

  async registerUser(email: string, username: string, password: string, firstName: string, lastName: string): Promise<RegisterUserResponseInterface> {
    const validatePasswordRequirements = await this.checkPasswordFormat(password);
    if (!validatePasswordRequirements) return {success: false, error:  RegisterUserErrorCodes.PasswordNotLongEnough} 

    let hashedPassword = await this.hashPassword(password);
    const validInput = await this.ensureValidInput(email,username,password,firstName,lastName);
    if (!validInput) return {success: false, error:  RegisterUserErrorCodes.ServerError} 
    const emailFormat = await this.checkEmailFormat(email);
    if (!emailFormat) return {success: false, error: RegisterUserErrorCodes.InvalidEmailFormat}
    const usernameExists = await this.checkIfUsernameExists(username);
    if (usernameExists) return {success: false, error: RegisterUserErrorCodes.UsernameExists}
    const emailExists = await this.checkIfEmailExists(email);
    if (emailExists) return {success: false, error: RegisterUserErrorCodes.EmailExists }

    try{await this.userRepo.insert({email: email, username: username, password: hashedPassword, firstName: firstName, lastName: lastName});}
    catch{return {success: false, error: RegisterUserErrorCodes.ServerError}}

    return {success: true}
  }
}
