import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EulerAngles } from '../interfaces/euler-angles.interface';
import { Quaternion } from '../interfaces/quaternion.interface';

@Injectable({
  providedIn: 'root',
})
export class EulerAnglesConverterService {
  
  client = inject(HttpClient)

  baseUrl = 'https://localhost:32771'

  public convertEulerAngles(angles : EulerAngles) {
    return this.client.post<Quaternion>(`${this.baseUrl}/EulerAnglesConverter`, angles)
  }
}
