import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqCreateSubTitle } from './interfaces/req-sub-title.interface';
import { ResSubTitle } from './interfaces/res-sub-title.interface';

@Injectable({
  providedIn: 'root'
})
export class SubTitleService {

  constructor(private http: HttpClient) { }
  
  createSubTitle(body: ReqCreateSubTitle): Observable<ResSubTitle> {
    return this.http.post<ResSubTitle>(`${environment.Url}/sub-title/createSubTitle`, body)
  }

  findAllSubTitle(): Observable<any> {
    return this.http.get<any>(`${environment.Url}/sub-title/findAllSubTitle`)
  }

}

