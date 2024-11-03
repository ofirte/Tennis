// utils/sendResponse.ts

import { Response } from "express";
import { ApiResponse } from "@shared/types";
export const sendResponse = <T>(
  res: Response,
  { status, message, data, error }: ApiResponse<T>
) => {
  const responseBody = {
    status,
    message,
    ...(data && { data }),
    ...(error && { error }),
  };

  return res.status(status).json(responseBody);
};
