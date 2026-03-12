import { Injectable, UnauthorizedException } from '@nestjs/common';
import { USERS } from './contants';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(loginDto: LoginDto) {
    const user = USERS.find(
      (u) =>
        u.username === loginDto.username && u.password === loginDto.password,
    );

    if (!user) throw new UnauthorizedException('Invalid Credentials');

    const _user = {
      username: user.username,
      role: user.role,
    };

    const payload = { sub: user.id, ..._user };
    return {
      access_token: this.jwtService.sign(payload),
      user: _user,
    };
  }
}
