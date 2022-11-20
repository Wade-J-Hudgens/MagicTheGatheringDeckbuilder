import { Inject, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { Users } from '../../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginErrorCodes, LoginResponseInterface } from './login.interfaces';
const bcrypt = require('bcrypt')

export class LoginService {
    constructor(
      @InjectRepository(Users)
      private userRepo: Repository<Users>
    ) {}
    
    async hashPassword(password: string) {
        let hashedPassword = "";
        bcrypt.hash(password, 10, (err, hash)=>{
            hashedPassword = hash;
        })
        return hashedPassword;
    }
    async verifyUsernamePassword(email: string, password: string): Promise<LoginResponseInterface> {
        const user: Users = await this.userRepo.findOne({
            where: {
                email: email
            }
        });
        if (user === null) {
            return ({success: false, error: LoginErrorCodes.NotValid})
        }
        const compared = await bcrypt.compare(password, user.password);
        if (compared) {
            return ({success: true})
        }
        else {
            return ({success: false, error: LoginErrorCodes.NotValid})
        }
    }
}