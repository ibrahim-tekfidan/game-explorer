import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;