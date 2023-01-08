import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { causeCustomers } from '../api/cause';
@Injectable()
export class caseService {

    constructor(private http: HttpClient) {}

    getCauseSmall() {
        return this.http.get<any>('assets/service/cause-page.service.json')
                    .toPromise()
                    .then(res => res.data as causeCustomers[])
                    .then(data => data);
    }
}
