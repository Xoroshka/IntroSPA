import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


import { taskModel } from '../requests.model';
import { RequestsService } from '../requests.service';
import { async } from 'q';

@Component({
  selector: 'app-requests-edit',
  templateUrl: './requests-edit.component.html',
  styleUrls: ['./requests-edit.component.scss']
})
export class RequestsEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RequestsService,
  ) { }
  private task: taskModel;

  ngOnInit() {
    // this.task = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     ( this.service.getTask(params.get('id'))| async ))
  }


}
