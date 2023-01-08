import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SatisfactionScoreService {
  private data = [
    {
      category: 'satisfaction',
      score: [{
        labels: ['ถังขยะเต็ม','การบริการของพนักงาน','กระดาษชำระหมด','กลิ่นเหม็น','โถชักโครกสกปรก','อุปกรณ์ชำรุด'],
        datasets: [{
          label: 'ระดับความพึงพอใจ',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)'
          ],
          borderWidth: 1
        }
        ]
      }
    ]
  }
]

constructor() { }

getscore(){
  return this.data;
}
}