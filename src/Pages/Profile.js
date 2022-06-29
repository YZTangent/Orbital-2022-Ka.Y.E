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
} from '@chakra-ui/react';
import { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../hooks/ProvideAuth';

export default function SimpleCard() {
    const [username, setUsername] = useState()
    const [tele, setTeleID] = useState()
    const [disc, setDiscID] = useState()
    const { user } = useAuth();

    const update_profile = async () => {
        await supabase
            .from('Profile')
            .upsert({
                "id": user.id,
                "username": username,
                "DiscID": disc,
                "TeleID": tele
            })
            .then((response) => {
                    if (response.error) {
                        alert(response.error.message);
                    } else {
                        alert("Profile updated successfully!")
                    }
            })
    }

    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Update your details here!</Heading>
            </Stack>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
                <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl id="discord id">
                <FormLabel>Discord ID</FormLabel>
                <Input onChange={(e) => setDiscID(e.target.value)} />
                </FormControl>
                <FormControl id="telegram id">
                <FormLabel>Telegram ID</FormLabel>
                <Input onChange={(e) => setTeleID(e.target.value)} />
                </FormControl>
                <Stack spacing={10}>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    onClick={update_profile}
                    _hover={{
                    bg: 'blue.500',
                    }}>
                    Update
                </Button>
                </Stack>
            </Stack>
            </Box>
        </Stack>
        </Flex>
    );
}