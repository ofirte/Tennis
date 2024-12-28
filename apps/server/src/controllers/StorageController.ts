import { GetSignedUrlResponse } from "@google-cloud/storage";
import { Request, Response } from "express";
import StorageService from "../services/StorageService";
import { ApiResponse, StorageFileInfo } from "@shared/types";
import { sendResponse } from "../utils/apiResponse";

export const getTennisCardMedia = async (
  req: Request,
  res: Response
): Promise<Response<ApiResponse<StorageFileInfo>>> => {
  const cardMediaUrl = await StorageService.getTennisCardMedia();
  return sendResponse(res, {
    data: {
      url: cardMediaUrl[0],
    },
    message: "Successfully retrieved tennis card media",
    status: 200,
  });
};
