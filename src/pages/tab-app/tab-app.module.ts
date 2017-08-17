import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabAppPage } from './tab-app';

@NgModule({
  declarations: [
    TabAppPage,
  ],
  imports: [
    IonicPageModule.forChild(TabAppPage),
  ]
})
export class TabAppPageModule {}
