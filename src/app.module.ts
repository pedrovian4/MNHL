import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { SocialModule } from './social/social.module';
@Module({
  imports: [UserModule, PrismaClient, AuthModule, ArticleModule, SocialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
