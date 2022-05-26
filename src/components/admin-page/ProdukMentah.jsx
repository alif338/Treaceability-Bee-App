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
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from '@chakra-ui/react';
import getFromDb from '../../services/getFromDb';

export default function ProdukMentah() {
  const [productsRaw, setProductsRaw] = useState([])
  useEffect(() => {
    getFromDb('state').then((value) => {
      setProductsRaw(value[0].rumah_produksi.products_raw);
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
                      }}>Produk Mentah</Heading>
                    </Box>
                    <Spacer />
                  </Flex>
                  <Flex mt='5'>
                    <Table variant='striped'>
                      <Thead>
                        <Tr>
                          <Th>no_batch</Th>
                          <Th>Jumlah (Liter)</Th>
                          <Th>Sumber Stup</Th>
                          <Th>Warna</Th>
                          <Th>Rasa</Th>
                          <Th>Tanggal Panen</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          productsRaw && productsRaw.map(function(item, idx) {
                            return (
                              <Tr key={idx}>
                                <Td> {item.no_batch}</Td>
                                <Td> {item.jumlah}</Td>
                                <Td> {item.stup_sumber}</Td>
                                <Td> {item.warna}</Td>
                                <Td> {item.rasa}</Td>
                                <Td> {item.tanggal_panen}</Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>
                    </Table>
                  </Flex>
                  {productsRaw === null || productsRaw.length === 0 ?
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