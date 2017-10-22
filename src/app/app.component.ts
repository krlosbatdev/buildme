import { KatasPage } from '../pages/katas/katas';
import { AuthService } from './../core/auth.service';
import { LoginPage } from './../pages/login/login';
import { UserProfilePage } from './../pages/user-profile/user-profile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      private authService: AuthService) {
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Profile', component: UserProfilePage }
    ];

    this.authService.user.subscribe(user => {
      if(user){
        this.rootPage = HomePage;
        if(user.roles && user.roles.some(x=> x==="admin"))
          this.pages.push({title: 'Katas', component: KatasPage});

      }else{
        this.rootPage = LoginPage;
      }
    });
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
