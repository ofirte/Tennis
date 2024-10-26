import React from "react";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import useClassCardMedia from "../../api/storage/useClassCardMedia";
import { RecurringClassResponse } from "@shared/Classes/types";

const ClassCard: FC<{ recurringClass: RecurringClassResponse }> = ({
  recurringClass,
}) => {
  const { data: storageCardMediaInfo, isLoading: isLoadingUrlInfo } =
    useClassCardMedia();
  return (
    <Card
      sx={{
        minWidth: ({ spacing }) => spacing(22),
      }}
    >
      <CardHeader title={recurringClass.title} />
      <CardMedia
        component="img"
        height="140"
        image={storageCardMediaInfo?.url}
        alt="class card image"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          level: {recurringClass.level}
          <br />
          coach: {recurringClass.coach}
          <br />
          location: {recurringClass.locationName}
          <br />
          time: {recurringClass.time} {recurringClass.dayOfWeek}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ClassCard;
