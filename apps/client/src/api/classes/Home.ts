import { MySharedType } from "@shared/types";

interface IHome {
  getHello: () => Promise<MySharedType>;
}

class Home implements IHome {
  async getHello(): Promise<MySharedType> {
    const ret = await fetch("/api");
    const ans: MySharedType = await ret.json();
    return ans;
  }
}

export default Home;
