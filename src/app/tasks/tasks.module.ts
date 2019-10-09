import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { TextFieldModule } from '@angular/cdk/text-field';

import { TasksMainComponent } from './tasks-main/tasks-main.component';
import { TasksFormComponent } from './tasks-form/tasks-form.component';

import { TasksService } from './tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    TextFieldModule,    
  ],
  declarations: [
    TasksMainComponent,
    TasksFormComponent
  ],
  providers: [TasksService],
})


export class TasksModule { }