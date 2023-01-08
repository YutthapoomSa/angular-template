import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AppConfig } from 'src/app/api/appconfig';
import { Product } from 'src/app/api/product';
import { Comment } from 'src/app/api/comment';
import { ConfigService } from 'src/app/service/app.config.service';
import { HttpClient } from '@angular/common/http';
import { causeCustomers } from 'src/app/api/cause';
import { Customer, Representative } from '../../api/customer';
import * as moment from 'moment';
import 'moment-timezone';
import { TitleService } from 'src/app/service/api/title/title.service';
import { ReqCreateTitle } from 'src/app/service/api/title/interfaces/req-title.interface';
import { ReqCreateRider } from 'src/app/service/api/rider/interface/req-rider.interface';
import { ReqCreateSubTitle } from 'src/app/service/api/sub-title/interfaces/req-sub-title.interface';
import { RiderService } from 'src/app/service/api/rider/rider.service';
import { SubTitleService } from 'src/app/service/api/sub-title/sub-title.service';
import { ResRiderData } from 'src/app/service/api/rider/interface/res-rider.interface';
import { ReqCreateResult } from 'src/app/service/api/result/interfaces/req-result.interface';
import { ResultService } from 'src/app/service/api/result/result.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    [x: string]: any;
    public date: string = moment().subtract('month').format('YYYY-MM-DD');
    public dateStart= '';
    public dateEnd = '';
    public titleId: number = 0;
    public riderId: number = 0;
    public subTitleId: number = 0;
    public addPointId = '';
    public deductedPointId: number = 0;
    public currentIndexCard = null;
    public currentIndexDate = null;
    public currentIndexOrder = null;
    public idTitleUpdate = ''

    public cardTitle = [
        { cardName: 'ประพฤติผิด' },
        { cardName: 'ประพฤติดี' },
        { cardName: 'หยุดงาน' }
    ]

    public titleList = '';
    public SubtitleList = '';
    public riderList = '';
    public annotation = '';
    public userId = '';
    public resultRiderList : number = 0;
    public orderNumberList= '';
    


    displayBasic1: boolean;
    displayBasic2: boolean;


    showBasicDialog1() {
        this.displayBasic1 = true;
        this.createTitle();
    }
    showBasicDialog2() {
        this.displayBasic2 = true;
        this.getTitle();
        this.createTitle();
    }
    public titleName: string = '';

    public titles = [];

    public hidenbutton = true;
    public cause: causeCustomers[];
    public products: Product[];
    public chartData: any;
    public scoreAreaData: any;
    public scoreCauseData: any;
    public dateData: any;
    public reportData: any;
    public pieOptions: any;
    public chartOptions: any;
    public subscription: Subscription;
    public config: AppConfig;
    public title: any = [];
    public rider: any = [];
    public subtitle: any = [];
    public point: any = {};
    public customers3: Customer[];
    public testC = '';
    // public zones: number[] = [];
    public cardHerder: string[] = ['Daily', 'Week', 'Month', 'Years'];
    public resRider = []

    //logDataReq
    DateSearch() {
        // console.log('date', this.date);
        // console.log('dateStart', this.dateStart);
        // console.log('dateEnd', this.dateEnd);
    }
    constructor(
        // private caseService: caseService,
        private riderService: RiderService,
        private configService: ConfigService,
        private titleService: TitleService,
        private subtitleServicer: SubTitleService,
        private http: HttpClient,
        private resultService: ResultService,
    ) { }

    ngOnInit(): void {
        this.http.get('http://192.168.50.208:3333/api/').subscribe(res => {
            // console.log('res', res);
        });

        this.getRider();
        this.getTitle();
        this.getSubTitle();
        this.title = [
            // { id: '1', name: 'การเปิดระบบ', code: 'การเปิดระบบ' },
            // { id: '2', name: 'ลาหยุด', code: 'ลาหยุด' },
            // { id: '3', name: 'ขาดงาน', code: 'ขาดงาน' },
            // { id: '4', name: 'ปิดระบบ', code: 'ปิดระบบ' },
            // { id: '5', name: 'ปฏิเสธออเดอร์', code: 'ปฏิเสธออเดอร์' },
            // { id: '6', name: 'การรับสาย', code: 'การรับสาย' },
            // { id: '7', name: 'โอนยอด', code: 'โอนยอด' },
            // { id: '8', name: 'ระบบ', code: 'ระบบ' },
            // { id: '9', name: 'การแต่งกาย', code: 'การแต่งกาย' },
            // { id: '10', name: 'วันหยุด', code: 'วันหยุด' },
        ];
        //Rider
        // this.rider = [
        //     { id: 'r1', name: 'พี่สุวรรณ', code: 'พี่สุวรรณ' },
        //     { id: 'r2', name: 'ปราช', code: 'ปราช' },
        //     { id: 'r3', name: 'กอล์ฟ', code: 'กอล์ฟ' },
        // ];
        //Subtitle
        this.subt1 = [
            // { id: 'st1-1', name: 'แอดมินโทรตามให้เปิดระบบ' },
            // { id: 'st1-2', name: 'แอดมินโทรตาม ไม่รับโทรศัพท์' },
            // { id: 'st1-3', name: 'แอดมินโทรตาม รับโทรศัพท์' },
            // { id: 'st1-4', name: 'แอดมินโทรตาม ไม่รับโทรศัพท์ แต่ติดต่อกลับ' },
            // { id: 'st1-5', name: 'แอดมินโทรตาม ไม่รับโทรศัพท์ ไม่ติดต่อกลับ' },
            // { id: 'st1-6', name: 'เปิดระบบด้วยตนเอง' },
            // { id: 'st1-7', name: 'เปิดระบบช้า เกิน 30 นาที' },
            // { id: 'st1-8', name: 'เปิดระบบช้าเกิน 1 ชม. แต่แจ้งล่วงหน้า' },
            // { id: 'st1-9', name: 'เปิดระบบช้าเกิน 1 ชม. ไม่ได้แจ้งล่วงหน้า' },
            // { id: 'st1-10', name: 'เปิดระบบช้าเกิน 2 ชม. ขึ้นไป ไม่ได้แจ้งล่วงหน้า' },
            // { id: 'st1-11', name: ' มีออเดอร์ ทางระบบมีปัญหา' },
        ];

        this.subt2 = [
            // { id: 'st2-1', name: 'ลาหยุดปกติ' },
            // { id: 'st2-2', name: 'ลาฉุกเฉิน ไม่ได้แจ้งล่วงหน้า' },
            // { id: 'st2-3', name: 'ลาหยุดต่อเนื่อง 2 วัน ไม่ได้แจ้งล่วงหน้า' },
            // { id: 'st2-4', name: 'ลาหยุดเกิน 5 วัน' },
            // { id: 'st2-5', name: 'ลาป่วย ไม่มีใบรับรองแพทย์' },
        ];

        this.subt3 = [
            // { id: 'st3-1', name: 'ขาดงานเกิน 1 วัน ไม่มีการติดต่อ' },
            // { id: 'st3-2', name: 'ขาดงานเกิน 1 วัน แต่ติดต่อกลับ' },
            // { id: 'st3-3', name: 'ขาดงานเกิน 3 วัน' },
        ];

        this.subt4 = [
            // { id: 'st4-1', name: 'ปิดระบบเกิน 1 ชม. ไม่ได้แจ้งล่วงหน้า' },
            // { id: 'st4-2', name: 'ปิดระบบระหว่างวัน' },
            // { id: 'st4-3', name: 'ปิดระบบก่อนเวลาเลิกงาน' },
            // { id: 'st4-4', name: 'ปิดระบบ ไม่ได้แจ้งล่วงหน้า ติดต่อได้' },
            // { id: 'st4-5', name: 'ปิดระบบ ไม่ได้แจ้งล่วงหน้า ติดต่อไม่ได้' },
            // { id: 'st4-6', name: 'ปิดระบบทั้งวัน ไม่ได้แจ้ง และติดต่อไม่ได้ ' },
            // { id: 'st4-7', name: 'ปิดระบบทั้งวัน ไม่ได้แจ้ง แต่ติดต่อได้' },
        ];

        this.subt5 = [
            // { id: 'st5-1', name: 'ปฏิเสธการรับออเดอร์' },
            // { id: 'st5-2', name: 'ปฏิเสธการรับออเดอร์นอก' },
        ];

        this.subt6 = [
            // { id: 'st6-1', name: 'แอดมินติดต่อไป ไม่รับสาย แต่ติดต่อกลับภายใน 30 นาที' },
            // { id: 'st6-2', name: 'แอดมินติดต่อไป ไม่รับสาย แต่ติดต่อกลับผ่านไลน์' },
            // { id: 'st6-3', name: 'แอดมินติดต่อไป ไม่รับสาย แต่ติดต่อกลับ' },
            // { id: 'st6-4', name: 'แอดมินติดต่ไป ไม่รับสาย ไม่ติดต่อกลับ' },
        ];

        this.subt7 = [
            // { id: 'st7-1', name: 'โอนยอดเกิน 1 วัน แต่แจ้งเหตุผล' },
            // { id: 'st7-2', name: 'โอนยอดเกิน 1 วัน ไม่ได้แจ้ง' },
            // { id: 'st7-3', name: 'แจ้งว่าโอนยอด แต่ยังไม่ได้โอน' },
        ];

        this.subt8 = [
            // { id: 'st8-1', name: 'ช่วยหาร้านใหม่เข้าร่วมเป็น partner' },
            // { id: 'st8-2', name: 'ติดต่อร้านที่แอดมินแจ้ง' },
            // { id: 'st8-3', name: 'แจ้งข้อมูลที่เป็นประโยชน์ให้กับบริษัท' },
            // { id: 'st8-4', name: 'วิ่งแทนไรเดอร์คนอื่น' },
            // { id: 'st8-5', name: 'เปิดระบบล่วงเวลาเลิกงาน (ช่วยไรเดอร์คนอื่น)' },
            // { id: 'st8-6', name: 'สอนระบบทางร้าน' },
            // { id: 'st8-7', name: 'ไม่หยุดเกินวันที่บริษัทกำหนด' },
            // { id: 'st8-8', name: 'เปิดระบบตรงเวลา' },
        ];

        this.subt9 = [
            // { id: 'st9-1', name: 'ใส่กางเกงไม่สุภาพ' },
            // { id: 'st9-2', name: 'ไม่ใส่เสื้อ  One Delivery ' },
            // { id: 'st9-3', name: 'ไม่ติดกระเป๋า One Delivery' },
            // { id: 'st9-4', name: 'รองเท้าแตะ' },
        ];

        this.subt10 = [
            // { id: 'st10-1', name: 'ที่แอดมินจัดให้' },
        ];

        //Point
        this.addPoint = [
            { id: '+10', name: '+10' },
            { id: '+20', name: '+20' },
            { id: '+30', name: '+30' },
            { id: '+40', name: '+40' },
            { id: '+50', name: '+50' },
            { id: '+100', name: '+100' },
            { id: '-10', name: '-10' },
            { id: '-20', name: '-20' },
            { id: '-30', name: '-30' },
            { id: '-40', name: '-40' },
            { id: '-50', name: '-50' },
            { id: '-100', name: '-100' },
        ];

    }


    submit() {
        this.createResult();
    }
    cancel() { }

    selectCard(index: number) {
        this.currentIndexCard = index;
        // console.log('currentIndexCard', this.currentIndexCard);
    }

    selectSubtitle() {
    }


    changeTitle(title: any) {
        this.titleId = title.target.value;
        // console.log('room -> ', this.titleId);
        // console.log('room -> ', title.target.value);
    }
    changeRider(rider: any) {
        this.riderId = rider.target.value;
        // console.log('room -> ', this.zoneId);
    }
    changeSubtitle1(subt1: any) {
        this.subt1Id = subt1.target.value;
        // console.log('room -> ', this.zoneId);
    }
    changePoint(point: any) {
        this.pointId = point.target.value;
        // console.log('room -> ', this.zoneId);
    }


    createTitle() {
        const _b: ReqCreateTitle = {
            detail: this.titleList

        }
        console.log('_b->', _b);
        this.titleService.createTitle(_b).subscribe((res) => {
            if (res && res.resData && res.resData.id) {
                this.createSubTitle(res.resData.id);
            }
            // console.log('createTitle->', res);
        }, (err) => {
            console.error('errorCreateTitle->', err);
        });
    }


    getRider() {
        this.riderService.findAllRider().subscribe((res) => {
            this.resRider = res
            for (const data of res.resData) {
                this.rider.push({ id: data.id, name: data.nickName, code: data.nickName })
                console.log('this.resRider ->', this.resRider);
            }
            console.log('this.rider -> ', this.rider);
            
            // console.log('getRider ->', res);
            console.log(res);
        },
            (err) => {
                console.error('getRider->', err);
            })
    }


    createSubTitle(id?) {
        const _a: ReqCreateSubTitle = {
            subject: this.SubtitleList,
            titleId: id ? id : this.idTitleUpdate,
        }
        console.log('_a->', _a);
        this.subtitleServicer.createSubTitle(_a).subscribe((res) => {
            console.log('createSubTitle->', res);
        }, (err) => {
            console.error('errorcreateSubTitle->', err);
        });
    }

    createResult(){
        const result: ReqCreateResult = {
            userId: 1,
            titleId: this.titleId,
            subTitleId: this.subtitleId,
            riderId: this.riderId,
            resultRider: this.addPointId,
            orderNumber: this.orderNumberList,
            comment: this.annotation,
            startDate: this.dateStart,
            endDate: this.dateEnd
        }
        console.log('result->', result);
        this.resultService.createResult(result).subscribe((res) => {
            console.log('createResult->', res);
            console.log();
            
        }, (err) => {
            console.error('errorcreateResult->', err);
        });
    }
    

    getTitle() {
        this.titleService.findAllTitle().subscribe((res) => {
            this.ResTitle = res
            for (const data of res.resData) {
                this.title.push({ id: data.id, name: data.detail, code: data.detail })

            }
            console.log('this.title ---> ', this.title);
            // console.log('getTitle ->', res);
            console.log(res);
        },
            (err) => {
                console.error('getTitle->', err);
            })
    }

    getSubTitle() {
        this.subtitleServicer.findAllSubTitle().subscribe((res) => {
            this.ResSubTitle = res
            for (const data of res.resData) {
                this.subtitle.push({ id: data.id, name: data.subject, code: data.subject })
            }
            console.log('this.subtitle ---> ', this.subtitle);
            // console.log('getSubTitle ->', res);
            console.log(res);
        },
            (err) => {
                console.error('getSubTitle->', err);
            })
    }

}