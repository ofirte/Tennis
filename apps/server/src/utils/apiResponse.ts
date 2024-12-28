import { Response } from "express";
import { ApiResponse } from "@shared/types";

interface TypedResponse<T> extends Response {
  json: (body: ApiResponse<T>) => this;
}

export const sendResponse = <T>(
  res: Response,
  { status, message, data, error }: ApiResponse<T>
): Response<ApiResponse<T>> => {
  const responseBody = {
    status,
    message,
    ...(data && { data }),
    ...(error && { error }),
  } as ApiResponse<T>;

  return res.status(status).json(responseBody);
};
