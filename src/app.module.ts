import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RectangleModule } from './figma/rectangle/rectangle.module';
import { CircleModule } from './figma/circle/circle.module';
import { TextModule } from './figma/text/text.module';
import { FigmaModule } from './figma/figma.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, RectangleModule, CircleModule, 
    TextModule, FigmaModule, UsersModule, PrismaModule,
    PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
