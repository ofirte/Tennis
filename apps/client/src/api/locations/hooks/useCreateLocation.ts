import Locations from "../Locations";
import { Location } from "@shared/Locations/types";
import useAppMutation, {
  useAppMutationsOptions,
} from "../../../api/hooks/useAppMutation";
export default function useCreateLocation(
  options?: useAppMutationsOptions<Location, Location, Location>
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
