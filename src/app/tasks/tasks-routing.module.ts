import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksMainComponent } from './tasks-main/tasks-main.component';
import { TasksAddComponent } from './tasks-add/tasks-add.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

const tasksRoutes: Routes = [
  {
    path: 'tasks',
    component: TasksMainComponent,
    children: [
      {
        path: 'add',
        component: TasksAddComponent,
        data: {open: 1,},
      },
      {
        path: 'edit/:id',
        component: TasksEditComponent,
        data: {open: 1,},
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TasksRoutingModule { }