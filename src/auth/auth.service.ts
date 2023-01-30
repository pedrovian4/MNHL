import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as  bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
@Injectable()
export class AuthService 
{
    constructor(private readonly jwtService :  JwtService ,private readonly prisma : PrismaService){}


    login(user : User) : UserToken{
        
        const payload : UserPayload={
            sub: user.id,
            email: user.email,
            name: user.firstName,
        }; 
        
        const jwtToken = this.jwtService.sign(payload);
        
        const userToken : UserToken ={
            acess_token: jwtToken
        };

        return userToken;
    }

    async validateUser(email:string, password:string)
    {
        const user = await  this.prisma.users.findUnique({
            where:{
                email:email 
            }
        }
        );

        if(user){
            const passwordisValid = await bcrypt.compare(password,user.password);
            if(user.email == email && passwordisValid) {
                return {...user, password:undefined};
            }

        }

        return false;

    }

}