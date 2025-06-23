import {useDashboardStore} from "../stores/dashboardStore.js";
import {DashboardApi} from "../api/dashboard.js";
import {useQuery} from "@tanstack/react-query";
import {useDataFetching} from "./useDataFetching.js";
import {useCallback} from "react";

export const usePieChartData = () => {
  const { filterObject } = useDashboardStore();
  const { fetchMostSoldProducts } = DashboardApi;

  const getPieChartData = useCallback(async () => {
    if (Object.keys(filterObject || {}).length === 0 || filterObject === undefined) return await fetchMostSoldProducts();
    return await fetchMostSoldProducts(filterObject);
  }, [filterObject])

  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
    error: errorProducts,
    isError: isErrorProducts,
  } = useQuery({
    queryKey: ['mostSold', filterObject],
    queryFn: getPieChartData,
    retry: 0,
    enabled: true,
  });

  useDataFetching({ isLoading: isLoadingProducts });

  return { products, isLoadingProducts, refetchProducts, errorProducts, isErrorProducts  }
}