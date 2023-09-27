import { Module } from '@nestjs/common';
import { PkgstateService } from './pkgstate.service';
import { PkgstateController } from './pkgstate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PkgState } from './pkgstate.eneity';

@Module({
  imports: [TypeOrmModule.forFeature([PkgState])],
  providers: [PkgstateService],
  controllers: [PkgstateController],
  exports: [
    PkgstateService,
    TypeOrmModule,
  ],
})
export class PkgstateModule {}
