import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReqCreateTitle } from './interfaces/req-title.interface';
import { ResTitle } from './interfaces/res-title.interface';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  createTitle(body: ReqCreateTitle): Observable<ResTitle> {
    return this.http.post<ResTitle>(`${environment.Url}/title/createTitle`, body)
  }

  findAllTitle(): Observable<any> {
    return this.http.get<any>(`${environment.Url}/title/findAllTitle`)
  }

}
