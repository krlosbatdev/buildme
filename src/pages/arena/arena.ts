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
 * Generated class for the ArenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arena',
  templateUrl: 'arena.html',
})
export class ArenaPage {
  trainingsCollection: AngularFirestoreCollection<Training>;
  trainings:any[];//Observable<Training[]>;

  constructor(
    public navCtrl: NavController,
    private afs: AngularFirestore,
    private authService: AuthService) {
  }

  ionViewDidLoad() {
    this.trainingsCollection = this.afs.collection('trainings');
    this.trainingsCollection.valueChanges()
    .subscribe(
      (data)=> this.trainings = data,
      (error)=> {
        console.log(error)
      }
    );
  }

  ionViewCanEnter() {
    //    return !!this.afAuth.auth.currentUser;

    return this.authService.user$
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
