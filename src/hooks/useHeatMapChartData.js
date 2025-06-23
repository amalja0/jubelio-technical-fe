import {DashboardApi} from "../api/dashboard.js";
import {useQuery} from "@tanstack/react-query";
import {useDashboardStore} from "../stores/dashboardStore.js";
import {useCallback} from "react";
import {useDataFetching} from "./useDataFetching.js";

export const useHeatMapChartData = () => {
  const { filterObject } = useDashboardStore();
  const { fetchMostSoldProductsByState } = DashboardApi;

  const getHeatMapChartData = useCallback(async () => {
    return await fetchMostSoldProductsByState();
  }, [])

  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
    error: errorProducts,
    isError: isErrorProducts,
  } = useQuery({
    queryKey: ['mostSoldByState'],
    queryFn: getHeatMapChartData,
    retry: 0,
    enabled: true,
  });

  useDataFetching({ isLoading: isLoadingProducts });

  return { products, isLoadingProducts, refetchProducts, errorProducts, isErrorProducts  }
}