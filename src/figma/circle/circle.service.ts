import { Injectable } from '@nestjs/common';
import { CreateCircleDto } from '../dto/create-circle.dto';
import { UpdateCircleDto } from './dto/update-circle.dto';

@Injectable()
export class CircleService {
  circles: CreateCircleDto[] = []
  create(createCircleDto: CreateCircleDto) {
    this.circles.push(createCircleDto)
    return createCircleDto
  }

  findAll() {
    return this.circles
  }

  findOne(id: number) {
    return `This action returns a #${id} circle`;
  }

  update(id: number, updateCircleDto: UpdateCircleDto) {
    return `This action updates a #${id} circle`;
  }

  remove(id: number) {
    return `This action removes a #${id} circle`;
  }
}
