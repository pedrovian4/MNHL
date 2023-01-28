import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createAuthDto } from '../dto/ create-auth.dto';
import { UserValidator } from '../validator/user.validator';
import { CreateUserDto } from './../dto/create-user.dto';
import { UpdateUserDto } from './../dto/update-user.dto';



@Injectable()
export class UserService {
  user: any;

  constructor (private readonly prisma: PrismaService){}


  create(createUserDto: CreateUserDto, createAuthDto : createAuthDto) {
    //TODO: create interface for validation
    new UserValidator(createUserDto).validate();
    
    this.user.service.create()
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
