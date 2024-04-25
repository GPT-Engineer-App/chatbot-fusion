// Complete the Index page component here
// Use chakra-ui
import React from "react";
import { Box, Button, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  // State to store the user's initial prompt
  const [prompt, setPrompt] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  // Function to handle sending a new prompt
  const handleSendPrompt = () => {
    if (prompt.trim() !== "") {
      // Simulate sending the prompt to the chat agents
      setMessages([...messages, { sender: "User", text: prompt }]);
      // Simulate responses from Claude and Gemini agents
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "Claude", text: `Claude's response to: "${prompt}"` }]);
      }, 1000);
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "Gemini", text: `Gemini's response to: "${prompt}"` }]);
      }, 2000);
      // Clear the prompt input
      setPrompt("");
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Chat Bot Interface
        </Text>
        <Flex w="full" p={4} alignItems="center" justifyContent="space-between" bg="gray.100" borderRadius="md">
          <Input placeholder="Enter your prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendPrompt()} />
          <Button onClick={handleSendPrompt} ml={2} colorScheme="blue" leftIcon={<FaRobot />}>
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
      </VStack>
    </Container>
  );
};

export default Index;
