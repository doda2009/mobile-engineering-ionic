import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'list.html'
})

export class ListPage {

    private todos: Array<{ id: number, title: string, category: string }>=[];
    private selected_filter: string = "All";

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        private storage: Storage) {
    }

    ionViewWillEnter() {
        this.refresh();
    }

    refresh(){
        this.todos = [];
        this.storage.ready().then(() => {
            this.storage.get('filter').then((val) => {
                if(val != null){
                    this.selected_filter = val;
                }
                else{
                  this.selected_filter = "All"
                }
            });

            this.storage.get('todos').then((val) => {
                var temp_todos: Array<{ id: number, title: string, category: string }> = [];
                temp_todos = JSON.parse(val);
                for(let i = 0; i < temp_todos.length; i++) {
                    var todo = temp_todos[i];
                    if(todo.category == this.selected_filter || this.selected_filter == "All"){
                        this.todos.push(todo);
                    }
                }
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
