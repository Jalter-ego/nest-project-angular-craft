import { CreateRectangleDto } from '../rectangle/dto/create-rectangle.dto';
import { CreateCircleDto } from './create-circle.dto';
import { CreateTextDto } from '../text/dto/create-text.dto';

export class UpdateFigmaDto {
  rectangles?: CreateRectangleDto[];
  circles?: CreateCircleDto[];
  texts?: CreateTextDto[];
}

export class UpdateImage{
  image: string
}
