import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';

@Component({
  // selector: 'page-tasks',
  templateUrl: 'tasks.html'
})

export class TasksPage {

  public database: SQLite;
  public todos: Array<Object>;

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
        if(this.todoCategory === undefined)
        {
          this.todoCategory = "Other";
        }
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
