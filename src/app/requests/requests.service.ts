import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RequestTypes, baseURL, taskModel, tenantguid } from './requests.model';

@Injectable()
export class requestsService {

    constructor(private http: HttpClient) { }
    
    path = 'assets/odata.json';

    Request<T>(requestType: RequestTypes, urlOptions: string, body?: any, params?: HttpParams): Observable<T> {

        let response: Observable<Response>;
        //True in case of post, put and patch
        if (body && params) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), body, params);
        }
        //True in case of post, put and patch if options is empty
        else if (body) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), body);
        }
        //True in case of get, delete, head and options
        else if (params) {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), params);
        }
        //True in case of get, delete, head and options, if options is empty
        else {
            response = this.http[RequestTypes[requestType]](this.constructUrl(urlOptions), params);
        }
        return response.pipe(map((res: any) => <T>res));
    }
    constructUrl(urlOptions: string): string {
        return baseURL + urlOptions;
    }

    postTask<T>(task: taskModel): Observable<T>{
        return this.Request(RequestTypes.post, `/api/${tenantguid}/Tasks`, task);
    }
}   
