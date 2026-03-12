import { Injectable, UnauthorizedException } from '@nestjs/common';
import { USERS } from './contants';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(loginDto: LoginDto) {
    console.log(USERS);
    const user = USERS.find(
      (u) =>
        u.username === loginDto.username && u.password === loginDto.password,
    );

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
