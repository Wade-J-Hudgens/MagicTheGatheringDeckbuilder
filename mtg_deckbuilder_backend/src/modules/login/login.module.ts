
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../model/user.entity';
import { Authentication } from "../../model/authentication.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Users, Authentication])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}