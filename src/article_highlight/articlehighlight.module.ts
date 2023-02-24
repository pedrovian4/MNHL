import { Module } from '@nestjs/common';
import { HighlightService } from '../services/highlight.service';
import { ArticlehighlightController } from './articlehighlight.controller';

@Module({
  controllers: [ArticlehighlightController],
  providers: [HighlightService]
})
export class ArticleModule {}
