import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccelerometerService {

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post<any>('https://bab0-196-224-128-179.ngrok-free.app/accelerometer/data', data);
  }
}
