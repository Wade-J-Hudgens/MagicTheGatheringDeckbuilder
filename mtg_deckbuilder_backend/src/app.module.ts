import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { RegistrationModule } from './modules/registration/registration.module';
import { LoginModule } from './modules/login/login.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserDataModule } from './modules/userdata/userdata.module';
import * as dotenv from 'dotenv'
import { join } from 'path';
import {DatabaseModule} from "./database.module"
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { RegistrationController } from './modules/registration/registration.controller';
import { RegistrationService } from './modules/registration/registration.service';
dotenv.config()

@Module({
  imports: [
    RegistrationModule,
    LoginModule,
    AuthenticationModule,
    UserDataModule,
    ConfigModule.forRoot({
    validationSchema: Joi.object({
      POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
    })
  }),
  DatabaseModule],
  controllers: [],
  providers: []
})
export class AppModule {}
 