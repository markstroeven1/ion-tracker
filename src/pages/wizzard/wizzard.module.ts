import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizzardPage } from './wizzard';

@NgModule({
  declarations: [
    WizzardPage,
  ],
  imports: [
    IonicPageModule.forChild(WizzardPage),
  ],
})
export class WizzardPageModule {}
