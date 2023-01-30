import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports:[UserModule, JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn:'30d'},
  })],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, PrismaService]
})
export class AuthModule {}
