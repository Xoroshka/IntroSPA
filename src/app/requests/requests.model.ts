export const tenantguid: string = '08de793c-0ca7-4339-ae2e-8bb6fdc063ab';
export const baseURL: string = 'http://intravision-task.test01.intravision.ru';

export enum RequestTypes {
    get,
    post,
    put,
    delete,
    patch,
    head,
    options
}

export interface taskModel {
    id?: number;
    name?: string;
    description?: string;
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
    tags?: Array<tagModel>;
    initiatorId?: number;
    initiatorName?: string;
    executorId?: number;
    executorName?: string;
    executorGroupId?: number;
    executorGroupName?: string;
    lifetimeItems?: Array<lifetimeItemModel>;
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

export interface tagModel{
    id: number;
    name: string;
}

export interface priorityModel{
    rgb: string;
    id: number;
    name: string;
}
