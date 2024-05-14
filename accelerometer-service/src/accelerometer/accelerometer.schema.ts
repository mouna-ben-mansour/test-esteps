import * as mongoose from 'mongoose';

export const AccelerometerSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  z: Number,
  timestamp: { type: Date, default: Date.now }
});
