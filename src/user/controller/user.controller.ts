import { Controller, Get, Post, Body, Patch, Param} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';



@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService){} 


  @Get()
  index(){
    return {msg:'ok', status:200};
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }


}
