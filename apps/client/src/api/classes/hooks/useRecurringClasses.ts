import useAppQuery from "../../hooks/useAppQuery";
import Classes from "../Classes";

export default function useRecurringClasses() {
  const recurringClasses = new Classes();
  const { data, isLoading } = useAppQuery({
    queryKey: ["recurringClasses"],
    queryFn: recurringClasses.getRecurringClasses,
  });

  return { data, isLoading };
}
