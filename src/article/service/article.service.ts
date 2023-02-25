import { Injectable } from '@nestjs/common';
import {ArticleDto } from '../dto/article.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ArticleService {
    public constructor( private readonly  prisma: PrismaService){}
  
  create(createArticleDto: ArticleDto, userId:number) {
    
    createArticleDto.authorId = userId;

    return this.prisma.articles.create(
      {
      data:{
        title: createArticleDto.title, 
        subtitle: createArticleDto.subtitle,
        content: createArticleDto.content, 
        author_id: createArticleDto.authorId, 
        stars: createArticleDto.stars, 
        published: createArticleDto.published, 
        updated_at: createArticleDto.updatedAt,
        created_at: createArticleDto.createdAt
      }
    }
    );
  }

  
}
