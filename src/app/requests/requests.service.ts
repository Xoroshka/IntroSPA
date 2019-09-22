import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RequestTypes, baseURL, taskModel, tenantguid } from './requests.model';

@Injectable()
export class RequestsService {

    constructor(
        private http: HttpClient,
        
        ) { }
    
    path = 'assets/odata.json';

    Request<T>(requestType: RequestTypes, urlOptions: string, params?: HttpParams, body?: any): Observable<T> {

        let response: Observable<Response>;
        //True in case of post, put and patch
        if (body && params) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), {body, params});
            console.log('body & params');

        }
        //True in case of post, put and patch if options is empty
        else if (body) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), {body});
            console.log('body');
        }
        //True in case of get, delete, head and options
        else if (params) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), {params});
            console.log('params');

        }
        //True in case of get, delete, head and options, if options is empty
        else {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), {params});
            console.log('no arguments');

        }
        return response.pipe(map((res: any) => <T>res));
    }
    constructUrl(urlOptions: string): string {
        return baseURL + urlOptions;
    }

    getTasksOData<T>(): Observable<T>{
        const params = new HttpParams().set('tenantguid', tenantguid);

        return this.Request(RequestTypes.get, '/odata/tasks', params);
    }

    postTask(task: taskModel): Observable<number>{
        return this.Request(RequestTypes.post, `/api/${tenantguid}/Tasks`, task);
    }

    getTask(id: number): Observable<taskModel>{
        let params = new HttpParams().set('id', `${id}`);        
        return this.Request(RequestTypes.get, `/api/${tenantguid}/Tasks`, params);
    }
}   
