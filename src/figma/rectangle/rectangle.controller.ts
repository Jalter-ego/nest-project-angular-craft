import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RectangleService } from './rectangle.service';
import { CreateRectangleDto } from './dto/create-rectangle.dto';
import { UpdateRectangleDto } from './dto/update-rectangle.dto';

@Controller('rectangle')
export class RectangleController {
  constructor(private readonly rectangleService: RectangleService) {}

  @Post()
  create(@Body() createRectangleDto: CreateRectangleDto) {
    return this.rectangleService.create(createRectangleDto);
  }

  @Get()
  findAll() {
    return this.rectangleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rectangleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRectangleDto: UpdateRectangleDto) {
    return this.rectangleService.update(+id, updateRectangleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rectangleService.remove(+id);
  }
}
