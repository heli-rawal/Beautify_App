import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-second',
    templateUrl: './second.page.html',
    styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

    makedata:any;
    wonder:any;
    name:any;
    follower:any;
    src: any;
    constructor(private navigationdata: NavParams, private modalCtrl: ModalController) { }

    ngOnInit() {
        this.makedata=this.navigationdata.get('items');
        console.log(this.makedata);
        this.wonder=this.makedata.wonder;
        this.name=this.makedata.name;
        this.follower=this.makedata.follower;
        this.src=this.makedata.src;

    }
    exit(){
        this.modalCtrl.dismiss();
    }
}
