import { Module } from '@nestjs/common';
import { PaymentsService } from './pyments.service';
import { PaymentsController } from './pyments.controller';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
