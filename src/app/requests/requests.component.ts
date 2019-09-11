import { Component, OnInit } from '@angular/core';
import { tasksODataService } from '../http/tasksOData.service';
import { taskModel } from '../models/task.model';
import { priorityModel } from '../models/priority.model';
import { prioritiesService } from '../http/priorities.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  providers: [tasksODataService, prioritiesService]
})
export class RequestsComponent implements OnInit {

  tasks: taskModel[] = [];

  priorities: priorityModel[] = [];

  constructor(
    private tasksODataService: tasksODataService,
    private prioritiesService: prioritiesService,
    ) { }

  ngOnInit() {
    this.tasksODataService.getTasksOData()
      .subscribe((data:taskModel[]) => this.tasks = data["value"]);
    this.prioritiesService.getPriorities()
      .subscribe((data:priorityModel[]) => this.priorities = data);
  }
  getPriorityRGB(id: number):string {
    return(this.priorities.find(x => x.id == id).rgb);
  }

}
