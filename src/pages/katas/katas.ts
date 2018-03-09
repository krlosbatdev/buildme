import { Observable } from 'rxjs/Observable';
import { Training } from './../../models/training.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";


/**
 * Generated class for the KatasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-katas',
  templateUrl: 'katas.html',
})
export class KatasPage {
  trainingsCollection: AngularFirestoreCollection<Training>;
  trainings: Observable<Training[]>;

  constructor(
    public navCtrl: NavController,
    private afs: AngularFirestore,
    private authService: AuthService) {
  }

  ionViewDidLoad() {
    this.trainingsCollection = this.afs.collection('trainings');
    this.trainings = this.trainingsCollection.valueChanges();
  }

  ionViewCanEnter() {
    //    return !!this.afAuth.auth.currentUser;

    return this.authService.user
      .take(1)
      .map(user => !!user)
      .subscribe(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
         // this.navCtrl.setRoot();
        }
      });

  }

}
