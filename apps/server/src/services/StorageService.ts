import { assetsBucket } from "../utils/gcs";
export class StorageService {
  ASSETS_BUCKET = "tennistlv-assets";
  public static async getTennisCardMedia() {
    const file = assetsBucket.file("images/class-image.jpg");
    const [exists] = await file.exists();

    if (!exists) {
      throw new Error("File does not exist");
    }

    return `https://storage.googleapis.com/${assetsBucket.name}/images/${file.name}`;
  }
}
export default StorageService;
