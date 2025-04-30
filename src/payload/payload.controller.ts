import { Body, Controller, Post } from '@nestjs/common';
import { PayloadService } from './payload.service';
import { StripeService } from './stripe/stripe.service';

@Controller('payload')
export class PayloadController {
  constructor(
    private readonly payloadService: PayloadService,
    private stripeService: StripeService
  ) {}

  @Post('credits')
  updateCredits(@Body() {email,amount}){
    return this.payloadService.updateCredits(email,amount)
  }

  @Post('stripe')
  async createStripeSession(
    @Body() body: { amount: number; currency: string; nombre_servicio: string },
  ) {
    const { amount, currency, nombre_servicio } = body;
    return this.stripeService.createCheckoutSession(amount, currency, nombre_servicio);
  }
}
