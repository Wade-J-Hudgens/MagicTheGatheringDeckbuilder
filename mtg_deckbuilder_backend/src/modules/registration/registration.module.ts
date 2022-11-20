
import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../model/user.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}