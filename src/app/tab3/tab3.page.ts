import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {BlogServiceService} from '../blog-service.service';
import {SecondPage} from '../second/second.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    data:any;
    constructor(public makeservice: BlogServiceService, private modalCtr: ModalController){}
    ngOnInit(){
        this.makedata();
    }

    makedata(){
        this.makeservice.makeupDetails();
    }

    async showdetail(event){
        console.log(event.srcElement.innerHTML);
        for (let i=0;i<3;i++)
        {
            console.log(this.makeservice.myData.items[i].name);

            if (event.srcElement.innerHTML==this.makeservice.myData.items[i].name)
            {
                this.data=this.makeservice.myData.items[i];
                console.log(this.data);
            }
        }
        const modal = await this.modalCtr.create({
            component : SecondPage,
            componentProps: {items:this.data}
        });
        modal.present();
    }

}
