import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { TaskModel } from '../interfaces/task.model';

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.component.html',
  styleUrls: ['./tasks-main.component.scss'],
  animations: [
    trigger('routerAnimations', [
      state('open', style({ transform: 'translateX(-100%)' })),
      state('closed', style({ transform: 'translateX(0)'})),
      transition('closed => open', [
        query(':enter', [ animateChild() ]),
        group([
          query(':enter', [ animate(100)]),
          animate('450ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1)'),
        ]),
      ]),
      transition('open => closed', [
        query(':leave', [ animateChild() ]),
        group([
          query(':leave', [ animate('300ms') ] ),
          animate('0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)'),
        ]),
      ]),


    ]),
  ],
})
export class TasksMainComponent implements OnInit {

  constructor(
    private service: TasksService,
  ) {}
  ngOnInit() {}

  trackByTaskId(index: number, task: TaskModel): number{
    if(!task) return null;
    return task.id;
  }

  isOpen(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['open'];
  }
}
