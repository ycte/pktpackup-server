import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  
  @Get('me')
  async getMe(@Request() req) {
    // console.log(req.user);
    return this.usersService.getMe(req.user);
  }
}
