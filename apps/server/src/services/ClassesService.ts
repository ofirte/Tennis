import { RecurringClass as RecurringClassType } from "@shared/types";
import RecurringClass from "../models/Classes/RecurringClass";

export const createRecurringClass = async (data: RecurringClassType) => {
  const recurringClass = new RecurringClass(data);
  return await recurringClass.save();
};
