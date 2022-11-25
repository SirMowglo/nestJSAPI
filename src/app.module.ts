import { Module } from '@nestjs/common';
import { MonumentsModule } from './monuments/monuments.module';


@Module({
  imports: [MonumentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
