import React, { FC } from "react";
import useHome from "../../api/hooks/useHome";
const Home: FC = () => {
  const { isLoading, data } = useHome();
  return <>Hello {data?.name}</>;
};
export default Home;
