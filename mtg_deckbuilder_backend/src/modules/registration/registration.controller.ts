import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { Users } from '../../model/user.entity';
import { RegisterUserResponseInterface, RegisterUserRequestBody, CheckEmailUserInterface, EmailUserRequestInterface } from './registration.interfaces';

@Controller()
export class RegistrationController {
  constructor(private readonly appService: RegistrationService) {}

  @Post("/api/registerUser")
  async registerUser(@Body() body: RegisterUserRequestBody): Promise<RegisterUserResponseInterface> {
    console.log(body)
    return this.appService.registerUser(body.email, body.username, body.password, body.firstName, body.lastName);
  }

  @Post("/api/registerUser/checkEmail")
  async checkEmail(@Body() body: EmailUserRequestInterface): Promise<CheckEmailUserInterface> {
    const email_exists = await this.appService.checkIfEmailExists(body.value);
    return {exists: email_exists}
  }

  @Post("/api/registerUser/checkUser")
  async checkUser(@Body() body: EmailUserRequestInterface): Promise<CheckEmailUserInterface> {
    const username_exists = await this.appService.checkIfUsernameExists(body.value);
    return {exists: username_exists}
  }
}