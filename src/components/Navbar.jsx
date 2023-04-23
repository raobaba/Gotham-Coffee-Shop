import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState('left');

  const display = useBreakpointValue({ base: 'none', md: 'flex' });

  return (
    <Box>
      <Flex
        bg='gray.100'
        p={4}
        alignItems='center'
        justifyContent='space-between'
      >
        <Box>
          <Heading size='md'>Gotham Coffee Shop</Heading>
        </Box>

        <Spacer />

        <Box display={display}>
          <Link to='/' style={{marginLeft:"20px",fontSize:"20px"}}>
            Home
          </Link>
          <Link to='/about' style={{marginLeft:"20px",fontSize:"20px"}}>
            About
          </Link>
          <Link to='/contact' style={{marginLeft:"20px",fontSize:"20px"}}>
            Contact
          </Link>
          <Link to='/login' style={{marginLeft:"20px",fontSize:"20px"}}>
            Login
          </Link>
        </Box>

        <Box display={{ base: 'flex', md: 'none' }}>
          <Button onClick={onOpen}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z' />
            </svg>
          </Button>
        </Box>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        size='xs'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gotham Coffee Shop</DrawerHeader>
          <DrawerBody>
            <VStack spacing='4'>
              <Link to='/'>
                Home
              </Link>
              <Link to='/about'>
                About
              </Link>
              <Link to='/contact'>
                Contact
              </Link>
              <Link to='/login'>
                Login
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;