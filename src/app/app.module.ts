import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { PrefLanguagePage } from '../pages/pref-language/pref-language';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
     AddContactPage,
     PrefLanguagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddContactPage,
    PrefLanguagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

     FIREBASE_PROVIDERS,

    defaultFirebase({

      apiKey: "AIzaSyBNCzsXnct7rLGuRm6gGsK8IHPOIUdSXwM",

      authDomain: "health-70604.firebaseapp.com",
    
      databaseURL: "https://health-70604.firebaseio.com",

      storageBucket: "health-70604.appspot.com",


    })
  ]
})
export class AppModule {}
