import { IsEmail, IsNotEmpty, isNumberString, Matches } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string; 
    createdAt = new Date();
    updatedAt = new Date();
}
