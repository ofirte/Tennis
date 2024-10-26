import { ClassesService } from "../services/ClassesService";
import { ClassesResponse, RecurringClass } from "@shared/classes/types";

// Example usage in a function
export const createRecurringClass = async (data: RecurringClass) => {
  ClassesService.createRecurringClass(data);
};
export const getRecurringClasses = async (): Promise<ClassesResponse> => {
  return { recurringClasses: await ClassesService.getRecurringClasses() };
};
