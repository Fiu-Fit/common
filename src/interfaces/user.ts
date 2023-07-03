export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string | number;
  bodyWeight: number;
  blocked: boolean;
  blockedAt?: Date;
  federatedIdentity: boolean;
  favoriteWorkouts: string[];
  deviceToken: string;
  phoneNumber?: string;
  profilePicture?: string;
}
