import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./_dashboard.scss']
})
export class DashboardComponent implements OnInit {

    items: MenuItem[];

    products: Product[];

    chartData: any;

    scoreData: any;

    deteData: any;

    reportData: any;

    pieOptions: any;


    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    constructor(private productService: ProductService, public configService: ConfigService) { }

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
        this.deteData = {
            labels: ['ถังขยะเต็ม', 'การบริการของพนักงาน', 'กระดาษชำระหมด', 'กลิ่นเหม็น', 'โถชักโครกสกปรก', 'อุปกรณ์ชำรุด'],
            datasets: [
                {
                    data: [31, 8, 4, 13, 17, 27],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF7F50",
                        "#9FE2BF",
                        "#FF5733"

                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF7F50",
                        "#9FE2BF",
                        "#FF5733"
                    ]
                }
            ]

        }


        this.scoreData = {
            labels: ['ดีมาก', 'ดี', 'ปานกลาง', 'พอใช้', 'ปรับปรุง'],
            datasets: [
                {
                    data: [41, 18, 9, 6, 24],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF7F50",
                        "#9FE2BF",
                        "#FF5733"

                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF7F50",
                        "#9FE2BF",
                        "#FF5733"
                    ]
                }
            ]
        };
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#00bb7e',
                    borderColor: '#00bb7e',
                    tension: .4
                }
            ]
        };

        this.reportData = {
            labels: ['กระดาษชำระหมด', 'น้ำไม่ไหล', 'สายชำระ'],
            datasets: [
                {
                    lable: 'หมดเกือบทุอวัน'
                },{
                    lable: 'แก้ไขด้วยรำบาคมากๆ'
                },{
                    lable: 'อยากได้สายชำระใหม่'
                },
            ]

        }
    }
    public tableData:any[] = [
        {
          category: 'cause',
          score: [
            {id:'01',label: 'ดีมาก', data: '555'},
            {id:'02',label: 'ดี', data: '244'},
            {id:'03',label: 'ปานกลาง', data: '128'},
            {id:'04',label: 'พอใช้', data: '80'},
            {id:'05',label: 'ปรับปรุง', data: '319'},
            {id:'06',label: 'ถังขยะเต็ม', data: '116'},
            {id:'07',label: 'การบริการของพนักงาน', data: '29'},
            {id:'08',label: 'กระดาษชำระหมด', data: '45'},
            {id:'09',label: 'กลิ่นเหม็น', data: '46'},
            {id:'10',label: 'โถชักโครกสกปรก', data: '64'},
            {id:'11',label: 'อุปกรณ์ชำรุด', data: '63'}

          ]
        }
      ]

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();

    }

    applyDarkTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };
    }

    applyLightTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef',
                    }
                },
            }
        };
    }
}
