import { IdName } from './id-name.interface';

export interface SendTask {
    id?: number;
    name?: string;
    description?: string;
    comment?: string,
    price?: number;
    taskTypeId?: number;
    statusId?: number;
    priorityId?: number;
    serviceId?: number;
    resolutionDatePlan?: Date;
    tags?: IdName[];
    initiatorId?: number;
    executorId?: number;
    executorGroupId?: number;
}

