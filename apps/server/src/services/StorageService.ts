import {
  GetSignedUrlResponse,
} from "@google-cloud/storage/build/cjs/src/signer";
import getStorage from "../utils/gcs";
import { GetSignedUrlConfig } from "@google-cloud/storage";
export class StorageService {
  ASSETS_BUCKET = "tennistlv-assets";
  public static async getTennisCardMedia(): Promise<GetSignedUrlResponse> {
    const { assetsBucket } = getStorage();
    const [files] = await assetsBucket.getFiles();
    const expires = Date.now() + 1000 * 60 * 15; // URL valid for 15 minutes

    const options: GetSignedUrlConfig = {
      version: "v4",
      action: "read",
      expires: expires,
    };
    const file = assetsBucket.file("images/class-image.jpg");
    const [exists] = await file.exists();

    if (!exists) {
      throw new Error("File does not exist");
    }

    return assetsBucket.file("images/class-image.jpg").getSignedUrl(options);
  }
}
export default StorageService;
