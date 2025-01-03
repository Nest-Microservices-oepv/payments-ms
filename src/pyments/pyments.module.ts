import { Module } from '@nestjs/common';
import { PaymentsService } from './pyments.service';
import { PaymentsController } from './pyments.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [NatsModule],
})
export class PaymentsModule {}