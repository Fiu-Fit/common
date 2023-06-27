import { RequestStatus } from '.';
export interface Verification {
    id: number;
    userId: number;
    status: keyof typeof RequestStatus;
    resourceId: string;
    receivedAt: Date;
}
