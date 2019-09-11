import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TasksODataModel } from '../models/tasksOData.model'
import { Observable } from 'rxjs';
import { tenantguid, baseURL} from './config'



@Injectable()
export class tasksODataService {
  constructor(
    private httpClient: HttpClient
  ) { }
  
  path = 'assets/odata.json';

  public getTasksOData(){

    const params = {
      tenantguid: tenantguid,
      $expand: '*'
    };
    return this.httpClient.get(`${baseURL}/odata/tasks`, { params });

  }
}