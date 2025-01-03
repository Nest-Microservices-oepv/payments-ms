import { Module } from '@nestjs/common';
import { PaymentsModule } from './pyments/pyments.module';


@Module({
  imports: [PaymentsModule],

})
export class AppModule {}