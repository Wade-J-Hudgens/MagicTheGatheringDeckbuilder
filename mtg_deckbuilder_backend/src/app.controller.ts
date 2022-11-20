import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './model/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Users[]> {
    return this.appService.getHello();
  }
}
