import { PartialType } from '@nestjs/mapped-types';
import { CreateRectangleDto } from './create-rectangle.dto';

export class UpdateRectangleDto extends PartialType(CreateRectangleDto) {}
