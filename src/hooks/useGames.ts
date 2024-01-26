import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

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

const useGames = (selectedGenreId?: number) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: selectedGenreId ? ['games', selectedGenreId] : ['games'],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: selectedGenreId,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGames;
