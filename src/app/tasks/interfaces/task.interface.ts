export interface Task {
    readonly id: number;
    readonly name: string;
    readonly statusId: number;
    readonly priorityId: number;
    readonly executorId: number;
}