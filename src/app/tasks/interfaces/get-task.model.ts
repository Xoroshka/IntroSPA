import {TasksService} from "../tasks.service";
import {Task} from './task.interface';
import { RgbIdName } from './rgb-id-name.interface';
import { IdName } from './id-name.interface';


export class GetTaskModel {
    readonly id: number;
    readonly name: string;
    readonly status: RgbIdName;
    readonly priority: RgbIdName;
    readonly executor: IdName;
    constructor(task: Task, service: TasksService){
        this.id = task.id;
        this.name = task.name;
        // this.status = service.statuses.find(status => status.id === task.statusId);
        // this.priority = service.priorities.find(priority => priority.id === task.priorityId);
        // this.executor = service.users.find(user => user.id === task.executorId);
    }
}