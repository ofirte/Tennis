import { ClassesResponse, RecurringClass } from "@shared/Classes/types";
import { ApiResponse } from "@shared/types";

interface IClasses {
  CreateRecurringClass: (data: RecurringClass) => Promise<RecurringClass>;
}

class Classes implements IClasses {
  async CreateRecurringClass(data: RecurringClass): Promise<RecurringClass> {
    const ret = await fetch("/api/classes/create-recurring-class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const ans: RecurringClass = await ret.json();
    return ans;
  }
  async getRecurringClasses(): Promise<ApiResponse<ClassesResponse>> {
    const ret = await fetch("/api/classes/recurring-classes");
    const ans: ApiResponse<ClassesResponse> = await ret.json();
    return ans;
  }
}

export default Classes;
