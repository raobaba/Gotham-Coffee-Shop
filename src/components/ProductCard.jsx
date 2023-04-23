import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ id, title, description, image, price }) => {
  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      transition='transform 0.3s ease-in-out'
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={image} alt={title} />

      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Text fontSize='xl' fontWeight='semibold' mr={2}>
            {title}
          </Text>
          <Text fontSize='lg' color='gray.500'>
            ${price.toFixed(2)}
          </Text>
        </Box>

        <Text mt={2} fontSize='md' color='gray.600'>
          {description}
        </Text>

        <Button colorScheme='teal' mt={4}>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;