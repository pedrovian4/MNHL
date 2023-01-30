import { Controller, Get, Post, Body, Patch, Param, Req} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';



@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService){} 


  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }


}
