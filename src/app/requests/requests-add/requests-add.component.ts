import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { taskModel } from '../requests.model';

@Component({
  selector: 'app-requests-add',
  templateUrl: './requests-add.component.html',
  styleUrls: ['./requests-add.component.scss'],
})
export class RequestsAddComponent implements OnInit {

  name: string;
  description: string;
  id: number;

  constructor(
    private service: RequestsService,
    ) {}

  ngOnInit() {
  }

  post(){
    let task: taskModel = {name: this.name, description: this.description};
    this.service.postTask(task).subscribe(
      data => this.id = data,
      error => console.log(error)
    );

  }

}
