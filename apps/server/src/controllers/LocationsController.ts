import { Request, Response } from "express";
import { LocationsService } from "../services/LocationsServices";
import { Location } from "@shared/Locations/types";
import { ApiResponse } from "@shared/types";
import { sendResponse } from "src/utils/apiResponse";
import { ILocation } from "src/models/Location";
export const createLocation = async (
  req: Request,
  res: Response
): Promise<Response<ApiResponse<ILocation>>> => {
  const data: Location = req.body;
  const location = await LocationsService.createLocation(data);
  return sendResponse(res, {
    data: location,
    status: 201,
    message: "Location created successfully",
  });
};
