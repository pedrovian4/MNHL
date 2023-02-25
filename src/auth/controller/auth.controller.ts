import {Controller, HttpCode, HttpStatus, Post,  UseGuards } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { IsPublic } from '../decorators/is-public.decorator';
import { AuthRequest } from '../models/AuthRequest';
import { LocalAuthGuard } from '../guards/local-auth.guards';
import { Request } from '@nestjs/common';
@Controller('/api/v1/auth')
export class AuthController 
{
    constructor(private readonly authService: AuthService){}
    
    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req: AuthRequest) {
      return this.authService.login(req.user);
    }
}
