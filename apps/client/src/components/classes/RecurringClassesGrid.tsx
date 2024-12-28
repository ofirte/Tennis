import { Grid2 as Grid } from "@mui/material";
import { RecurringClass } from "@shared/Classes/types";
import { FC } from "react";
import useRecurringClasses from "../..//api/classes/hooks/useRecurringClasses";
import ClassCard from "./ClassCard";

const RecurringClassesGrid: FC = () => {
  const { data: classes, isLoading: isLoadingRecurringClasses } =
    useRecurringClasses();
  return (
    <>
      {!isLoadingRecurringClasses && (
        <Grid container spacing={3}>
          {classes?.data?.recurringClasses?.map(
            (recurringClass: RecurringClass) => (
              <Grid size={4} key={recurringClass._id}>
                <ClassCard recurringClass={recurringClass} />
              </Grid>
            )
          )}
        </Grid>
      )}
    </>
  );
};

export default RecurringClassesGrid;
