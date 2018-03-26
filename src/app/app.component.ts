import { LEVEL_LIST, Level } from './../models/level.interface';
import { AuthService } from './../core/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireStorage } from 'angularfire2/storage';
import * as _ from 'lodash';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  levelList = LEVEL_LIST;

  rootPage: string;

  pages: Array<{title: string, component: any, role:string}>;
  levelIconlUrl;
  level:Level;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public authService: AuthService,
      private afStorage: AngularFireStorage ) {
    
    this.authService.user$
      .subscribe(user => {
        this.rootPage = !user ? 'LoginPage' : 'UserProfilePage';
        if(!user) return;
        this.level = _.find(this.levelList,['id', user.level]);
        this.levelIconlUrl = this.afStorage.ref(this.level.icon).getDownloadURL();
        
      });

    
        
    // used for an example of ngFor and navigation     
      //&& user.roles.user
    this.pages = [
      { title: 'Profile', component: 'UserProfilePage',role:'user'},
      {title: 'Arena', component: 'ArenaPage',role:'user'},
      {title: 'Add Katas', component: 'AddKataPage',role:'admin'},
      
    ];


    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}