import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    public toastCtrl: ToastController) {
  
  }

}
