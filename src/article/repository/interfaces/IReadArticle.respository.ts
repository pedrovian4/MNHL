import { ArticleCommentResponsesDTO } from "src/article/dto/article-comment-response.dto";
import { ArticleCommentsDTO } from "src/article/dto/article-comment.dto";
import { ArticleHiglighDTO } from "src/article/dto/article-highlight.dto";
import { ArticleLikesDTO } from "src/article/dto/article-likes.dto";
import { ArticleReadDTO } from "src/article/dto/article-read.dto";
import { ArticleSectionsDTO } from "src/article/dto/article-sections.dto";
import { ReadArticleError } from "src/article/errors/ReadArticle.error";

interface IReadArticleRepository
{
    articleReadRegister(): ArticleReadDTO | ReadArticleError ;

    articleHighlightRegister():  ArticleHiglighDTO | ReadArticleError;

    articleLikeRegister(): ArticleLikesDTO | ReadArticleError;

    articleCommentsRegister(): ArticleCommentsDTO | ReadArticleError;

    articleCommentsResponseRegister(): ArticleCommentResponsesDTO | ReadArticleError

    articleSectionRegister(): ArticleSectionsDTO | ReadArticleError;


}