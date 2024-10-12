import { MySharedType } from "@shared/types";
import { useQuery } from "@tanstack/react-query";
import Home from "../classes/Home";

export default function useHome(): {
    isLoading: boolean,
    data: MySharedType | undefined
} {
  const home = new Home()
  const { isLoading, data } = useQuery({
    queryKey: ["home"],
    queryFn: () => home.getHello()
  });
  return { isLoading, data };
}
