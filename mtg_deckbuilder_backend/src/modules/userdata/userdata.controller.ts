import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserDataService } from './userdata.service';
import { Users } from '../../model/user.entity';
import { GetBasicUserDataRequestInterface, GetBasicUserDataResponseInterface } from './userdata.interfaces';

@Controller()
export class UserDataController {
  constructor(private readonly appService: UserDataService) {}

  @Post("api/getBasicUserData")
  async getBasicUserData(@Body() body: GetBasicUserDataRequestInterface): Promise<GetBasicUserDataResponseInterface> {
    return this.appService.getBasicUserData(body.authenticationString);
  }
}