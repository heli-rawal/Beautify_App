import { Component } from '@angular/core';
import {SMS} from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private sms: SMS) {}
  Sendmsg() {
    this.sms.send('+13476050801', '');
  }
}
