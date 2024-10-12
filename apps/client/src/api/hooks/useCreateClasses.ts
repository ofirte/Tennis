import { MySharedType } from "@shared/types";
import { useQuery } from "@tanstack/react-query";
import Classes from "../classes/Classes";

export default function useCreateClasses(): {
  isLoading: boolean;
  data: MySharedType | undefined;
} {
  const home = new Classes();
  const { isLoading, data } = useQuery({
    queryKey: ["home"],
    queryFn: () => home.getHello(),
  });
  return { isLoading, data };
}
