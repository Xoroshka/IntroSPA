import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';
import {SendTask} from '../interfaces/send-task.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.scss'],
})
export class TasksAddComponent implements OnInit {

  name: string;
  description: string;

  constructor(
    private service: TasksService,
    private router: Router,
    ) {}

  ngOnInit() {
  }

  post(){
    let task: SendTask = {name: this.name, description: this.description};
    this.service.postTask(task)
    .subscribe(
      data => {
        this.router.navigate(['/tasks/edit/', data]);
       },
      error => {
        console.log(error);
        this.router.navigate(['/tasks']);
      },
      () => this.service.forceReload(),
    );

  }

}
