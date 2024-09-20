import { useState } from "react";
import { MySharedType } from "@shared/types";

function App() {
  const [count, setCount] = useState(0);
  const x: MySharedType = {
    id: "1",
    name: "John Doe",
  };
  return <>"Hello, TypeScript with Vite + React!"</>;
}

export default App;
