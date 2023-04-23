import React from 'react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

const products = [
  {
    id: 1,
    name: 'Latte',
    imageSrc: 'https://via.placeholder.com/150',
    description: 'A classic coffee drink made with espresso and steamed milk.',
    price: 3.99,
  },
  {
    id: 2,
    name: 'Cappuccino',
    imageSrc: 'https://via.placeholder.com/150',
    description: 'A frothy coffee drink made with espresso and steamed milk.',
    price: 4.99,
  },
  {
    id: 3,
    name: 'Mocha',
    imageSrc: 'https://via.placeholder.com/150',
    description: 'A sweet coffee drink made with espresso, chocolate, and milk.',
    price: 5.99,
  },
];

const Home = () => {
  return (
    <Box py={8}>
      <Center>
        <Text fontSize='3xl'>Our Products</Text>
      </Center>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={8}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={product.imageSrc} alt={product.name} />
              <Box p='6'>
                <Box d='flex' alignItems='baseline'>
                  <Text fontSize='xl' fontWeight='semibold' mr={2}>
                    {product.name}
                  </Text>
                  <Text fontSize='lg' color='gray.500'>
                    ${product.price.toFixed(2)}
                  </Text>
                </Box>
                <Text mt={2} fontSize='md' color='gray.600'>
                  {product.description}
                </Text>
                <Button colorScheme='teal' mt={4}>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;