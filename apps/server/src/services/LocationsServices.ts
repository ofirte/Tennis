import { Location as LocationType } from "@shared/Locations/types";
import Location, { ILocation } from "../models/Location";
export class LocationsService {
  public static async createLocation(data: LocationType): Promise<ILocation> {
    const location = new Location(data);
    await location.save();
    return location;
  }
}
