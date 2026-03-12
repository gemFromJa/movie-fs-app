import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { ROLES } from '../contants';

type JwtUser = {
  id: number;
  email: string;
  role: ROLES;
};

type AuthenticatedRequest = Request & {
  user: JwtUser;
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // no roles set on route — allow everyone through
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user;

    if (!user) return false;

    return requiredRoles.includes(user.role);
  }
}
