import { RecurringClass as RecurringClassType } from "@shared/classes/types";
import RecurringClass from "../models/Classes/RecurringClass";
import { getRecurringClassesInfoPipeline } from "../helpers/classesQueryBuilder"; 
export class ClassesService {
  public static async createRecurringClass(data: RecurringClassType) {
    const recurringClass = new RecurringClass(data);
    return await recurringClass.save();
  }
  public static async getRecurringClasses(): Promise<RecurringClassType[]> {
    return await RecurringClass.aggregate(getRecurringClassesInfoPipeline());
  }
}
