import { Injectable } from '@nestjs/common';
import { ReadOnlyHighlightAbstraction } from './interfaces/ReadOnlyHighlight';

export class ReadOnlyHighlight implements ReadOnlyHighlightAbstraction {
  AllByArticleId(id: number): string {
    return "Em AllByArticleId " + id;
  }
}
