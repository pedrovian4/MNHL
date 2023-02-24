import { ReadOnlyHighlight } from './../services/ReadOnlyHighlightService';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HighlightService } from '../services/highlight.service';

@Controller('articlehighlight')
export class ArticlehighlightController {
    constructor(private readonly articleHighlightService: HighlightService) {}

    @Post()
    create() {
      return this.articleHighlightService.registerHighlight.InsertByArticleId(0);
    }
  
    @Get()
    findAll() {
      return this.articleHighlightService.readHighlight.AllByArticleId(0);
    }
  
    @Patch(':id')
    update(@Param('id') id: string) {
      return this.articleHighlightService.registerHighlight.UpdateByArticleId(0);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.articleHighlightService.registerHighlight.DeleteByArticleId(0);
    }
}
