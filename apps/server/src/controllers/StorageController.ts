import { GetSignedUrlResponse } from "@google-cloud/storage";
import StorageService from "../services/StorageService";

// Example usage in a function
export const getTennisCardMedia = async (): Promise<GetSignedUrlResponse> => {
  return StorageService.getTennisCardMedia();
};
