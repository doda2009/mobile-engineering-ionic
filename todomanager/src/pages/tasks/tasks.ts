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
  todoCategory: string;
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
        this.storage.set(this.todoCategory,this.todoTitle);
      });
    }
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
}
