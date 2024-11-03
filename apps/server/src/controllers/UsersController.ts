// Example usage in a function
import { User } from "@shared/Users/types";
import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
import { sendResponse } from "../utils/apiResponse";
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = req.body;
  const creationStatus = await UsersService.createUser(user);
  if (!creationStatus) {
    return sendResponse(res, {
      status: 500,
      message: "User not created",
      error: "User not created",
    });
  }
  return sendResponse(res, {
    status: 201,
    message: "User created",
    data: { status: creationStatus },
  });
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response<User | null>> => {
  const userId = req.params.id;
  const user = await UsersService.getUser(userId);
  if (!user) {
    return sendResponse(res, {
      status: 404,
      message: "User not found",
      error: "User not found",
    });
  }
  return sendResponse<User>(res, {
    status: 200,
    message: "User found",
    data: user,
  });
};
