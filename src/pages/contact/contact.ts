import { Component } from '@angular/core';
import { AddContactPage } from '../add-contact/add-contact';
import { NavController,Platform } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { SocialSharing } from 'ionic-native';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  
 contactList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire, private sharingVar : SocialSharing) {
     this.contactList = af.database.list('/contacts');
  }
  
addContact(){

    this.navCtrl.push(AddContactPage);

  }
  editContact(contact){
  console.log(contact);
  this.navCtrl.push(AddContactPage, {
    key: contact.$key,
    title: contact.title,
    notes: contact.notes,
  });
}

deleteContact(contact) {
  this.contactList.remove(contact);
}

whatsappShare(abc){
    this.sharingVar.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  abc /* url */)
      .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }


}
