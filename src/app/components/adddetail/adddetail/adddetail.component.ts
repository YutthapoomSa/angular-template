import { Component, OnInit } from '@angular/core';
import { ReqCreateSubTitle } from 'src/app/service/api/sub-title/interfaces/req-sub-title.interface';
import { SubTitleService } from 'src/app/service/api/sub-title/sub-title.service';
import { ReqCreateTitle } from 'src/app/service/api/title/interfaces/req-title.interface';
import { TitleService } from 'src/app/service/api/title/title.service';

@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.scss']
})
export class AdddetailComponent implements OnInit {
  [x: string]: any;
  public titleList = '';
  public SubtitleList = '';
  public idTitleUpdate = ''

  constructor(
    private titleService: TitleService,
    private subtitleServicer: SubTitleService,
  ) {
  }

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

  ngOnInit(): void {

    this.http.get('http://192.168.50.208:3333/api/').subscribe(res => {
            // console.log('res', res);
        });

       
  }
  submit() {
    this.createTitle();
}
  addsub(){
    
  }
}
