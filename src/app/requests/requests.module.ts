import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

import { RequestsMainComponent } from './requests-main/requests-main.component';
import { RequestsAddComponent } from './requests-add/requests-add.component';
import { RequestsEditComponent } from './requests-edit/requests-edit.component';

import { RequestsRoutingModule } from './requests-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RequestsRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
  ],
  declarations: [
    RequestsMainComponent,
    RequestsAddComponent,
    RequestsEditComponent
  ]
})


export class RequestsModule { }