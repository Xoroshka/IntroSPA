import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GetTask } from '../interfaces/get-task.interface';
import { SendTask } from '../interfaces/send-task.interface';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss']
})
export class TasksEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TasksService
  ) { }

  task$: Observable<GetTask>;
  edited: SendTask;

  ngOnInit() {
    this.task$ = this.route.paramMap.pipe(switchMap(
      (params: ParamMap) => this.service.getTask(+params.get('id')) 
      ));
  }


}
