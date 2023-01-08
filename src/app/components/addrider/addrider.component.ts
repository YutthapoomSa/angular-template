import { Component } from '@angular/core';
import { ReqCreateRider } from 'src/app/service/api/rider/interface/req-rider.interface';
import { ResRiderData } from 'src/app/service/api/rider/interface/res-rider.interface';
import { RiderService } from 'src/app/service/api/rider/rider.service';
import { ReqCreateSubTitle } from 'src/app/service/api/sub-title/interfaces/req-sub-title.interface';
import { SubTitleService } from 'src/app/service/api/sub-title/sub-title.service';
import { ReqCreateTitle } from 'src/app/service/api/title/interfaces/req-title.interface';
import { TitleService } from 'src/app/service/api/title/title.service';

@Component({
    selector: 'app-access',
    templateUrl: './addrider.component.html',
    styleUrls: ['./addrider.component.scss'],
})
export class AddRiderComponent {
    public titleList = '';
    public SubtitleList = '';
    public pointList = '';
    public firstRiderList = '';
    public lastRiderList = '';
    public licenseRiderList = '';
    public nickNameRiderList = '';
    public phoneRiderList = '';
    id: number;

    constructor(
        private riderService: RiderService,

    ) { }

    submit() {
        this.createRider();
    }

    createRider() {
        const x: ReqCreateRider = {
            firstName: this.firstRiderList,
            lastName: this.lastRiderList,
            nickName: this.nickNameRiderList,
            licensePlate: this.licenseRiderList,
            phoneNumber: this.phoneRiderList
        }

        this.riderService.createRider(x).subscribe((res) => {
            console.log('createRider->', res);
            console.log(res);


        }, (err) => {
            console.error('createRider->', err);

        })
    }
    
    getRider(){
        const resriderdata: ResRiderData = {
            firstName: this.firstRiderList,
            lastName: this.lastRiderList,
            nickName: this.nickNameRiderList,
            licensePlate: this.licenseRiderList,
            phoneNumber: this.phoneRiderList,
            createdAt: '',
            id: this.id
        }

        this.riderService.createRider (resriderdata).subscribe((res) => {
            console.log('getRider ->',res);
            console.log(res);   
        },
        (err) => {
            console.error('getRider->', err);
        })
    }
}


