import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './../dto/create-user.dto';
import { UpdateUserDto } from './../dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  user: any;

  constructor (private readonly prisma: PrismaService){}


  async create(createUserDto: CreateUserDto) {
    
    
    const data ={
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    };


    console.log(data);
    const createdUser = await this.prisma.users.create(
      {
        data:{
          email:data.email,
          first_name:data.firstName,
          last_name:data.lastName,
          password:data.password,
          country_number:data.countryNumber,
          state_number: data.stateNumber,
          article:{},
          contact:{},
          created_at: data.createdAt,
          updated_at: data.updatedAt
        },
      }
    );

    return {
      ...createdUser,
      password:undefined
    }
  }


  findByEmail(email:string){
    return this.prisma.users.findUnique({
      where:{
        email:email
      }
      });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }


}
