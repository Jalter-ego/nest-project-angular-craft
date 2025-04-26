import { Injectable } from '@nestjs/common';
import { CreateRectangleDto } from './dto/create-rectangle.dto';
import { UpdateRectangleDto } from './dto/update-rectangle.dto';

@Injectable()
export class RectangleService {
  rectangles: CreateRectangleDto[] = []
  create(createRectangleDto: CreateRectangleDto) {
    this.rectangles.push(createRectangleDto)
    return createRectangleDto;
  }

  findAll() {
    return this.rectangles;
  }

  findOne(id: number) {
    return `This action returns a #${id} rectangle`;
  }

  update(id: number, updateRectangleDto: UpdateRectangleDto) {
    return `This action updates a #${id} rectangle`;
  }

  remove(id: number) {
    return `This action removes a #${id} rectangle`;
  }
}
