import Link from 'next/link';
import { Box } from '@fower/react';
import { styled } from '@fower/styled';

const HTMLink = styled('a');

export default function Navbar() {
  return (
    <Box
      maxW='1400px'
      mx='auto'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py4
    >
      <Link href='/'>
        <Box
          bgBlue700
          square14
          roundedFull
          flex
          justifyContent='center'
          alignItems='center'
          yellow400
          selectNone
          cursorPointer
        >
          LOGO
        </Box>
      </Link>
      <Box spaceX12 inlineFlex uppercase gray500>
        <Link href='/'>
          <HTMLink cursor='pointer' className='nav-link'>
            ABC
          </HTMLink>
        </Link>
        <Link href='/'>
          <HTMLink cursor='pointer' className='nav-link'>
            DEF
          </HTMLink>
        </Link>
        <Link href='/'>
          <HTMLink cursor='pointer' className='nav-link'>
            GHJ
          </HTMLink>
        </Link>
      </Box>
    </Box>
  );
}
