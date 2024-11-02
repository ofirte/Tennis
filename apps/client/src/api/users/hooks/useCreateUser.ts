import { CreateUserResponse, User as UserType } from "@shared/Users/types";
import { useMutation } from "@tanstack/react-query";
import Users from "../Users";

export default function useCreateClasses(): {
  isSuccess: boolean;
  isError: boolean;
  mutate: (payload: UserType) => void;
  mutateAsync: (payload: UserType) => Promise<CreateUserResponse>;
} {
  const user = new Users();
  const { mutate, isError, isSuccess, mutateAsync } = useMutation({
    mutationFn: async (payload: UserType) => {
      const res = user.createUser(payload);
      return res;
    },
  });
  return { mutate, isError, isSuccess, mutateAsync };
}
