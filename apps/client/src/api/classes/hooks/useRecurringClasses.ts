import { useQuery } from "@tanstack/react-query";
import Classes from "../Classes";

export default function useRecurringClasses() {
  const recurringClasses = new Classes();
  const { data, isLoading } = useQuery({
    queryKey: ["recurringClasses"],
    queryFn: recurringClasses.getRecurringClasses,
  });

  return { data, isLoading };
}
