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

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: gameQuery ? ['games', gameQuery] : ['games'],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGames;
