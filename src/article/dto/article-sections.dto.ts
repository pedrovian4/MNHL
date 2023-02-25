import { ArticleSection } from "../entities/article-section.entity";

export class ArticleSectionsDTO extends ArticleSection
{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}