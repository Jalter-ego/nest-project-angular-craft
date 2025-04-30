import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    id: string
    @IsEmail()
    @IsNotEmpty()
    email: string 
    @IsOptional()
    @IsString()
    name: string
    @IsString()
    @IsOptional()
    password: string
}

export class GetUserDto {
    id: string
    email: string
    name: string
    password: string
    credits: number
}
