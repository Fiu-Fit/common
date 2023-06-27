import { RequestStatus } from '.';

export interface Verification {
  id: number;
  userId: number;
  status: RequestStatus;
  resourceId: string;
  receivedAt: Date;
};
