import { CreateUserResponse, User as UserType } from "@shared/Users/types";

interface IUser {
  createUser: (user: UserType) => Promise<CreateUserResponse>;
}

class User implements IUser {
  async createUser(user: UserType): Promise<CreateUserResponse> {
    const ret = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const ans: CreateUserResponse = await ret.json();
    return ans;
  }
}

export default User;
