import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IpInterface } from './../../interface/ip-interface';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private _httpClient: HttpClient) { }

  // Methord to get the users public ip
  public get getIP(): Observable<IpInterface> {
    // Perform a get on https://api.ipify.org/?format=json
    return this._httpClient.get<IpInterface>('https://api.ipify.org/?format=json', { responseType: 'json' });
  }
}
