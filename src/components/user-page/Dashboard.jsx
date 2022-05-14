import React from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';

import AirbnbExample from "./Card";

export default function UserDashboard() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <Text as='b' fontSize='2xl'>Product List</Text>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10} pb={4}>
        <SimpleGrid minChildWidth='240px' spacing='40px'>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
          < AirbnbExample/>
        </SimpleGrid>
      </Box>
    </>
  )
}