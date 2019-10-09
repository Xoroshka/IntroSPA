import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { GetTask } from './interfaces/get-task.interface';
import { SendTask } from './interfaces/send-task.interface';
import { RgbIdName } from './interfaces/rgb-id-name.interface';
import { IdName } from './interfaces/id-name.interface';
import { OData} from './interfaces/odata.interface';
import { Task } from './interfaces/task.interface';
import { TaskModel } from './interfaces/task.model';
import { zip, forkJoin } from 'rxjs'
import { map, shareReplay, takeUntil, switchMap } from 'rxjs/operators';

@Injectable()
export class TasksService {

    constructor(
        private http: HttpClient
        ) {}

    private readonly tenantguid: string = '08de793c-0ca7-4339-ae2e-8bb6fdc063ab';
    private readonly baseURL: string = 'http://intravision-task.test01.intravision.ru';

    private tasks$: Observable<TaskModel[]>;
    private reload$ = new Subject<void>();

    forceReload() {
        this.reload$.next();

        this.tasks$ = null;
      }

    getTasks(): Observable<TaskModel[]>{
        if(!this.tasks$){
            this.tasks$ = forkJoin(
                this.getTasksOData(),
                this.getStatuses(),
                this.getPriorities(),
                this.getUsers(),
            )
            .pipe(map(                    
                ([tasks, statuses, priorities, users]) => 
                    tasks.map(task => new TaskModel(task, statuses, priorities, users))),
                takeUntil(this.reload$),
                shareReplay(1)
            )
            
        }
        return this.tasks$;
    }

    getTasksOData(): Observable<Task[]>{
        const options = {
            params: new HttpParams()
            .set('tenantguid', this.tenantguid)
            .set('$select', 'id,name,statusId,priorityId,executorId')
        }

        return this.http.get<OData>(`${this.baseURL}/odata/tasks`, options)
        .pipe(map(odata => odata.value));
    }

    postTask(task: SendTask): Observable<number>{
        return this.http.post<number>(`${this.baseURL}/api/${this.tenantguid}/Tasks`, task);
    }

    getTask(id: Observable<number>): Observable<GetTask>{
        return id.pipe(switchMap(id => this.http.get<GetTask>(`${this.baseURL}/api/${this.tenantguid}/Tasks/${id}`)));
    }

    getPriorities(): Observable<RgbIdName[]>{
        return this.http.get<RgbIdName[]>(`${this.baseURL}/api/${this.tenantguid}/Priorities`)
    }

    getServices(): Observable<IdName[]>{
        return this.http.get<IdName[]>(`${this.baseURL}/api/${this.tenantguid}/Services`)
    }

    getStatuses(): Observable<RgbIdName[]>{
        return this.http.get<RgbIdName[]>(`${this.baseURL}/api/${this.tenantguid}/Statuses`)
    }

    getTags(): Observable<IdName[]>{
        return this.http.get<IdName[]>(`${this.baseURL}/api/${this.tenantguid}/Tags`)
    }
    
    getTaskTypes(): Observable<IdName[]>{
        return this.http.get<IdName[]>(`${this.baseURL}/api/${this.tenantguid}/TaskTypes`)
    }

    getUserGroups(): Observable<IdName[]>{
        return this.http.get<IdName[]>(`${this.baseURL}/api/${this.tenantguid}/UserGroups`)
    }

    getUsers(): Observable<IdName[]>{
        return this.http.get<IdName[]>(`${this.baseURL}/api/${this.tenantguid}/Users`)
    }

    
}   
