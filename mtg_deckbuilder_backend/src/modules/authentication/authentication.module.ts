
import { Module } from '@nestjs/common';
//import { AuthenticationController } from './login.controller';
import { AuthenticationService } from './authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../model/user.entity';
import { Authentication } from '.././../model/authentication.entity';
import { AuthenticationController } from './authentication.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([Users, Authentication])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule {} 