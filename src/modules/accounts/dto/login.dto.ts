import { Transform } from 'class-transformer';
import { IsEmail, IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '../interfaces/responses.interface'

export class LoginDto {
     @IsEmail()
     @IsNotEmpty()
     email: string;

     @IsString()
     @IsNotEmpty()
     password: string;

     @IsNotEmpty()
     @IsEnum(Role, { message: 'Role  must be valid!' })
     @Transform(({ value }) => value.toLowerCase())
     role: string;

     @IsNotEmpty()
     @IsString()
     userAgent: string;
}
