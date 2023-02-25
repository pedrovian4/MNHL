import { ArticleLike } from "../entities/article-like.entity";

export class ArticleLikesDTO extends ArticleLike
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}