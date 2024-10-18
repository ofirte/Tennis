import { Class, RecurringClass } from "@shared/Classes/types";
import { useQuery } from "@tanstack/react-query";
import Classes from "../classes/Classes";

export default function useCreateClasses(payload: RecurringClass): {
  isLoading: boolean;
  data: RecurringClass | undefined;
} {
  const classes = new Classes();
  const { isLoading, data } = useQuery({
    queryKey: ["home"],
    queryFn: () => classes.CreateRecurringClass(payload),
  });
  return { isLoading, data };
}
