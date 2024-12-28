import { sendResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import { ClassesService } from "../services/ClassesService";
import { ClassesResponse, RecurringClass } from "@shared/classes/types";
import { ApiResponse } from "@shared/types";
import { IRecurringClass } from "src/models/Classes/RecurringClass";

// Example usage in a function
export const createRecurringClass = async (
  req: Request,
  res: Response
): Promise<Response<ApiResponse<IRecurringClass>>> => {
  const data = req.body;
  const recurringClass = await ClassesService.createRecurringClass(data);
  return sendResponse<IRecurringClass>(res, {
    status: 201,
    message: "Recurring class created",
    data: recurringClass,
  } as ApiResponse<IRecurringClass>);
};
export const getRecurringClasses = async (
  req: Request,
  res: Response
): Promise<Response<ApiResponse<ClassesResponse>>> => {
  const data = await ClassesService.getRecurringClasses();
  return sendResponse<ClassesResponse>(res, {
    status: 200,
    message: "Recurring classes found",
    data,
  } as ApiResponse<ClassesResponse>);
};
