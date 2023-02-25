import { Module } from '@nestjs/common';
import { SocialService } from './service/social.service';
import { SocialController } from './controller/social.controller';

@Module({
  controllers: [SocialController],
  providers: [SocialService]
})
export class SocialModule {}
