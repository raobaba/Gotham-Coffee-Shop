import React from "react";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Contact Us</Heading>
      <Box mb={4}>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaMapMarkerAlt} color="green.500" />
            <Text>123 Main St, Gotham City</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaPhone} color="green.500" />
            <Text>(123) 456-7890</Text>
          </ListItem>
          <ListItem>
            <ListIcon as={FaEnvelope} color="green.500" />
            <Text>info@gothamcoffee.com</Text>
          </ListItem>
        </List>
      </Box>
      <Text>
        We'd love to hear from you! Please reach out with any questions or
        feedback.
      </Text>
    </Box>
  );
};

export default Contact;