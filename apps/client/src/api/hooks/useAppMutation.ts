import { ApiResponse } from "@shared/types";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
export type useAppMutationsOptions<
  TData,
  TError,
  TVariables,
  TContext = unknown
> = UseMutationOptions<ApiResponse<TData>, TError, TVariables, TContext>;
export default function useAppMutation<
  TData,
  TError,
  TVariables,
  TContext = unknown
>({
  mutationFn,
  options,
}: {
  mutationFn: (data: TVariables) => Promise<ApiResponse<TData>>;
  options?: useAppMutationsOptions<TData, TError, TVariables, TContext>;
}): UseMutationResult<ApiResponse<TData>, TError, TVariables, TContext> {
  return useMutation<ApiResponse<TData>, TError, TVariables, TContext>({
    mutationFn,
    ...options,
  });
}
