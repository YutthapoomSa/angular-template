import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemPageService {
  private data = [
    {
      category: 'problem',
      score: [
        {label: 'ถังขยะเต็ม', data: '31'},
        {label: 'การบริการของพนักงาน', data: '8'},
        {label: 'กระดาษชำระหมด', data: '4'},
        {label: 'กลิ่นเหม็น', data: '13'},
        {label: 'โถชักโครกสกปรก', data: '17'},
        {label: 'อุปกรณ์ชำรุด', data: '27'}
      ]
    }
  ]

  constructor() { }

  getscore(){
    return this.data;
  }
}
