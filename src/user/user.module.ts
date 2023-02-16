import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Module({
  controllers: [UserController],
  providers: [UserService,{
    provide: APP_GUARD,
    useClass: JwtAuthGuard
  }, PrismaService]
})
export class UserModule {}
