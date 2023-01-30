import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { Request } from '@nestjs/common';
import { AuthRequest } from './models/AuthRequest';

@Controller()
export class AuthController 
{
    constructor(private readonly authService: AuthService){}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req:AuthRequest): any 
    {
        return this.authService.login(req.user);
    }
}
