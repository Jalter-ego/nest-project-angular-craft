import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { CreateCircleDto } from '../dto/create-circle.dto';

@Injectable()
export class TextService {
  texts: CreateTextDto[] = []
  create(createTextDto: CreateTextDto) {
    this.texts.push(createTextDto)
    return createTextDto
  }

  findAll() {
    return this.texts;
  }

  findOne(id: number) {
    return `This action returns a #${id} text`;
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    return `This action updates a #${id} text`;
  }

  remove(id: number) {
    return `This action removes a #${id} text`;
  }
}
