import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ToDoManager } from './app.component';

import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { TasksPage } from '../pages/tasks/tasks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    ToDoManager,
    TasksPage,
    ListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ToDoManager, {tabsPlacement:'top'}),
    // IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ToDoManager,
    TasksPage,
    ListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
