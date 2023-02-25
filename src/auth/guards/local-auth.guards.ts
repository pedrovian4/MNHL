import{
    ExecutionContext,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";



@Injectable()
export class LocalAuthGuard extends AuthGuard('local')
{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        return super.canActivate(context);
    }

    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser {
        if(err || !user){
            throw new UnauthorizedException(err?.message);
        }
        return user;
    }
}