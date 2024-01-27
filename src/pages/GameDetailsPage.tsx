import { useParams } from 'react-router-dom';

const GameDetailsPage = () => {
  const params = useParams();
  return <div>Game detail {params.id}</div>;
};

export default GameDetailsPage;
