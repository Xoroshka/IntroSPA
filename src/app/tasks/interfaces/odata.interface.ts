import { Task } from './task.interface';

export interface OData{
    "@odata.context": string;
    "value": Task[];
}