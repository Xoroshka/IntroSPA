import {tagModel} from './tag.model'
import {lifetimeItemModel} from './lifetimeItem.model'


export interface taskModel {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    price: number;
    taskTypeId: number;
    taskTypeName: string;
    statusId: number;
    statusName: string;
    statusRgb: string;
    priorityId: number;
    priorityName: string;
    serviceId: number;
    serviceName: string;
    resolutionDatePlan: Date;
    tags: Array<tagModel>;
    initiatorId?: number;
    initiatorName?: string;
    executorId?: number;
    executorName?: string;
    executorGroupId?: number;
    executorGroupName?: string;
    lifetimeItems?: Array<lifetimeItemModel>;
}