import React, { useState } from "react";
import { Box, Button, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const GptEngineer = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [debugInfo, setDebugInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendPrompt = () => {
    if (prompt.trim() !== "") {
      setMessages([...messages, { sender: "User", text: prompt }]);
      setDebugInfo([...debugInfo, `Sent engineering query: ${prompt}`]);
      setPrompt("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          GPT-Engineer Interface
        </Text>
        <Flex w="full" p={4} alignItems="center" justifyContent="space-between" bg="gray.100" borderRadius="md">
          <Input placeholder="Enter your engineering query" value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendPrompt()} />
          <Button onClick={handleSendPrompt} ml={2} colorScheme="blue" leftIcon={<FaRobot />} isLoading={isLoading}>
            Send
          </Button>
        </Flex>
        <Box w="full" bg="white" p={4} borderRadius="md" border="1px" borderColor="gray.200" overflowY="auto" maxH="400px">
          {messages.map((message, index) => (
            <Box key={index} bg={message.sender === "User" ? "blue.100" : "green.100"} p={2} my={2} borderRadius="md">
              <Text fontWeight="bold">{message.sender}:</Text>
              <Text>{message.text}</Text>
            </Box>
          ))}
        </Box>
        <Box w="full" bg="gray.50" p={4} borderRadius="md" border="1px" borderColor="gray.300" overflowY="auto" maxH="200px">
          {debugInfo.map((info, index) => (
            <Text key={index} fontSize="sm">
              {info}
            </Text>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default GptEngineer;
