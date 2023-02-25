import { ArticleComment } from "../entities/article-comment.entity";

export class ArticleCommentResponsesDTO extends ArticleComment
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
}