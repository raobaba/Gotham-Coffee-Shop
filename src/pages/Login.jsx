import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Login = () => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  return (
    <Box p={4}>
      <Text fontSize={isSmallerThan768 ? "3xl" : "5xl"} mb={8}>
        Login
      </Text>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="green">Sign in</Button>
      </Stack>
    </Box>
  );
};

export default Login;