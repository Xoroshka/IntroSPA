import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './clients/clients.component';
import { WorkersComponent } from './workers/workers.component';
import { SettingsComponent } from './settings/settings.component';
import { DocsComponent } from './docs/docs.component';
import { ActivesComponent } from './actives/actives.component';
import { RequestsModule } from './requests/requests.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    WorkersComponent,
    SettingsComponent,
    DocsComponent,
    ActivesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RequestsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
