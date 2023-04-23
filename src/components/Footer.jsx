import React from 'react';
import { Box, Grid, GridItem, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Login', href: '/login' },
  ];

  const year = new Date().getFullYear();

  return (
    <Box bg='gray.100' py={8}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {links.map((link) => (
          <GridItem key={link.label}>
            <Link href={link.href} variant='ghost'>
              {link.label}
            </Link>
          </GridItem>
        ))}
      </Grid>
      <Text mt={8} textAlign='center'>
        © Gotham Coffee Shop {year}. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;