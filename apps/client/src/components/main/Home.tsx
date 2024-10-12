import React, { FC } from "react";
import useCreateClasses from "../../api/hooks/useCreateClasses";
const Home: FC = () => {
  const { isLoading, data } = useCreateClasses();
  return <>Hello {data?.name}</>;
};
export default Home;
