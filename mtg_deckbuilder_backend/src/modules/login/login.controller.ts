import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { Users } from '../../model/user.entity';
import { LoginResponseInterface, LoginRequestBody } from './login.interfaces';

@Controller()
export class LoginController {
  constructor(private readonly appService: LoginService) {}

  @Post("/api/login")
  async login(@Body() body: LoginRequestBody): Promise<LoginResponseInterface> {
    return this.appService.verifyUsernamePassword(body.email, body.password, body.rememberMe);
  } 
}