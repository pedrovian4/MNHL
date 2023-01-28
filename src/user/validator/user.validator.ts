import { ForbiddenException } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";

export class UserValidator
{   
    userData:CreateUserDto

    constructor( userData: CreateUserDto ){
        this.userData = userData;
    }

    validate(): ForbiddenException | boolean
    {
        if(!(this.isEmail() && this.isCountryNumber() && this.isCountryNumber() && this.isDate())){
            return new ForbiddenException(this.userData,"Data is not formated");
        }

        return true;
    }

    isEmail():boolean
    {
        const emailExpression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailExpression.test(this.userData.email);
    }

    isStateNumber():boolean
    {
        return false;
    }

    isCountryNumber():boolean
    {
        return false;
    }


    isDate() :boolean
    {
        return false;
    }
}