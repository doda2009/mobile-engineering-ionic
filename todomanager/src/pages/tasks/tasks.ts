import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {
  todoTitle: Text;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
  }
  showToast() {
    let msg = "";
    if (this.todoTitle === undefined) {
      msg = "Please enter a title"
    }
    else {
      msg = "TODO added " + this.todoTitle;
      this.storage.ready().then(() => {
        // set a key/value
        this.storage.set('name', 'Max');
        // Or to get a key/value pair
        // storage.get('age').then((val) => {
        //   console.log('Your age is', val);
        // })
      });
    }
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }


}
