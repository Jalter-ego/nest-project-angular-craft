import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PayloadService {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
  ) {}

  async updateCredits(email: string,amount:number) {
    console.log(amount);
    
    const user = await this.usersService.findOne(email);
    if (!user) return { msg: 'user not found' };
    const newCredits = user.credits + amount;
    await this.prisma.user.update({
      where: {
        email: email,
      },
      data: {
        credits: newCredits,
      },
    });
    return newCredits
  }
}
