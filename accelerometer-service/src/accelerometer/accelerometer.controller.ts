import { Controller, Post, Body } from '@nestjs/common';
import { AccelerometerService } from './accelerometer.service';

@Controller('accelerometer')
export class AccelerometerController {
  constructor(private readonly accelerometerService: AccelerometerService) {}

  @Post('data')
  async create(@Body() data: any): Promise<any> {
    return this.accelerometerService.create(data);
  }
}
