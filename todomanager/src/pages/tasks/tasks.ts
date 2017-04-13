import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  templateUrl: 'tasks.html',
  providers:[SQLite]
})

export class TasksPage {
  public todos: Array<Object>;

  todoTitle: Text;
  todoCategory: string;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private sqlite: SQLite) {
  }
  showToast() {
    let msg = "";
    if (this.todoTitle === undefined) {
      msg = "Please enter a title"
    }
    else {
      msg = "TODO added " + this.todoTitle;

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {

        db.executeSql('CREATE TABLE IF NOT EXISTS todos(id , title, category)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
        .catch(e => console.log(e));
    }
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }
}
