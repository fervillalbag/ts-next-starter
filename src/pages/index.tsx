import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

const Home: React.FC = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input
          placeholder="fervillalbag@gmail.com"
          variant="filled"
          mb={3}
          type="email"
        />
        <Input
          placeholder="fervillalbag@gmail.com"
          variant="filled"
          mb={6}
          type="password"
        />
        <Button colorScheme="teal" mb={6}>
          Log in
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}

export default Home
