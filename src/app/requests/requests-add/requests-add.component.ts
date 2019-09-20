import { Component, OnInit } from '@angular/core';
import { requestsService } from '../requests.service';
import { taskModel } from '../requests.model';

@Component({
  selector: 'app-requests-add',
  templateUrl: './requests-add.component.html',
  styleUrls: ['./requests-add.component.scss'],
  providers:[requestsService],
})
export class RequestsAddComponent implements OnInit {

  name: string;
  description: string;
  id: any;

  constructor(
    private service: requestsService,
    ) {}

  ngOnInit() {
  }

  post(){
    // console.log(`name: ${this.name} desc: ${this.description}`);
    let task: taskModel = {name: this.name, description: this.description};
    this.service.postTask(task).subscribe(
      data => this.id = data,
      error => alert(error)
    );
  } 

}
