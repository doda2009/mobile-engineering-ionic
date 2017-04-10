import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'TODO added',
      duration: 5000
    });
    toast.present();
  }
}
