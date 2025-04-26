import { Module } from '@nestjs/common';
import { RectangleService } from './rectangle.service';
import { RectangleController } from './rectangle.controller';

@Module({
  controllers: [RectangleController],
  providers: [RectangleService],
})
export class RectangleModule {}
