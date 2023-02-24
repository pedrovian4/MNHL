import { Injectable } from '@nestjs/common';
import { RegisterOnlyHighlightAbstraction } from './interfaces/RegisterOnlyHighlight';

export class RegisterOnlyHighlight implements RegisterOnlyHighlightAbstraction {
  DeleteByArticleId(id: number): string {
    throw new Error('Method not implemented.');
  }
  InsertByArticleId(id: number) : string{
    return 'Artigo Inserido';
  }
  UpdateByArticleId(id: number) : string {
    return 'Artigo Atualizado.';
  }
}
