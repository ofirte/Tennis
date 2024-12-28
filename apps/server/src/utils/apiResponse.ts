import { Response } from "express";
import { ApiResponse } from "@shared/types";

export const sendResponse = <T>(
  res: Response,
  apiResponseInfo: ApiResponse<T>
): Response<ApiResponse<T>> => {
  const responseBody = {
    ...apiResponseInfo,
  };

  return res.status(apiResponseInfo.status).json(responseBody);
};
