import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { FetchResponse } from '../services/api-client';
import APIClient from '../services/api-client';
import ms from 'ms';

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
  search?: string;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: gameQuery ? ['games', gameQuery] : ['games'],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
        },
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms('24h'),
  });
export default useGames;
