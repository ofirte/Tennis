import React from "react";
import { FC } from "react";
import { Box, Button, Card, CardMedia } from "@mui/material";
import useClassCardMedia from "../../api/storage/useClassCardMedia";

const ClassCard: FC = () => {
  const { data: storageCardMediaInfo, isLoading: isLoadingUrlInfo } =
    useClassCardMedia();
  return (
    <Card
      sx={{
        minWidth: ({ spacing }) => spacing(22),
      }}
    >
      {!isLoadingUrlInfo && (
        <CardMedia
          component="img"
          height="140"
          image={storageCardMediaInfo?.url}
          alt="class card image"
        ></CardMedia>
      )}
    </Card>
  );
};
export default ClassCard;
