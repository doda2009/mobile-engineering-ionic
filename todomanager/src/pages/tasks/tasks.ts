import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {
  todoTitle: Text;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController) {
  }
  showToast() {
    let msg = "";
    if(this.todoTitle === undefined)
    {
      msg = "Please enter a title"
    }
    else{
      msg = "TODO added " + this.todoTitle;
    }
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
}
