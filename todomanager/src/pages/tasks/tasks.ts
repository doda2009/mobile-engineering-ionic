import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  constructor(public navCtrl: NavController) {

  }

}

export class MyPage {
  constructor(public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'TODO added',
      duration: 5000
    });
    toast.present();
  }
}
