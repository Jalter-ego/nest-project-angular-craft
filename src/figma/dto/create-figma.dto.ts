import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCircleDto } from './create-circle.dto';
import { CreateRectangleDto } from './create-rectangle.dto';
import { CreateTextDto } from './create-text.dto';

export class CreateFigmaDto {
    @IsEmail()
    hostEmail: string;
    whitelist: string[];
    nameFigma: string
    rectangles: CreateRectangleDto[];
    circles: CreateCircleDto[];
    texts: CreateTextDto[];
  }
  
