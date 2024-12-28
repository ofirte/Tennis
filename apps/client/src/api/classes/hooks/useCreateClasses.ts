import { RecurringClass } from "@shared/Classes/types";
import Classes from "../Classes";
import useAppMutation, {
  useAppMutationsOptions,
} from "../../../api/hooks/useAppMutation";
export default function useCreateClasses(
  options?: useAppMutationsOptions<
    RecurringClass,
    RecurringClass,
    RecurringClass
  >
) {
  const classes = new Classes();
  const mutationFn = (payload: RecurringClass) =>
    classes.CreateRecurringClass(payload);
  return useAppMutation<RecurringClass, RecurringClass, RecurringClass>({
    mutationFn,
    options,
  });
}
