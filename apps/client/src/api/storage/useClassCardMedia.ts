import { useQuery } from "@tanstack/react-query";
import Storage from "../storage/Storage";
import { StorageFileInfo } from "@shared/types";
import useAppQuery from "../hooks/useAppQuery";
export default function useClassCardMedia() {
  const storage = new Storage();
  return useAppQuery<StorageFileInfo>({
    queryKey: ["classCardMedia"],
    queryFn: () => storage.getClassCardMedia(),
  });
}
