import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    //  const browser = this.iab.create('https://ionicframework.com/');
    var ref = iab.create('https://www.zmusiccafe.com', '_self', 'location=yes');

  }

}
