import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'app.html'
})

export class ToDoManager {

    rootPage: any = TabsPage;

    private selected_filter: string = "All";

    filters: Array<string> = [
        "All",
        "Other",
        "Shopping",
        "Study",
        "Work",
        "Reminder"
        ];

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private storage: Storage) {

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.storage.ready().then(() => {
            this.storage.get('filter').then((val) => {
                if(val != null){
                    this.selected_filter = val;
                }
                else{
                    this.selected_filter = "All"
                }
            });
        });

    }

    set_filter(filter_name) {
        this.storage.ready().then(() => {
            this.storage.set('filter', filter_name);
        });
    }

}
