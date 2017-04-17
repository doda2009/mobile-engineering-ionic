import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-about',
    templateUrl: 'list.html'
})

export class ListPage {

    public todos: Array<{ id: number, title: string, category: string }>=[];

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        private storage: Storage) {
        this.refresh();
    }

    ionViewWillEnter() {
        this.refresh();
    }

    refresh(){
        this.storage.ready().then(() => {
            this.storage.get('todos').then((val) => {
                this.todos = JSON.parse(val);
            });
        });
    }

    myChange(id) {
        var temp_todos: Array<{ id: number, title: string, category: string }> = [];
        for(let i = 0; i < this.todos.length; i++) {
            var todo = this.todos[i];
            if(todo.id !== id){
                temp_todos.push(todo);
            }
            else{
                this.showToast("TODO finish " + todo.title);
            }
        }

        this.todos = temp_todos;
        this.storage.ready().then(() => {
            this.storage.set('todos', JSON.stringify(this.todos));
        });
    }

    showToast(msg){
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    }

}
