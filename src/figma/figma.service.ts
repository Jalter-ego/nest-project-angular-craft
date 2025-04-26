import { Injectable } from '@nestjs/common';
import { CreateFigmaDto } from './dto/create-figma.dto';
import { UpdateFigmaDto, UpdateImage } from './dto/update-figma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FigmaService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateFigmaDto) {
    const created = await this.prisma.figma.create({
      data: {
        hostEmail: dto.hostEmail,
        whitelist: dto.whitelist || [],
      },
      include: {
        rectangles: true,
        circles: true,
        texts: true,
      },
    });

    return created;
  }

  async findAll() {
    return this.prisma.figma.findMany({
      include: {
        rectangles: true,
        circles: true,
        texts: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.figma.findFirst({
      where: {id},
      include: {
        rectangles: true,
        circles: true,
        texts: true
      }

    });
  }

  findAllByUser(email: string) {
    return this.prisma.figma.findMany({
      where: { hostEmail: email },
      include: {
        rectangles: false,
        circles: false,
        texts: false,
      },
    });
  }
  
  async update(id: string, dto: UpdateFigmaDto) {
    console.log(id);
    console.log(dto);
    
    // Paso 1: eliminar todos los elementos actuales asociados a ese Figma
    await this.prisma.rectangle.deleteMany({ where: { figmaId: id } });
    await this.prisma.circle.deleteMany({ where: { figmaId: id } });
    await this.prisma.text.deleteMany({ where: { figmaId: id } });

    // Paso 2: crear los nuevos elementos (si vienen)
    const createdRectangles =
      dto.rectangles?.map((r) => ({
        ...r,
        figmaId: id,
      })) || [];

    const createdCircles =
      dto.circles?.map((c) => ({
        ...c,
        figmaId: id,
      })) || [];

    const createdTexts =
      dto.texts?.map((t) => ({
        ...t,
        figmaId: id,
      })) || [];

    // Paso 3: insertar todo
    await this.prisma.rectangle.createMany({ data: createdRectangles });
    await this.prisma.circle.createMany({ data: createdCircles });
    await this.prisma.text.createMany({ data: createdTexts });

    // Paso 4: retornar el figma actualizado
    return this.prisma.figma.findUnique({
      where: { id },
      include: {
        rectangles: true,
        circles: true,
        texts: true,
      },
    });
  }

  async updateImage(id: string, image: UpdateImage){
    console.log(image)
    await this.prisma.figma.update({
      where: {id},
      data: {
        image: image.image
      }
    })
    return {msg: "imagen currently to update"}
  }

  async remove(idFigma: string) {
    await this.prisma.figma.deleteMany({
      where: {
        id: idFigma
      }
    })
    return {msg:`This action removes a #${idFigma} figma`};
  }
}
