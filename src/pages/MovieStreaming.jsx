import { Container, Text, VStack, Button } from "@chakra-ui/react";

const MovieStreaming = () => {
  const startStreaming = () => {
    // Logic to start streaming
    console.log("Starting movie streaming");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Movie Streaming Service</Text>
        <Text>Click below to start streaming your favorite movies!</Text>
        <Button colorScheme="blue" onClick={startStreaming}>Start Streaming</Button>
      </VStack>
    </Container>
  );
};

export default MovieStreaming;