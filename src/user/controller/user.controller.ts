import { Controller, Get, Post, Body, Patch, Param, Req} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decotator';
import { User } from '../entities/user.entity';



@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService){} 
  

  @Get('me')
  me(@CurrentUser() user:User): User{
    return user;
  }  

  @IsPublic()
  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }


}
