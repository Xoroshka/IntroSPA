import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetTask } from '../interfaces/get-task.interface';
import { SendTask } from '../interfaces/send-task.interface';
import { TasksService } from '../tasks.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.scss']
})
export class TasksFormComponent implements OnInit {

  @Input('id') taskId$: Observable<number>;
  @Output() close = new EventEmitter<void>();

  constructor(
    private service: TasksService
  ) { }

  task$: Observable<GetTask>;
  edited: SendTask;

  ngOnInit() {
    this.task$ = this.taskId$.pipe(id => {
      if (id) { return this.service.getTask(id) }
      return null;
    })
  }

  toClose(){
    this.close.emit();
  }


}
