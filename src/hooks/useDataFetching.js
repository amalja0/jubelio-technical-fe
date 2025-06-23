import {useLoading} from "./useLoading.js";

export const useDataFetching = (({ isLoading }) => {
  const { setIsLoading } = useLoading();
})