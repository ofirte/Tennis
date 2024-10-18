import { ClassesService } from "src/services/ClassesService";
import { RecurringClass } from "@shared/classes/types";

// Example usage in a function
export const createRecurringClass = async (data: RecurringClass) => {
  ClassesService.createRecurringClass(data);
};
