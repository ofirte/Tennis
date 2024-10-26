import React, { FC } from "react";
import useCreateClasses from "../../api/classes/hooks/useCreateClasses";
import { RecurringClass } from "@shared/Classes/types";
import useCreateLocation from "../../api/locations/hooks/useCreateLocation";
import { Location } from "@shared/Locations/types";
import { Box, Button } from "@mui/material";
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

  const myLocation: Location = {
    name: "Rokach 73 Tennis Center",
    address: "Rokach 73",
    city: "Tel Aviv",
    createdBy: "609c4e8b0f0a6e001f9e4a2a",
    createdAt: new Date(),
  };
  const { mutate: createRecurringClass } = useCreateClasses();
  const { mutate: createLocation } = useCreateLocation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: ({ spacing }) => spacing(2),
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={() => createRecurringClass(myRecurringClass)}
        sx={{
          minWidth: ({ spacing }) => spacing(22),
        }}
      >
        Create Class
      </Button>
      <Button
        variant="contained"
        onClick={() => createLocation(myLocation)}
        sx={{
          minWidth: ({ spacing }) => spacing(22),
        }}
      >
        Create Location
      </Button>
    </Box>
  );
};
export default Home;
