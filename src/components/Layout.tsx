import { Box } from '@fower/react';
import { ReactNode } from 'react';
import Navbar from './Navbar';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Box bgGray100 minH-100vh>
      <Navbar />
      <Box maxW='1200px' mx='auto' py16>
        {children}
      </Box>
    </Box>
  );
}
