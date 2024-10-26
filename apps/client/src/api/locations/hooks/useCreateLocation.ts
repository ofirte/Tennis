import { useMutation, useQuery } from "@tanstack/react-query";
import Locations from "../Locations";
import { Location } from "@shared/Locations/types";
export default function useCreateLocation(): {
  isSuccess: boolean;
  isError: boolean;
  mutate: (payload: Location) => void;
} {
  const locations = new Locations();
  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (payload: Location) => locations.createLocation(payload),
  });
  return { mutate, isError, isSuccess };
}
