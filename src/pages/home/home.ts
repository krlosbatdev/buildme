import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Training{
  day: string,
  level: number,
  workout: Exercise[]
}
interface Exercise{
  description: string;
  tips?: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trainingsCollection: AngularFirestoreCollection<Training>;
  trainings: Observable<Training[]>;


  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ionViewDidEnter(){
    this.trainingsCollection = this.afs.collection('trainings');
    this.trainings = this.trainingsCollection.valueChanges();
}


}
