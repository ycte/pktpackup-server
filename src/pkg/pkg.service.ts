import { Injectable, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pkg } from './pkg.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';

@Injectable()
export class PkgService {
  constructor(
    @InjectRepository(Pkg)
    private readonly pkgRepository: Repository<Pkg>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }
  
  async getMyPkg(@Request() req): Promise<Pkg[]> {
    let user =
      await this.usersRepository.findOneBy({ userId: req.sub });
    let res = await this.pkgRepository.find({
      where: [{ userId: user.userId }],
    });
    // console.log('getmypkg:', res);
    return res;
  }
}
