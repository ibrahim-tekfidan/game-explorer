import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
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
      <Outlet />
    </Box>
  );
};

export default Layout;
