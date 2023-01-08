import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportPageService {
  private data = [
    {
      category: 'report',
      data: [
        {label: 'อยากให้มีสายชำระ'},
        {label: 'หมดเกือบทุกห้อง และกระดาษเช็ดมือก็หมด'},
        ]
    }
  ]

  getdata(){
    return this.data;
  }
  constructor() { }
}
