import { RecurringClass } from "@shared/Classes/types";
import { Location } from "@shared/Locations/types";
import { StorageFileInfo } from "@shared/types";

interface IStorage {
  getClassCardMedia: () => Promise<StorageFileInfo>;
}

class Storage implements IStorage {
  async getClassCardMedia(): Promise<StorageFileInfo> {
    const ret = await fetch("/api/storage/tennis-card-media", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans: StorageFileInfo = await ret.json();
    return ans;
  }
}

export default Storage;
