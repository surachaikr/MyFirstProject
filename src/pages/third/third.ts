import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events) {
    this.events.subscribe('firstname:lastname', (fn, ln) => {
      console.log('Do something ', fn, ' ', ln);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

/*   ionViewWillUnload() {
    this.events.unsubscribe('firstname:lastname');
  } */
}
