import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "./shared/authenticationservices"
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authservice:AuthService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  SignOut(){
    this.authservice.SignOut();
  } 

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/dashboard",
        icon  : "home"
      },
      {
        title : "Customer",
        url   : "/new-customer",
        icon  : "people-outline"
      },
      {
        title : "Items",
        url   : "/new-item",
        icon  : "bag-add-outline"
      },
    ]
}
}   
