import { PipelineStage } from "mongoose";

export const getRecurringClassesInfoPipeline: () => PipelineStage[] = () => {
  return [
    {
      $lookup: {
        from: "locations",
        localField: "location",
        foreignField: "_id",
        as: "locationInfo",
      },
    },
    {
      $unwind: {
        path: "$locationInfo",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        locationName: "$locationInfo.name",
      },
    },
  ];
};
