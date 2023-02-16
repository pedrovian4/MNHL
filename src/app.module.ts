import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/controller/user.controller';
@Module({
  imports: [UserModule, PrismaClient, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
