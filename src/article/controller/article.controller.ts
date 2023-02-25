import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decotator';
import { User } from 'src/user/entities/user.entity';
import { ArticleDto } from '../dto/article.dto';

@Controller('api/v1/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: ArticleDto, @CurrentUser() user: User) {
    return this.articleService.create(createArticleDto, user.id);
  }

  @Get('/recomendations')
  popularNow()
  {

  }

  @Get('/recomendations/user')
  popularMe( @CurrentUser() user: User)
  {
    

  }
  
}
