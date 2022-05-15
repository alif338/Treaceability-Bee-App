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
import {useNavigate} from 'react-router-dom';

import AirbnbExample from "./Card";

export default function UserDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text as='b' fontSize='2xl'>Product List</Text>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/")}>
                  Log Out
								</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
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