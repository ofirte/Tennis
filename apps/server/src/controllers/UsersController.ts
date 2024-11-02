// Example usage in a function
import { User } from "@shared/Users/types";
import { Request } from "express";
import { UsersService } from "../services/UsersService";
export const createUser = async (req: Request): Promise<boolean> => {
  const user: User = req.body;
  console.log(user);
  return UsersService.createUser(user);
};
