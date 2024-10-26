import { LocationsService } from "../services/LocationsServices";
import { Location } from "@shared/Locations/types";
export const createLocation = async (data: Location) => {
    LocationsService.createLocation(data);
};
