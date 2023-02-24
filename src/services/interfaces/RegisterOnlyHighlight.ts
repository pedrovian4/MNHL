export interface RegisterOnlyHighlightAbstraction  {
    InsertByArticleId(id: number) : string;
    UpdateByArticleId(id: number): string;
    DeleteByArticleId(id: number): string;
}