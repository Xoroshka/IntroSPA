import {IdName} from './id-name.interface';

export interface GetTask {
    id: number;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    price?: number;
    taskTypeId?: number;
    taskTypeName?: string;
    statusId?: number;
    statusName?: string;
    statusRgb?: string;
    priorityId?: number;
    priorityName?: string;
    serviceId?: number;
    serviceName?: string;
    resolutionDatePlan?: Date;
    tags?: IdName[];
    initiatorId?: number;
    initiatorName?: string;
    executorId?: number;
    executorName?: string;
    executorGroupId?: number;
    executorGroupName?: string;
    lifetimeItems?: lifetimeItemModel[];
}

export interface lifetimeItemModel{
    id: number;
    userName: string;
    lifetimeType: number;
    createdAt: Date;
    comment: string;
    fieldName: string;
    oldFieldValue: string;
    newFieldValue: string
}