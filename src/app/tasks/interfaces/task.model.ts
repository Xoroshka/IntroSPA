import {Task} from './task.interface';
import { RgbIdName } from './rgb-id-name.interface';
import { IdName } from './id-name.interface';


export class TaskModel {
    readonly id: number;
    readonly name: string;
    readonly status: RgbIdName;
    readonly priority: RgbIdName;
    readonly executor: IdName;
    constructor(task: Task, statuses: RgbIdName[], priorities: RgbIdName[], users: IdName[]){
        this.id = task.id;
        this.name = task.name;
        this.status = statuses.find(status => status.id === task.statusId);
        this.priority = priorities.find(priority => priority.id === task.priorityId);
        this.executor = users.find(user => user.id === task.executorId);
    }
}