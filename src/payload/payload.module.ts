import { Module } from '@nestjs/common';
import { PayloadService } from './payload.service';
import { PayloadController } from './payload.controller';
import { UsersModule } from 'src/users/users.module';
import { StripeService } from './stripe/stripe.service';

@Module({
  imports: [UsersModule],
  controllers: [PayloadController],
  providers: [PayloadService, StripeService],
})
export class PayloadModule {}
