import { Injectable, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PkgState, PkgStateEnum } from './pkgstate.eneity';
import { Pkg } from 'src/pkg/pkg.entity';
import { Users } from 'src/users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PkgstateService {
  constructor(
    @InjectRepository(PkgState)
    private readonly pkgstateRepository: Repository<PkgState>,
    @InjectRepository(Pkg)
    private readonly pkgRepository: Repository<Pkg>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }
  
  async create(content: string, @Request() req)
    : Promise<PkgState | undefined> {
    const user = await this.usersRepository
      .findOneBy({ userId: req.sub });
    
    var pkg = new Pkg();
    const pkgCnt = await this.pkgRepository.countBy({ userId: req.sub });
    pkg.userId = req.sub;
    pkg.pkgId = `${req.sub}-${pkgCnt + 1}`;
    pkg.state = PkgStateEnum.init;
    pkg.content = content;
    // console.log(pkg)
    const pkgRes = await this.pkgRepository.save(pkg);

    const pkgstate = new PkgState();
    pkgstate.pkgId = pkgRes.pkgId;
    pkgstate.state = PkgStateEnum.init;
    pkgstate.userId = req.sub;
    pkgstate.reason = content;
    pkgstate.time= new Date();
    return await this.pkgstateRepository.save(pkgstate);
    // return undefined;
  }

  async alter
  (pkgId: string, state: PkgStateEnum, reason: string, @Request() req)
    : Promise<PkgState | undefined> {
    const pkg = await this.pkgRepository
      .findOneBy({ pkgId: pkgId });
    if (pkg) {
      const pkgstate = new PkgState();
      pkgstate.pkgId = pkgId;
      pkgstate.state = state;
      pkgstate.reason = reason;
      pkgstate.time = new Date();
      pkgstate.userId = req.sub;
      return await this.pkgstateRepository.save(pkgstate);
    }
    return undefined;
  }

  async getState(pkgId: string) {
    return await this.pkgstateRepository.find({
      where: {
        pkgId: pkgId,
      },
    });
  }
}
