import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
