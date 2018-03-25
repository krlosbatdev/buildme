import { Training } from './../../models/training.interface';
import { Level, LEVEL_LIST } from './../../models/level.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';


/**
 * Generated class for the AddKataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-kata',
  templateUrl: 'add-kata.html',
})
export class AddKataPage {

  levels: Level[] = _.sortBy(LEVEL_LIST, 'id');

  kata: Training = {
    day: "",
    level: null,
    target: "",
    workout: [{
      description: "",
      tip: ""
    }]

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddKataPage');
  }

  removeExercise(desc){
   this.kata.workout.pop();
  }

  addExercise(){
    this.kata.workout.push({
      description: "",
      tip: ""
    });
  }

  save(){
    const trainingsRef: AngularFirestoreCollection<Training> = this.afs.collection(`trainings`);

    trainingsRef.add(this.kata);
  }

}
