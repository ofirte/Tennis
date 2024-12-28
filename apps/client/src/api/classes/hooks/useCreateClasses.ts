import { RecurringClass } from "@shared/Classes/types";
import { UseMutationOptions } from "@tanstack/react-query";
import Classes from "../Classes";
import useAppMutation from "../../../api/hooks/useAppMutation";
import { ApiResponse } from "@shared/types";

export default function useCreateClasses(
  options?: UseMutationOptions<
    ApiResponse<RecurringClass>,
    RecurringClass,
    RecurringClass,
    unknown
  >
) {
  const classes = new Classes();
  const mutationFn = (payload: RecurringClass) =>
    classes.CreateRecurringClass(payload);
  return useAppMutation<
    RecurringClass,
    RecurringClass,
    RecurringClass,
    unknown
  >({
    mutationFn,
    options,
  });
}
