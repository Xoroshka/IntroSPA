import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { WorkersComponent } from './workers/workers.component';
import { ClientsComponent } from './clients/clients.component';
import { ActivesComponent } from './actives/actives.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksMainComponent } from './tasks/tasks-main/tasks-main.component';

const routes: Routes = [
  // { path: 'requests', loadChildren: './requests/requests.module#RequestsModule' },
  { path: 'docs', component: DocsComponent },
  { path: 'tasks', component: TasksMainComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'actives', component: ActivesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
