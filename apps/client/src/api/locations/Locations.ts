import { RecurringClass } from "@shared/Classes/types";
import { Location } from "@shared/Locations/types";

interface ILocations {
  createLocation: (data: Location) => Promise<Location>;
}

class Locations implements ILocations {
  async createLocation(data: Location): Promise<Location> {
    const ret = await fetch("/api/locations/create-location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const ans: Location = await ret.json();
    return ans;
  }
}

export default Locations;
