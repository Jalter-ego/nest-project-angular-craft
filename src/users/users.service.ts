import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService
  ){}

  async create(user: CreateUserDto) {
    const userFind = await this.prisma.user.findUnique({
      where: {
        email: user.email
      }
    })

    if(userFind)
      return 'user already exist'

    return this.prisma.user.create({data: user})
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(email: string) {
    return await this.prisma.user.delete({
      where: {
        email: email
      }
    });
  }
}
