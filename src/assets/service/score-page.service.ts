import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScorePageService {
    private score = [
        {
            labels: ['ดีมาก', 'ดี', 'ปานกลาง', 'พอใช้', 'ปรับปรุง'],
            datasets: [{
                data: [41, 18, 9, 6, 24],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF7F50",
                    "#9FE2BF",
                    "#FF5733"
                ]
            }
            ],
            hoverOffset: 4
        }
    ]

    constructor() { }

    getscore() {
        return this.score;
    }
}
