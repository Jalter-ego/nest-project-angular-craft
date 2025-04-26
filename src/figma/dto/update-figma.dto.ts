import { CreateRectangleDto } from './create-rectangle.dto';
import { CreateCircleDto } from './create-circle.dto';
import { CreateTextDto } from './create-text.dto';

export class UpdateFigmaDto {
  rectangles?: CreateRectangleDto[];
  circles?: CreateCircleDto[];
  texts?: CreateTextDto[];
}

export class UpdateImage{
  image: string
}
