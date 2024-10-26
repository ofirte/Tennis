import { useQuery } from "@tanstack/react-query";
import Storage from "../storage/Storage";
import { StorageFileInfo } from "@shared/types";
export default function useClassCardMedia(): {
  isLoading: boolean;
  data: StorageFileInfo | undefined;
} {
  const storage = new Storage();
  const { data, isLoading } = useQuery({
    queryKey: ["classCardMedia"],
    queryFn: () => storage.getClassCardMedia(),
  });
  return { data, isLoading };
}
