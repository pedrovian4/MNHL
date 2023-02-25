import { ArticleHighLight } from "../entities/article-highlight.entity";


export class ArticleHiglightDTO extends ArticleHighLight
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}