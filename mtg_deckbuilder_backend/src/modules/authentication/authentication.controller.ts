import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { Authentication } from '../../model/authentication.entity';
import { GetUsersResponseInterface, GetUserRequestInterface } from './authentication.interfaces';

@Controller()
export class AuthenticationController {
  constructor(private readonly appService: AuthenticationService) {}

  @Post("/api/authentication")
  async authentication(@Body() body: GetUserRequestInterface): Promise<GetUsersResponseInterface> {
    return this.appService.getUserFromAuthenticationString(body.authenticationString)
  } 
}