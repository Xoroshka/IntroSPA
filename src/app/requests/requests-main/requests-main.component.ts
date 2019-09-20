import { Component, OnInit } from '@angular/core';
import { tasksODataService } from '../../http/tasksOData.service';
import { taskModel } from '../../models/task.model';
import { priorityModel } from '../../models/priority.model';
import { prioritiesService } from '../../http/priorities.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-requests-main',
  templateUrl: './requests-main.component.html',
  styleUrls: ['./requests-main.component.scss'],
  providers: [tasksODataService, prioritiesService],
  animations: [
    trigger('routerAnimations', [
      state('open', style({ transform: 'translateX(0)'})),
      state('closed', style({ transform: 'translateX(+100%)'})),
      transition('closed => open', [
        animate('0.5s cubic-bezier(0.075, 0.82, 0.165, 1)'),
      ]),
      transition('open => closed', [
        animate('0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)')
      ]),


    ]),
  ],
})
export class RequestsMainComponent implements OnInit {

  tasks: taskModel[] = [];

  priorities: priorityModel[] = [];

  constructor(
    private tasksODataService: tasksODataService,
    private prioritiesService: prioritiesService,
  ) { }

  ngOnInit() {
    this.tasksODataService.getTasksOData()
      .subscribe((data: taskModel[]) => this.tasks = data["value"]);
    this.prioritiesService.getPriorities()
      .subscribe((data: priorityModel[]) => this.priorities = data);
  }
  getPriorityRGB(id: number): string {
    return (this.priorities.find(x => x.id == id).rgb);
  }

  isOpen(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['open'];
  }
}
