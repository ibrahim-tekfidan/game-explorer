import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

const useGames = () =>
  useQuery<FetchResponse, Error>({
    queryKey: ['games'],
    queryFn: () =>
      axios
        .get<FetchResponse>('https://api.rawg.io/api/games', {
          params: {
            key: '23c04f385a524de09a778b762ce1c462',
          },
        })
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGames;
