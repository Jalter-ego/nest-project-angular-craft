import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FigmaService } from './figma.service';
import { CreateFigmaDto } from './dto/create-figma.dto';
import { UpdateFigmaDto, UpdateImage } from './dto/update-figma.dto';

@Controller('figma')
export class FigmaController {
  constructor(private readonly figmaService: FigmaService) {}

  @Post()
  create(@Body() figmaDto: CreateFigmaDto) {
    console.log(figmaDto)
    return this.figmaService.create(figmaDto);
  }

  @Get()
  findAll() {
    return this.figmaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.figmaService.findOne(id);
  }

  @Get('by-email/:email')
  findAllByUser(@Param('email') email: string) {
    return this.figmaService.findAllByUser(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFigmaDto: UpdateFigmaDto) {
    return this.figmaService.update(id, updateFigmaDto);
  }

  @Patch('image/:id')
  updateImage(@Param('id') id: string, @Body() image: UpdateImage) {
    return this.figmaService.updateImage(id, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.figmaService.remove(id);
  }
}
