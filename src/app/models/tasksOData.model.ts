import { taskModel } from './task.model'


export interface TasksODataModel {
    odatacontext: string;
    items: taskModel[];
}