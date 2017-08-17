import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { C1 } from '../../libs/my-class'

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');

    let c = new C1();
    c.callRemote().then( (result) => {
      console.log(result);
    });
    console.log('go on');
  }
  
  observe() {
    this.events.publish('firstname:lastname', 'Ionic', '3');
  }

}
