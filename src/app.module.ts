import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserModule } from './user/user.module';
@Module({
  imports: [UserModule, PrismaClient],
  controllers: [],
  providers: [],
})
export class AppModule {}
