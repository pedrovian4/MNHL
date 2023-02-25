import { ArticleCommentResponse } from "../entities/article-comment-response.entity";

export class ArticleCommentsDTO extends ArticleCommentResponse
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}