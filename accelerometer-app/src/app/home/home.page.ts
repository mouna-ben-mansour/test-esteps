import {Component, OnInit} from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { AccelerometerService } from '../../services/accelerometer.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  accData: any;
  constructor(private accelerometerService: AccelerometerService) {}

  ngOnInit() {
    this.startAccelerometer();
  }

  sendDataToServer(accelerometerData:any) {
   // const accelerometerData = { x: 0.5, y: 0.3, z: 0.8 }; // Example data
    this.accelerometerService.sendData(accelerometerData)
      .subscribe(
        response => {
          console.log('Data sent successfully!', response);
        },
        error => {
          console.error('Error sending data:', error);
        }
      );
  }
  async startAccelerometer() {
    await Motion.addListener('accel', event => {
      console.log('Device motion event:', event);
      this.accData = { x: event.acceleration.x, y: event.acceleration.y, z: event.acceleration.z } ;
      this.sendDataToServer(this.accData);
    });
  }
}
