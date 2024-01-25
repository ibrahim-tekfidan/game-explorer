import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genres from '../data/genres';

interface Genre {
  id: number;
  name: string;
}

export interface FetchResponseGenre {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery<FetchResponseGenre, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponseGenre>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
