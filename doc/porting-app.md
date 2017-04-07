# Porting the app __todomanager__ from native Android to ionic

This document contains a description of porting the given native android app __todomanager__ to ionic framework.

Features of this app:
* Add a new task
* Task list
* Store tasks in sqlite-database
* Add a category (label) to a task
* Filter tasks by categories

## Process of porting the app
1. Create an ionic app with tabs template
<code>
ionic start todomanager tabs --v2 --ts
</code>

2. Remove pages Home, About and Contact
3. Add pages task_list and add_task (html-template and .ts files)
4. Link them in app/app.module.ts and pages/tabs
