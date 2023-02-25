import { Module } from '@nestjs/common';
import { ArticleService } from './service/article.service';
import { ArticleController } from './controller/article.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService]
})
export class ArticleModule {}
