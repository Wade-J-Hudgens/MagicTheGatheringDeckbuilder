import { Inject, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { Users } from '../../model/user.entity';
import { Authentication } from "../../model/authentication.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { LoginErrorCodes, LoginResponseInterface } from './login.interfaces';
const bcrypt = require('bcrypt')

export class LoginService {
    constructor(
      @InjectRepository(Users)
      private userRepo: Repository<Users>,
      @InjectRepository(Authentication)
      private authRepo: Repository<Authentication>

    ) {}
    
    async hashPassword(password: string) {
        let hashedPassword = "";
        bcrypt.hash(password, 10, (err, hash)=>{
            hashedPassword = hash;
        })
        return hashedPassword;
    }
    async verifyUsernamePassword(email: string, password: string, rememberMe: boolean): Promise<LoginResponseInterface> {
        const authenticationStringLength: number = 30;
        const authenticationStringChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.?&!;:";
        const generateAuthenticationString = (): string => {
            let rv = "";
            for (let i = 0; i < authenticationStringLength; i++) {
                const index = Math.floor(Math.random() * authenticationStringChars.length) ;
                rv += authenticationStringChars[index];
            }
            return rv;
        }
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
            const authString = generateAuthenticationString();
            await this.authRepo.insert({rememberMe: rememberMe, accountId: user.id, authenticationString: authString});
            return ({success: true, authenticationString: authString});
        }
        else {
            return ({success: false, error: LoginErrorCodes.NotValid})
        }
    }
}