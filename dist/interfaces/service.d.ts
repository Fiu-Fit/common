export interface Service {
    id: number;
    apiKey: string;
    name: string;
    url: string;
    description: string;
    status: ServiceStatus;
}
export declare enum ServiceStatus {
    Available = "Available",
    Blocked = "Blocked"
}
