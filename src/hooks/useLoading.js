import {useLoaderStore} from "../stores/loaderStore.js";

export const useLoading = () => {
  const { isLoading, setIsLoading } = useLoaderStore();
  return { isLoading, setIsLoading }
}