import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as  bcrypt from 'bcrypt';
@Injectable()
export class AuthService 
{
    constructor(private readonly prisma : PrismaService){}

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