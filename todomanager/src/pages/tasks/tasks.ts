import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {
  value: Text;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController) {
  }
  showToast() {
    console.log(this.value);
    let toast = this.toastCtrl.create({
      message: 'TODO added ' + this.value,
      duration: 5000
    });
    toast.present();
  }
}
