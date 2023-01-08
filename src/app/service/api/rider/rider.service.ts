import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqCreateRider } from './interface/req-rider.interface';
import { ResRider } from './interface/res-rider.interface';


@Injectable({
  providedIn: 'root'
})
export class RiderService {

  constructor(private http: HttpClient) { }

  createRider(body: ReqCreateRider): Observable<ResRider> {
    return this.http.post<ResRider>(`${environment.Url}/rider/createRider`, body)
  }

  findAllRider(): Observable<any> {
    return this.http.get<any>(`${environment.Url}/rider/findAllRider`)
  }

}
