import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ReqCreateResult } from './interfaces/req-result.interface';
import { ResresultData } from './interfaces/res-result.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  createResult(body: ReqCreateResult): Observable<ResresultData> {
    return this.http.post<ResresultData>(`${environment.Url}/result/createResult`, body)
  }

}
