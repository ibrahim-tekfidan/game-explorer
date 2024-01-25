import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

const useGames = () =>
  useQuery<FetchResponse, Error>({
    queryKey: ['games'],
    queryFn: () => apiClient.get<FetchResponse>('/games').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGames;
