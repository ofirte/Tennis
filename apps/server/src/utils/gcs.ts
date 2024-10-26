import { Storage } from "@google-cloud/storage";

const getStorage = () => {
  const storage = new Storage({
    keyFilename: process.env.STORAGE_KEY_PATH,
  });

  const assetsBucket = storage.bucket("tennistlv-assest");
  return { storage, assetsBucket };
};
export default getStorage;
