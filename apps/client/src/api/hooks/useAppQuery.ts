import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { ApiResponse } from "@shared/types";
type appQueryParams<TData> = {
  queryKey: QueryKey;
  queryFn: () => Promise<ApiResponse<TData>>;
  options?: UseQueryOptions<ApiResponse<TData>, Error>;
};
export default function useAppQuery<TData>({
  queryKey,
  queryFn,
  options,
}: appQueryParams<TData>): UseQueryResult<ApiResponse<TData>, Error> {
  return useQuery<ApiResponse<TData>>({
    queryKey,
    queryFn,
    ...options,
  });
}
