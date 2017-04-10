import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'list.html'
})
export class ListPage {
  todos: any = [];
  categories: any = [];
  titles: any = [];
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
    this.storage.ready().then(() => {
      this.storage.forEach((value, key, index) => {
        this.todos.push({ key: value });
        console.log(key, ":", value);
        this.categories.push(key);
        this.titles.push(value);
      });
    });
  }

}
