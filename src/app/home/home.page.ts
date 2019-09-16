import { Component } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private backgroundMode: BackgroundMode, private iab: InAppBrowser) {
    //  const browser = this.iab.create('https://ionicframework.com/');
    var ref = iab.create('https://www.zmusiccafe.com', '_self', 'location=yes');
    backgroundMode.enable();
  }

}
