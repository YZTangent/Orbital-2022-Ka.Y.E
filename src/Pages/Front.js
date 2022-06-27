import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';
import {
    Link as ReactLink,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import React, {useCallback} from 'react';
import { useAuth } from '../hooks/ProvideAuth';
  
  export default function Front() {
    const navigate = useNavigate();
    const toLogin = useCallback(() => navigate('/login', {replace: true}), [navigate]);
    const toSignUp = useCallback(() => navigate('/signup', {replace: true}), [navigate]);
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            I'm fucking failing{' '}
            <Text as={'span'} color={'orange.400'}>
              Project Orbital
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            I lost the game.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
              onClick={toSignUp}
              >
              Sign Up
            </Button>
            <Button
              rounded={'full'} px={6}
              onClick={toLogin}
            >
              Login
            </Button>
          </Stack>
          <Flex w={'full'}>
          </Flex>
        </Stack>
      </Container>
    );
  }