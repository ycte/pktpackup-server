import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findOne(username: string): Promise<Users | undefined> {
    return this.usersRepository.findOneBy({ username: username });
  }

  async getMe(@Request() req): Promise<Users | undefined> {
    let res = await this.usersRepository.findOneBy({ userId: req.sub });
    // console.log(res);
    return res;
  }
}

