import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PProvideProvider} from '../../providers/p-provide/p-provide'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public ppp: PProvideProvider) {
    let p = this.ppp.getDigit();
    console.log(p);

    this.navCtrl.push('TabAppPage');
  }

}
