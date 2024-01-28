import { Button } from '@chakra-ui/react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BackToGamesButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/')}
      size={{ base: 'xs', md: 'sm' }}
      leftIcon={<FaArrowCircleLeft />}
      colorScheme="yellow"
      variant="solid"
      marginTop={2}
    >
      Back
    </Button>
  );
};

export default BackToGamesButton;
