export interface Goal {
    id: number;
    title: string;
    description: string;
    userId: number;
    targetValue: number;
    deadline?: Date;
    createdAt?: Date;
    exerciseId: string;
    status: GoalStatus;
}
export declare enum GoalStatus {
    InProgress = 0,
    Completed = 1,
    CompletedLate = 2
}
export declare const goalStatusToString: (status: GoalStatus) => string;
