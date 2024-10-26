import React from "react";
import { FC } from "react";
import { Box, Button, Card } from "@mui/material";

const ClassCard: FC = () => {
  return (
    <Card
      sx={{
        minWidth: ({ spacing }) => spacing(22),
      }}
    ></Card>
  );
};
export default ClassCard;
