import React, {useState, useEffect} from 'react';
import {
  Box,
  Flex,
  Avatar,
  Stack,
  VStack,
  HStack,
  Link,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Wrap,
  WrapItem,
  Spacer
} from '@chakra-ui/react';
import getFromDb from '../../services/getFromDb';
import {useParams} from "react-router-dom";
import UpdatePeternak from "./modals/UpdatePeternak";
import DetailRawProduct from "./modals/DetailRawProduct";

const Header = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link _hover={{textDecoration: 'none'}} href={'/'}>
                <b>Treaceability Bee (Administrator)</b>
              </Link>
            </Box>
        </HStack>
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
  )
}

const ProductRaw = (props) => {
  return (
    <WrapItem>
      <DetailRawProduct data={props.data}/>
    </WrapItem>
  )
}

export default function DetailPeternak() {
  const [profile, setProfile] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    getFromDb('state').then((value) => {
      setProfile(value[0].peternaks[id-1]);
    })
  }, [])
  return (
    <>
      <Header/>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        align="center"
        justify="center"
        css={{
          backgroundAttachment: 'fixed',
        }}
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Box 
                  bg={useColorModeValue('white', 'gray.700')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="base"
                  minW='90vw'>
                  <Flex>
                    <Box p='2'>
                      <Heading fontSize={{
                        base: '2xl',
                        md: '3xl',
                      }}>Detail Peternak</Heading>
                    </Box>

                  </Flex>
                  {
                    profile === null ? 
                    <Flex mt='8' align="center" justify="center">
                      <Heading fontSize={{ base: 'l', md: 'xl', }}>Data tidak ditemukan</Heading>
                    </Flex> 
                    : <Flex mt='5' direction='column'>
                    <Box>
                      <b>Nama:</b> {profile.name}
                    </Box>
                    <Box>
                      <b>Provinsi:</b> {profile.provinsi}
                    </Box>
                    <Box>
                      <b>Kecamatan, Kelurahan:</b> {profile.kecamatan}, {profile.kelurahan}
                    </Box>
                    <Box>
                      <b>Volume Madu Tersimpan:</b> {profile.jumlah_volume} (Liter)
                    </Box>
                    <Box>
                      <b>Produk Mentah Tersimpan:</b>
                    </Box>
                      <Wrap>
                        {profile.products_raw.map((e) => {
                          return <ProductRaw data={e}/>
                        })}
                      </Wrap>
                  </Flex>
                  }
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  )
}