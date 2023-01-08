import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                          </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [

            {
                label: 'ระบบ',
                items: [
                    { label: 'ล็อคอิน', icon: 'bi bi-house-door', routerLink: ['login'] },
                    { label: 'register', icon: 'bi bi-house-door', routerLink: ['register'] },
                ]
            },
            {
                label: 'เมนู',
                items: [
                    { label: 'หน้าหลัก', icon: 'bi bi-house-door', routerLink: ['/'] },
                    { label: 'ประเมินไรเดอร์', icon: 'bi bi-receipt', routerLink: ['report'] },
                ]
            },
            {
                label: 'เพิ่มข้อมูลลงระบบ',
                items: [
                    { label: 'เพิ่มข้อมูลไรเดอร์', icon: 'bi bi-file-plus', routerLink: ['addrider'] },
                    { label: 'เพิ่มหัวข้อ / รายละเอียด', icon: 'bi bi-file-plus', routerLink: ['adddetail'] },
                ]
            },
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
