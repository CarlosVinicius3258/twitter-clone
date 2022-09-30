import { ApiService } from '../service/ApiService';

import useSWR from 'swr';

const useApi = (endPoint: any, config?: any) => {
  const { data, error } = useSWR(endPoint, async (url: any) => {
    const response = await ApiService(url, config);

    return response.data;
  });

  return {
    data,
    error,
  };
};

export default useApi;
