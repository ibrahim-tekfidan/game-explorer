import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Trailer } from '../entities/Trailer';

const useTrailers = (gameId: number) => {
  const ApiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['tailers', gameId],
    queryFn: ApiClient.getAll,
  });
};

export default useTrailers;
