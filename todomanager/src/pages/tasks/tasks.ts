import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'tasks.html'
})

export class TasksPage {

    private todos: Array<{ id: number, title: string, category: string }>=[];
    todoTitle: Text;
    todoCategory: string;

    next_id: number = 0;
    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        private storage: Storage) {
        this.storage.ready().then(() => {
            this.storage.get('todos').then((val) => {
                if(val!= null){
                    this.todos = JSON.parse(val);
                    for(let i = 0; i < this.todos.length; i++) {
                        this.next_id = Math.max(this.next_id, this.todos[i].id);
                    }
                }
                else{
                    this.todos = [];
                }
            });
        });
    }

    click(){
        let msg = "";
        if (this.todoTitle === undefined) {
            msg = "Please enter a title";
            this.showToast(msg);
        }
        else{
            this.add(this.todoTitle, this.todoCategory);
        }
    }

    add(title, category ) {
        this.next_id += 1;
        this.todos.push({id:this.next_id, title:title , category:category});
        this.storage.ready().then(() => {
            this.storage.set('todos', JSON.stringify(this.todos));
            this.showToast("TODO added " + title);
        });
    }

    showToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 5000
        });
        toast.present();
    }
}
