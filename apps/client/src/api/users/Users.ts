import { CreateUserResponse, User as UserType } from "@shared/Users/types";
import { ApiResponse } from "@shared/types";

interface IUser {
  createUser: (user: UserType) => Promise<ApiResponse<CreateUserResponse>>;
}

class User implements IUser {
  async createUser(user: UserType): Promise<ApiResponse<CreateUserResponse>> {
    const ret = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const ans = await ret.json();
    return ans;
  }
}

export default User;
