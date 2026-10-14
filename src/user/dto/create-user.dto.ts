import { IsNotEmpty, IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    firstname!: String

    @IsNotEmpty()
    @IsString()
    lastname!: String

    @IsNotEmpty()
    @IsString()
    username!: String

    @IsNotEmpty()
    @IsEmail() 
    email!: String

    @IsNotEmpty() 
    @IsString()
    @MinLength(8)
    password!: String

    @IsNotEmpty()
    @IsString()
    confirmation_password!: String

}