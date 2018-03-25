import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddKataPage } from './add-kata';

@NgModule({
  declarations: [
    AddKataPage,
  ],
  imports: [
    IonicPageModule.forChild(AddKataPage),
  ],
})
export class AddKataPageModule {}
