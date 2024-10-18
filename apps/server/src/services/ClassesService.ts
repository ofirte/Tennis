import { RecurringClass as RecurringClassType } from "@shared/classes/types";
import RecurringClass from "../models/Classes/RecurringClass";
export class ClassesService {
  public static async createRecurringClass(data: RecurringClassType) {
    const recurringClass = new RecurringClass(data);
    return await recurringClass.save();
  }
}
