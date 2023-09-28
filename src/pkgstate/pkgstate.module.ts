import { Module } from '@nestjs/common';
import { PkgstateService } from './pkgstate.service';
import { PkgstateController } from './pkgstate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PkgState } from './pkgstate.eneity';
import { Pkg } from 'src/pkg/pkg.entity';
import { Users } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PkgState, Pkg, Users])],
  providers: [PkgstateService],
  controllers: [PkgstateController],
  exports: [
    PkgstateService,
    TypeOrmModule,
  ],
})
export class PkgstateModule {}
