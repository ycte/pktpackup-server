import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  
  @Get('me')
  async getMe(@Request() req) {
    return this.usersService.getMe(req.user);
  }
}
