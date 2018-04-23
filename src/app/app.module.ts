import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule,JsonpModule } from '@angular/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {FindPage} from '../pages/find/find';
import { PublishPage } from '../pages/publish/publish';
import { PublishlistPage } from '../pages/publishlist/publishlist';
import {MessagePage} from '../pages/message/message';
import {MessagelistPage} from '../pages/messagelist/messagelist';
import {MinePage} from '../pages/mine/mine';
import {MypublishPage} from '../pages/mypublish/mypublish';
//import { TabsPage } from '../pages/tabs/tabs';
//import { HelloPage } from '../pages/hello/hello';
//import { FormsModule} from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    FindPage,
    PublishPage,
    PublishlistPage,
    MessagePage,
    MessagelistPage,
    MinePage,
    MypublishPage
    //HelloPage
  ],
  imports: [
    BrowserModule, HttpModule,
    JsonpModule,

    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    FindPage,
    PublishPage,
    PublishlistPage,
    MessagePage,
    MessagelistPage,
    MinePage,
    MypublishPage
    
    //HelloPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}