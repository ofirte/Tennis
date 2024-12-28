import {
  UseMutationOptions,
} from "@tanstack/react-query";
import Locations from "../Locations";
import { Location } from "@shared/Locations/types";
import useAppMutation from "src/api/hooks/useAppMutation";
import { ApiResponse } from "@shared/types";
export default function useCreateLocation(
  options?: UseMutationOptions<
    ApiResponse<Location>,
    Location,
    Location,
    unknown
  >
) {
  const locations = new Locations();
  const { mutate, isError, isSuccess } = useAppMutation<
    Location,
    Location,
    Location,
    unknown
  >({
    mutationFn: (payload: Location) => locations.createLocation(payload),
    options,
  });
  return { mutate, isError, isSuccess };
}
