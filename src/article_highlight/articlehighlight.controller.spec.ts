import { Test, TestingModule } from '@nestjs/testing';
import { ArticlehighlightController } from './articlehighlight.controller';

describe('ArticlehighlightController', () => {
  let controller: ArticlehighlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlehighlightController],
    }).compile();

    controller = module.get<ArticlehighlightController>(ArticlehighlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
