import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestsMainComponent }  from './requests-main/requests-main.component';
import { RequestsAddComponent }   from './requests-add/requests-add.component';
import { RequestsEditComponent }  from './requests-edit/requests-edit.component';

// import { CanDeactivateGuard }             from '../can-deactivate.guard';
// import { CrisisDetailResolverService }    from './crisis-detail-resolver.service';

const requestsRoutes: Routes = [
  {
    path: 'requests',
    component: RequestsMainComponent,
    children: [
      {
        path: 'add',
        component: RequestsAddComponent,
        // canDeactivate: [CanDeactivateGuard],
        // resolve: {
        //   crisis: CrisisDetailResolverService
        // }
      },
      {
        path: 'edit/:id',
        component: RequestsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(requestsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RequestsRoutingModule { }