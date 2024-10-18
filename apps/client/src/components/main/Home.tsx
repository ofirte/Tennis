import React, { FC } from "react";
import useCreateClasses from "../../api/hooks/useCreateClasses";
import { RecurringClass } from "@shared/Classes/types";
const Home: FC = () => {
  const myRecurringClass: RecurringClass = {
    dayOfWeek: "Monday",
    time: "10:00 AM",
    title: "My Class",
    level: "A",
    coach: "609c4e8b0f0a6e001f9e4a2b",
    location: "609c4e8b0f0a6e001f9e4a2c",
    capacity: 10,
    createdBy: "609c4e8b0f0a6e001f9e4a2a",
    createdAt: new Date(),
  };
  const { isLoading, data } = useCreateClasses(myRecurringClass);
  return <>Hello {data?.title}</>;
};
export default Home;
