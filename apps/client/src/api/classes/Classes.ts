import { MySharedType } from "@shared/types";

interface IClasses {
  getHello: () => Promise<MySharedType>;
}

class Classes implements IClasses {
  async getHello(): Promise<MySharedType> {
    const ret = await fetch("/api/classes/create-recurring-class", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ofir: 1 }),
    });
    const ans: MySharedType = await ret.json();
    return ans;
  }
}

export default Classes;
