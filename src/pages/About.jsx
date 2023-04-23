import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const About = () => {
  return (
    <Box py={10}>
      <Heading as='h2' size='xl' textAlign='center'>
        Welcome to Gotham Coffee Shop!
      </Heading>

      <Box maxW='50em' mx='auto' mt={8}>
        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
          Gotham Coffee Shop is a local coffee roaster and cafe committed to
          providing high-quality, sustainably sourced coffee and a welcoming
          atmosphere. We take pride in our carefully crafted coffee blends and
          our commitment to using ethically sourced ingredients.
        </Text>
      </Box>

      <Box mt={10} display='flex' justifyContent='center'>
        <Button
          size={{ base: 'md', md: 'lg', lg: 'xl' }}
          variant='solid'
          colorScheme='teal'
          mr={4}
        >
          Continue Shopping
        </Button>
        <Button
          size={{ base: 'md', md: 'lg', lg: 'xl' }}
          variant='outline'
          colorScheme='teal'
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default About;