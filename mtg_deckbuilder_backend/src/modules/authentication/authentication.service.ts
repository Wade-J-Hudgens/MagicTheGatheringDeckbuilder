import { Authentication } from "../../model/authentication.entity";
import { Inject, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUsersResponseInterface } from "./authentication.interfaces";

@Injectable()
export class AuthenticationService {
    constructor(
        @InjectRepository(Authentication)
        private authenticationRepo: Repository<Authentication>
    ) {}

    async getUserFromAuthenticationString(authenticationString: string): Promise<GetUsersResponseInterface> {
        const results = await this.authenticationRepo.findOne({where: {authenticationString: authenticationString}});
        if (results != null) {
            return {authenticated: true, uuid: results.accountId}
        }
        return {authenticated: false}
    }
}