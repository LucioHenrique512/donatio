export type UserTypes = 'GIVER' | 'RECIVER' | 'ADMIN';

export interface UserType {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  type?: UserTypes;
}
