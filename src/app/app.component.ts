import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {Tabs1} from "../pages/tabs1/tabs1";
import { AboutPage } from "../pages/about/about";
import {StorageService} from "../providers/storage-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tabs1;
  account:string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

   // this.account = this.storageService.read("account").toString();
  }

}
