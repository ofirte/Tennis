import { RecurringClass } from "@shared/Classes/types";
import { useMutation } from "@tanstack/react-query";
import Classes from "../Classes";

export default function useCreateClasses(): {
  isSuccess: boolean;
  isError: boolean;
  mutate: (payload: RecurringClass) => void;
} {
  const classes = new Classes();
  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (payload: RecurringClass) =>
      classes.CreateRecurringClass(payload),
  });
  return { mutate, isError, isSuccess };
}
