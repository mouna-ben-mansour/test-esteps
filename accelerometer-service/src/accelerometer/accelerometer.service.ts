import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccelerometerService {
  constructor(
    @InjectModel('AccelerometerData')
    private readonly accelerometerModel: Model<any>,
  ) {}

  async create(data: any): Promise<any> {
    const createdData = new this.accelerometerModel(data);
    return createdData.save();
  }
}
