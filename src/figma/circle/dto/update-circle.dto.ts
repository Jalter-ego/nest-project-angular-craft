import { PartialType } from '@nestjs/mapped-types';
import { CreateCircleDto } from '../../dto/create-circle.dto';

export class UpdateCircleDto extends PartialType(CreateCircleDto) {}
