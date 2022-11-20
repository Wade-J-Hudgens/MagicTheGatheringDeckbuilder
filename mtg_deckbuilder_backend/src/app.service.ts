import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './model/user.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepo: Repository<Users>
  ) {}
  async getHello(): Promise<Users[]> {
    return this.userRepo.find();
  }
}
