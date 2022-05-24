import React, {useState, useEffect} from "react";
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
  Tr,
  Th,
  Td
} from '@chakra-ui/react';
import {supabase} from '../../supabaseClient'

export default function Stup() {
  const [stups, setStups] = useState(null);
  useEffect(() => {
    getStups()
  }, [])

  async function getStups() {
    try {
      let {data, error, status} = await supabase
        .from('stup')
        .select()

      if (error) {
        throw error
      }

      if (data) {
        setStups(data)
        console.log(data)
      }
    } catch (error) {
      alert(error.message)
    }
  }
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
                      }}>Stup</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                      <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{ textDecoration: 'none', }}
                        href={"/admin/stup/add-stup"}>
                        <Button
                          colorScheme="blue"
                          bg="blue.400"
                          color="white"
                          _hover={{ bg: 'blue.500', }}
                          isFullWidth> Tambah Stup </Button>
                      </Link>
                    </Box>
                  </Flex>
                  <Flex mt='5'>
                    <Table variant='striped'>
                      <Thead>
                        <Tr>
                          <Th>Id</Th>
                          <Th>Lokasi</Th>
                          <Th>Link Foto</Th>
                          <Th>Terakhir Dipanen</Th>
                          <Th>Produktivitas</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          stups && stups.map(function(item, idx) {
                            return (
                              <Tr key={idx}>
                                <Td> {item.id}</Td>
                                <Td> {item.lokasi[0]}, {item.lokasi[1]}</Td>
                                <Td> <Link href={item.link_foto}>{item.link_foto}</Link></Td>
                                <Td> {item.terakhir_dipanen}</Td>
                                <Td> {item.produktivitas}</Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>
                    </Table>
                  </Flex>
                  {stups === null || stups.length === 0 ?
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