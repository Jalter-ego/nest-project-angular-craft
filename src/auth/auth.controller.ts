import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service'; // DTO para recibir el token
import { GoogleLoginDto, LoginDto } from './auth.login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google')
  async googleLogin(@Body() googleLoginDto: GoogleLoginDto) {
    return this.authService.googleLogin(googleLoginDto.token);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto)
  }
}
