export enum RequestStatus {
  Pending = "Pending",
  Declined = "Declined",
  Approved = "Approved",
}

export interface Verification {
  id: number;
  userId: number;
  status: RequestStatus;
  resourceId: string;
  receivedAt: Date;
};
