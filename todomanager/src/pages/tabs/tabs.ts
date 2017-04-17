import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import { TasksPage } from '../tasks/tasks';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = ListPage;
    tab2Root = TasksPage;
    
    constructor() {

    }
}
