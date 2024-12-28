import { CreateUserResponse, User as UserType } from "@shared/Users/types";
import { useMutation } from "@tanstack/react-query";
import Users from "../Users";
import { ApiResponse } from "@shared/types";
import useAppMutation, {
  useAppMutationsOptions,
} from "src/api/hooks/useAppMutation";

export default function useCreateClasses(
  options?: useAppMutationsOptions<CreateUserResponse, UserType, UserType>
) {
  const users = new Users();
  const mutationFn = (payload: UserType) => users.createUser(payload);
  return useAppMutation<CreateUserResponse, UserType, UserType>({
    mutationFn,
    options,
  });
}
