import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabAppPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-tab-app',
  templateUrl: 'tab-app.html'
})
export class TabAppPage {

  firstRoot = 'FirstPage'
  secondRoot = 'SecondPage'
  thirdRoot = 'ThirdPage'


  constructor(public navCtrl: NavController) {}

}
