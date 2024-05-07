import { Container, VStack, Heading, Text, Button, useColorModeValue, Image, Box } from "@chakra-ui/react";
import { FaRocket, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl" mb={4}>
            Welcome to AI Solutions
          </Heading>
          <Text mt={4}>Innovative AI technologies to drive your business forward.</Text>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE1MDY1NTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" borderRadius="md" mt={4} />
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack align="start">
            <Heading fontSize="xl">Explore Our Services</Heading>
            <Text>Custom AI solutions tailored to your needs.</Text>
          </VStack>
          <Button leftIcon={<FaRocket />} colorScheme="purple" variant="solid">
            Get Started
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack align="start">
            <Heading fontSize="xl">Learn More</Heading>
            <Text>Discover how our AI can help your business grow.</Text>
          </VStack>
          <Button leftIcon={<FaInfoCircle />} colorScheme="blue" variant="solid">
            More Info
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <VStack align="start">
            <Heading fontSize="xl">Contact Us</Heading>
            <Text>Ready to start? Get in touch with our team.</Text>
          </VStack>
          <Button leftIcon={<FaPhone />} colorScheme="green" variant="solid">
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
