import useTrailers from '../hooks/useTailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = trailers?.results[0];

  console.log(trailers?.results);

  return first ? (
    <video src={first?.data['480']} poster={first?.preview} controls autoPlay />
  ) : null;
};

export default GameTrailer;
