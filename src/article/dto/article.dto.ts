
import { User } from "src/user/entities/user.entity";
import { Article } from "../entities/article.entity";

export class ArticleDto extends Article{
    createdAt: Date = new Date()
    updatedAt: Date = new Date()
    
}
