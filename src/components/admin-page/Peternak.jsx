import React, {useState, useEffect} from 'react';
import Header from '../Header';
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
  Spacer,
  Link,
  Button,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from '@chakra-ui/react';
import getFromDb from '../../services/getFromDb';

export default function Peternak() {
  const [peternaks, setPeternaks] = useState(null)
  useEffect(() => {
    getFromDb('state').then((value) => {
      setPeternaks(value[0].peternaks)
    })
  })
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
                      }}>Peternak</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                      <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{ textDecoration: 'none', }}
                        href={'/admin/peternak/add-peternak'}>
                        <Button
                          colorScheme="blue"
                          bg="blue.400"
                          color="white"
                          _hover={{ bg: 'blue.500', }}
                          isFullWidth> Tambah Peternak </Button>
                      </Link>
                    </Box>
                  </Flex>
                  <Flex mt='5'>
                    <Table variant='striped'>
                      <Thead>
                        <Tr>
                          <Th>Id</Th>
                          <Th>Nama</Th>
                          <Th>Provinsi</Th>
                          <Th>Kecamatan/Kelurahan</Th>
                          <Th>Jumlah Volume</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          peternaks && peternaks.map(function(item, idx) {
                            return (
                              <Tr key={idx}>
                                <Td> {item.id}</Td>
                                <Td> {item.name}</Td>
                                <Td> {item.provinsi}</Td>
                                <Td> {item.kecamatan}/{item.kelurahan}</Td>
                                <Td> {item.jumlah_volume}</Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>
                    </Table>
                  </Flex>
                  {peternaks === null || peternaks.length === 0 ?
                    <Flex mt='8' align="center" justify="center">
                      <Heading fontSize={{ base: '2xl', md: '3xl', }}>No Data</Heading>
                    </Flex> :
                    <Flex mt='8' align="center" justify="center"></Flex>
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