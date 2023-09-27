import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PkgModule } from './pkg/pkg.module';
import { PkgstateModule } from './pkgstate/pkgstate.module';
import { Pkg } from './pkg/pkg.entity';
import { PkgState } from './pkgstate/pkgstate.eneity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jsersavetheworld',
      database: 'test',
      entities: [Users, Pkg, PkgState],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    PkgModule,
    PkgstateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
