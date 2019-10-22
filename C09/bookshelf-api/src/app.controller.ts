import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService,
              private readonly usersService: UsersService,
    ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body('username') username: string) {
    return this.authService.login(await this.usersService.findUser(username));
  }

  @Post('register')
  async register(
  @Body('username') username: string,
  @Body('password') password: string,
  @Request() req,
  ) {
    return this.usersService.register(username, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
