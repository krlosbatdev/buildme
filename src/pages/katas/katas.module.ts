import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatasPage } from './katas';

@NgModule({
  declarations: [
    KatasPage,
  ],
  imports: [
    IonicPageModule.forChild(KatasPage),
  ],
})
export class KatasPageModule {}
