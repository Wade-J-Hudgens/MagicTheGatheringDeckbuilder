
import { Module } from '@nestjs/common';
import { UserDataController } from './userdata.controller';
import { UserDataService } from './userdata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../model/user.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserDataController],
  providers: [UserDataService],
})
export class UserDataModule {}