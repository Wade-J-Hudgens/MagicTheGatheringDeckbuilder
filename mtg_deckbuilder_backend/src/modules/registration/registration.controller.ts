import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { Users } from '../../model/user.entity';
import { RegisterUserResponseInterface, RegisterUserRequestBody } from './registration.interfaces';

@Controller()
export class RegistrationController {
  constructor(private readonly appService: RegistrationService) {}

  @Post("/api/registerUser")
  async registerUser(@Body() body: RegisterUserRequestBody): Promise<RegisterUserResponseInterface> {
    return this.appService.registerUser(body.email, body.username, body.password, body.firstName, body.lastName);
  }
}