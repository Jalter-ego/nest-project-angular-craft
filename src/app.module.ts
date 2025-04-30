import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FigmaModule } from './figma/figma.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PayloadModule } from './payload/payload.module';

@Module({
  imports: [AuthModule,FigmaModule, UsersModule, PrismaModule,
    PrismaModule,PayloadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
