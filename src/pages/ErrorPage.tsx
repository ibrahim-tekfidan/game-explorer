import { Box, Heading, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  isRouteErrorResponse(error);
  return (
    <Box
      paddingY={{
        base: 1,
        sm: 3,
        lg: 5,
      }}
      paddingX={{ base: 2, sm: 5, lg: 7 }}
    >
      <NavBar />
      <Heading paddingTop={5}>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page does not exits.'
          : 'An unexpected error occured.'}
      </Text>
    </Box>
  );
};

export default ErrorPage;
