import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post, Request } from '@nestjs/common';
import { PkgstateService } from './pkgstate.service';

@Controller('pkgstate')
export class PkgstateController {
  constructor(
    private pkgstateService: PkgstateService,
  ) {}
  
  @Post('add')
  async add(@Body() body: any, @Request() req: any){
    let res = await this.pkgstateService.create('hhh', req.user);
    return res;
  }

  @Get('state/:pkgid')
  async getState(@Param('pkgid') pkgid: string){
    let res = await this.pkgstateService.getState(pkgid);
    return res;
  }

  // @Post('alter')
  // async alter(@Body() body: any, @Request() req: any){
  //   let res = await this.pkgstateService.alter(body., req.user);
  //   return res;
  // }

}
