import { ReactNode, useState, useEffect, Component } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../hooks/ProvideAuth';

const Links = ['Dashboard', 'Projects', 'Team'];


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, signOut } = useAuth();
  // console.log(user);
  const [uid, setUID] = useState('');
  const [discID, setDiscID] = useState('');
  const [count, setCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [events, setEvents] = useState([["Loading Events...", "Loading Status..."]]);
  const [loading, setLoading] = useState(true);
  const [nameLoading, setNameLoading] = useState(false);
  // const tableHeadings = ["Event", "Event ID", "Available"];
  const [table, setTable] = useState(

  );
  const tableHeadings = ["Event ID", "Available"];

  const getEvents = async () => {
    console.log("getEvents() was called");

    const { data, error } = await supabase
      .from('RSVP')
      .select(`
        id,
        avail,
        event (
          activity
        )`);
    console.log('results of getRSVP');
    console.log(data);
    return data;
  
    // console.log(data);
    // return data;
  }


  const getDiscID = async () => {
    console.log("getDiscID() was called")
    const { data, error } = await supabase
      .from('Profile')
      .select('DiscID');
    return data[0]["DiscID"];
  }

  useEffect(() => {
    setDiscID("Loading...");
    setLoading(true);
    getDiscID()
      .then(x => setDiscID(x))
      .catch(console.error);
    setLoading(false);
  }, [count]); 

  useEffect(() => {
    setEvents([["Loading Events...", "Loading Responses..."]]);
    console.log("Loading set to true");
    getEvents()
      .then(x => x
        // .map(y => [y["eventname"], y["eventID"], y["avail"]]))
        .map(y => {
          return y["avail"] === true
            ? [y["event"]["activity"], "Yes"]
            : [y["event"]["activity"], "No"];
        })
      )
      // .then(console.log('this is x'))
      // .then(x => console.log(x))
      .then(x => setEvents(x))
      .then(console.log('this is events'))
      .then(console.log(events))
      .catch(console.error)
      .then(console.log("Loading set to false"))
      .then(setLoading(false))
      .then(setNameLoading(false));
  }, [count]);

//   class Table extends Component {
//     render() {
//         var heading = this.props.heading;
//         var body = this.props.body;
//         return (
//             <table style={{ width: 500 }}>
//                 <thead>
//                     <tr>
//                         {heading.map(head => <th key={head}>{head}</th>)}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {body?.map(row => <TableRow row={row} />)}
//                 </tbody>
//             </table>
//         );
//     }
// }
  
// class TableRow extends Component {
//     render() {
//         var row = this.props.row;
//         return (
//             <tr>
//                 {row?.map(val => <td key={val}>{val}</td>)}
//             </tr>
//         )
//     }
// }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => console.log('ok')}>Connections</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Signed in as {user.email}</Box>
      <Box p={4}>Discord UID: {discID}</Box>
  <TableContainer>
  <Table variant='simple'>
    <TableCaption>There may be other events that you have not RSVP'd to!</TableCaption>
    <Thead>
      <Tr>
      {tableHeadings.map(head => <Th key={head}>{head}</Th>)}
      </Tr>
    </Thead>
    <Tbody><>
      {
        events.map(row => (
            <Tr> 
              <Td key={row[0]}> {row[0]} </Td>
              <Td key={row[1]}> {row[1]} </Td>
            </Tr>
        ))
      }
      </>
      {/* <Tr>
        <Td>The</Td>
        <Td>Game</Td>
      </Tr> */}
    </Tbody>
    <Tfoot>
      <Tr>
        {tableHeadings.map(head => <Th key={head}>{head}</Th>)}
      </Tr>
    </Tfoot>
   </Table>
  </TableContainer>
      <div>
      <p>You clicked {count} times</p>
      <p>Loading status: {loading ? "True" : "False"}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    </>
  );
}