import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccelerometerModule } from './accelerometer/accelerometer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/accelerometer'),
    AccelerometerModule,
  ],
})
export class AppModule {}

