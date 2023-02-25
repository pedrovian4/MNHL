import { Article } from "./article.entity";

export class ArticleHighLight 
{
    id?: number;
    userId: number;
    articleId: number;
    
    content: string;
    
    createdAt: Date;
    updatedAt: Date;
}