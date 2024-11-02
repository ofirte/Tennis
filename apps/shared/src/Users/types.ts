export type User = {
  _id?: string;
  uid: string;
  email: string;
  authType: string;
  firstName: string;
  lastName: string;
  displayName: string;
  role: number;
  createdAt: Date;
};


export type CreateUserResponse = {
  status: boolean;
};