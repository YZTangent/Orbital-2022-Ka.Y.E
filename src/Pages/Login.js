import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Tooltip,
  Center
} from '@chakra-ui/react';
//import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { useAuth } from '../hooks/ProvideAuth';
import { Link as ReactLink } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    })
  }

  // Get auth state and re-render anytime it changes
  const { signin } = useAuth();

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Welcome Back!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Your trusty personal assistant is here to help! ૮ ˶ᵔ ᵕ ᵔ˶ ა
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
                <Tooltip 
                  Label='Email: testing@test \nPassword:testaccount1 \nAlternatively, you can make your own account at the sign up page :)' >
                  <Button
                    onClick={() =>signin(email, password)}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    on>
                    Sign in
                  </Button>
                </Tooltip>
              </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Need an account? <Link as={ReactLink} to="/signup" color={'blue.400'}>Register</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Text align={'center'}>
              Email: testing@test
              <br /> Password:testaccount1 
              <br /> Alternatively, you can make your own account at the sign up page :)
            </Text>
          </Stack>
          <Button
            w={'full'}
            variant={'outline'}
            // leftIcon={<FcGoogle />}
            onClick={() => signInWithGoogle()}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
}
