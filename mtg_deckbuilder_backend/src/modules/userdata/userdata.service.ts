import { Inject, Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import * as dotenv from 'dotenv'
import { Users } from '../../model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetBasicUserDataResponseInterface } from './userdata.interfaces';
import fetch from 'node-fetch';

@Injectable()
export class UserDataService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>
  ) {}

  async getBasicUserData(authString: string): Promise<GetBasicUserDataResponseInterface> {
    const authUrl = process.env.BASE_URL + "/api/authentication";
    const authRes: any = await fetch(authUrl, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          authenticationString: authString
      }) 
    })
    .then((res) => res.json())
    console.log(authRes)
    if (!authRes.authenticated) {
      return {authenticated: false}
    }
    const user = await this.userRepo.findOne({where: {id: authRes.uuid}});
    console.log(user)
    return {authenticated: true, username: user.username, email: user.email, firstName: user.firstName, lastName: user.lastName}
  }
}
