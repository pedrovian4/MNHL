import { Body, Controller, HttpCode, HttpStatus, Post,  UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { Request } from 'express';
import { UnauthorizedError } from './errors/unauthorized.error';

@Controller('/api/v1/auth')
export class AuthController 
{
    constructor(private readonly authService: AuthService){}
    
    @IsPublic()
    @Post('login')
    async login(@Body() req: Request)
    {   
        const user  = await  this.authService.validateUser(req['email'], req['password']);
        if(user){
            console.log(user);
            return this.authService.login(user);
        }

        return new UnauthorizedError();

    }
}
