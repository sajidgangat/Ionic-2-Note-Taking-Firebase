import { Component } from '@angular/core';
import { PrefLanguagePage } from '../pref-language/pref-language';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  move(){

    this.navCtrl.push(PrefLanguagePage);

  }


  

}

