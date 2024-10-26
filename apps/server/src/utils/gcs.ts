import { Storage } from "@google-cloud/storage";
const storage = new Storage({
  projectId: "tennistlv",
  keyFilename: process.env.STORAGE_KEY_PATH, // Update with your service account key file
});

const assetsBucket = storage.bucket("YOUR_BUCKET_NAME");

export { storage, assetsBucket };
