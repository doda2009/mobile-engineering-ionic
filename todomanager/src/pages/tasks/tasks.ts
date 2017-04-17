import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'tasks.html'
})

export class TasksPage {
    public todos: Array<{ id: number, title: string, category: string }>=[];
    todoTitle: Text;
    todoCategory: string;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        private storage: Storage) {

        console.log("storage");
        this.storage.ready().then(() => {
            console.log("ready");
            this.storage.get('todos').then((val) => {
                console.log(val);
                if(val!= null){
                    this.todos = JSON.parse(val);
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
        console.log("add: ", title);
        this.todos.push({id:1, title:title , category:category});
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
