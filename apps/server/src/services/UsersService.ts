import { User as UserType } from "@shared/Users/types";
import User from "../models/users/User";
export class UsersService {
  public static async createUser(data: UserType) {
    try {
      const user = new User(data);
      await user.save();
      return true;
    } catch (err) {
      return false;
    }
  }
  public static async getUser(userId: string): Promise<UserType | null> {
    return User.findById(userId);
  }
}
