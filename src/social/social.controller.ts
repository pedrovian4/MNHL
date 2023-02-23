import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto);
  }

  @Get()
  findAll() {
    return this.socialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(+id, updateSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialService.remove(+id);
  }
}
