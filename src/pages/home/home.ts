import { AngularFireAuth } from 'angularfire2/auth';
import { UserProfilePage } from './../user-profile/user-profile';
import { AuthService } from './../../core/auth.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trainingsCollection: AngularFirestoreCollection<Training>;
  trainings: Observable<Training[]>;


  constructor(public navCtrl: NavController, private afs: AngularFirestore, private auth: AuthService, private afAuth: AngularFireAuth) {

  }

  ionViewCanEnter() {
    return !!this.afAuth.auth.currentUser;
    // return this.auth.user
    //     .take(1)
    //     .map(user => !!user)
    //     .subscribe(loggedIn => {
    //       if (!loggedIn) {
    //           console.log('access denied');
    //           this.navCtrl.setRoot(UserProfilePage);
    //       }
    //   });
  }

  ionViewDidEnter(){
    this.trainingsCollection = this.afs.collection('trainings');
    this.trainings = this.trainingsCollection.valueChanges();
}


}
