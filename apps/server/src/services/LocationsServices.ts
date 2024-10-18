import { Location as LocationType } from "@shared/Locations/types";
import Location from "../models/Location";
export class LocationsService {
  public static async createLocation(data: LocationType) {
    const location = new Location(data);
    return await location.save();
  }
}
