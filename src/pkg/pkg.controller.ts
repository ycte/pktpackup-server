import { Controller, Request, Get } from '@nestjs/common';
import { PkgService } from './pkg.service';

@Controller('pkg')
export class PkgController {
  constructor(private pkgService: PkgService) {}

  @Get('getmy')
  async getMy(@Request() req): Promise<any> {
    return await this.pkgService.getMyPkg(req.user);
  }
  
}
