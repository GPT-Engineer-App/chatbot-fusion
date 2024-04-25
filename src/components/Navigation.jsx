import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.200" p={4} justifyContent="space-between">
      <Link to="/">
        <Button colorScheme="teal">Home</Button>
      </Link>
      <Link to="/gpt-engineer">
        <Button colorScheme="teal">GPT-Engineer</Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
