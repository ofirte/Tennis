import RecurringClass, {
  IRecurringClass,
} from "../models/Classes/RecurringClass";

// Example usage in a function
export const createRecurringClass = async (data: IRecurringClass) => {
  const recurringClass = new RecurringClass(data);
  return await recurringClass.save();
};
