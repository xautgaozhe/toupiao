import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs1 } from '../pages/tabs1/tabs1';
import {Profile} from "../pages/profile/profile";
import {Profile2} from "../pages/profile2/profile2";
import {Vote} from "../pages/vote/vote";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StorageService } from '../providers/storage-service';
import {HttpService} from "../providers/http-service";
import {CommentService} from "../providers/comment-service";
import { CommonFunc } from '../providers/common-func';

import {HttpModule} from "@angular/http";
import {LoginService} from "../providers/login-service";
import { VoteServiceProvider } from '../providers/vote-service/vote-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Tabs1,
    Vote,
    Profile,
    Profile2
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Tabs1,
    Vote,
    Profile,
    Profile2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    CommentService,
    LoginService,
    StorageService,
    CommonFunc,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VoteServiceProvider
  ]
})
export class AppModule {}
