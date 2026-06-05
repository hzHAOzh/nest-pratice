import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ResponseUtil } from '../common/utils/response.util';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.userService.register(registerDto);
    return ResponseUtil.success(result, '注册成功');
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const jwt = await this.userService.login(loginDto);
    return ResponseUtil.success(jwt, '登录成功');
  }
}
