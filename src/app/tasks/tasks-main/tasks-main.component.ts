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

import { TaskModel } from '../interfaces/task.model';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-tasks-main',
  templateUrl: './tasks-main.component.html',
  styleUrls: ['./tasks-main.component.scss'],
  animations: [
    trigger('formAnimation', [
      state('true', style({ transform: 'translateX(0)' })),
      state('false', style({ transform: 'translateX(100%)' })),
      transition(':enter', [
        // query(':enter', [ animateChild() ]),
        // group([
        //   query(':enter', [ animate(100)]),
        style({ transform: 'translate()' }),
        animate('450ms 150ms cubic-bezier(0.165, 0.84, 0.44, 1)'),
        // ]),
      ]),
      transition(':leave', [
        // query(':leave', [ animateChild() ]),
        // group([
        //   query(':leave', [ animate('300ms') ] ),
        style({ transform: '*' }),
        animate('0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)'),
        // ]),
      ]),


    ]),
  ],
})
export class TasksMainComponent implements OnInit {

  constructor(
    private service: TasksService,
  ) { }

  ngOnInit() { }
  taskId = new ReplaySubject<number>(1);
  formOpen: boolean = false;

  setForm(id: number = 0, open: boolean = true) {
    if (open) this.taskId.next(id);
    this.formOpen = open;
  }


  trackByTaskId(index: number, task: TaskModel): number {
    if (!task) return null;
    return task.id;
  }
}
