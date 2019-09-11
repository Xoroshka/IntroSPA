import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tenantguid, baseURL} from './config'



@Injectable()
export class prioritiesService {
  constructor(
    private httpClient: HttpClient
  ) { }

  public getPriorities(){

    const params = {

    };
    return this.httpClient.get(`${baseURL}/api/${tenantguid}/Priorities`, { params });

  }
}