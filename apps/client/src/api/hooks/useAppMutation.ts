import { ApiResponse } from "@shared/types";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";

export default function useAppMutation<TData, TError, TVariables, TContext>({
  mutationFn,
  options,
}: {
  mutationFn: (data: TVariables) => Promise<ApiResponse<TData>>;
  options?: UseMutationOptions<
    ApiResponse<TData>,
    TError,
    TVariables,
    TContext
  >;
}): UseMutationResult<ApiResponse<TData>, TError, TVariables, TContext> {
  return useMutation<ApiResponse<TData>, TError, TVariables, TContext>({
    mutationFn,
    ...options,
  });
}
