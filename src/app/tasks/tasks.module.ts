import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import {TextFieldModule} from '@angular/cdk/text-field';

import { TasksMainComponent } from './tasks-main/tasks-main.component';
import { TasksAddComponent } from './tasks-add/tasks-add.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from './tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    TasksRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    TextFieldModule,    
  ],
  declarations: [
    TasksMainComponent,
    TasksAddComponent,
    TasksEditComponent
  ],
  providers: [TasksService],
})


export class TasksModule { }