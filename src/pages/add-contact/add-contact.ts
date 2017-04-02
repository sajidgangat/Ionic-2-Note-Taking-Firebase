import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the AddContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})

export class AddContactPage {
   contactList: FirebaseListObservable<any>;
contact = {
  id: '',
  topic: '',
  notes: ''
};
  constructor(public navCtrl: NavController, public  af: AngularFire, public params: NavParams) {
  this.contactList = af.database.list('/contacts');
  this.contact.id = this.params.get('key');
  this.contact.topic = this.params.get('topic');
  this.contact.notes = this.params.get('notes');
  
  }

   addContact(id,title, notes) {
      
     var date =Date.now();

    if(id) {
    this.contactList.update(id, {
     title: title,
      notes: notes,
      date : date
      }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
    }

    else{

      this.contactList.push({
      title: title,
      notes: notes,
      date : date
    }).then( newContact => {
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }
   

 
   }
   
   editContact(contact){
  this.navCtrl.push(AddContactPage, {
    key: contact.$key,
    name: contact.name,
    address: contact.address,
    phone: contact.phone,
    city: contact.city
  });
}

}
