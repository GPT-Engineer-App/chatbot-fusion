// Complete the Index page component here
// Use chakra-ui
import React, { useState } from "react";
import { Box, Button, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  // State to store the user's initial prompt
  const [prompt, setPrompt] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [debugInfo, setDebugInfo] = React.useState([]);

  // Function to handle sending a new prompt
  const handleAgentResponses = (message, agent = "Claude") => {
    if (message.includes("project done")) {
      return;
    }
    setIsLoading(false);
  };

  const handleSendPrompt = () => {
    if (prompt.trim() !== "") {
      setMessages([...messages, { sender: "User", text: prompt }]);
      setDebugInfo([...debugInfo, `Sent prompt: ${prompt}`]);
      handleAgentResponses(prompt);
      setPrompt("");
    }
  };

  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Chat Bot Interface
        </Text>
        <Flex w="full" p={4} alignItems="center" justifyContent="space-between" bg="gray.100" borderRadius="md">
          <Input placeholder="Enter your prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendPrompt()} />
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

export default Index;
