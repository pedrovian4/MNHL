import { ArticleRead } from "../entities/article-read.entity";


export class ArticleReadDTO extends ArticleRead
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}