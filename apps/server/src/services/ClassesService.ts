import {
  ClassesResponse,
  RecurringClass as RecurringClassType,
} from "@shared/classes/types";
import RecurringClass, {
  IRecurringClass,
} from "../models/Classes/RecurringClass";
import { getRecurringClassesInfoPipeline } from "../helpers/classesQueryBuilder";
export class ClassesService {
  public static async createRecurringClass(
    data: RecurringClassType
  ): Promise<IRecurringClass> {
    const recurringClass = new RecurringClass(data);
    await recurringClass.save();
    return recurringClass;
  }
  public static async getRecurringClasses(): Promise<ClassesResponse> {
    const recurringClasses = await RecurringClass.aggregate(
      getRecurringClassesInfoPipeline()
    );
    return { recurringClasses };
  }
}
