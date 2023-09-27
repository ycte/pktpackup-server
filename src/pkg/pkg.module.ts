import { Module } from '@nestjs/common';
import { PkgService } from './pkg.service';
import { PkgController } from './pkg.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pkg } from './pkg.entity';
import { Users } from 'src/users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pkg, Users])],
  providers: [PkgService],
  controllers: [PkgController],
  exports: [
    PkgService,
    TypeOrmModule
  ],
})
export class PkgModule {}
