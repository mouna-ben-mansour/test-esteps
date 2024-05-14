import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccelerometerController } from './accelerometer.controller';
import { AccelerometerService } from './accelerometer.service';
import { AccelerometerSchema } from './accelerometer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AccelerometerData', schema: AccelerometerSchema }])
  ],
  controllers: [AccelerometerController],
  providers: [AccelerometerService],
})
export class AccelerometerModule {}
