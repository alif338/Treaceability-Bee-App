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
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
} from '@chakra-ui/react';
import getFromDb from '../../services/getFromDb';

export default function ProdukJadi() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getFromDb('state').then((value) => {
      setProducts(value[0].konsumen);
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
                      }}>Produk Jadi</Heading>
                    </Box>
                    <Spacer />
                  </Flex>
                  <Flex mt='5'>
                    <Table variant='striped'>
                      <Thead>
                        <Tr>
                          <Th>product_id</Th>
                          <Th>Sumber Stup</Th>
                          <Th>Jenis (Madu/Propolis)</Th>
                          <Th>Grade</Th>
                          <Th>Volume</Th>
                          <Th>Tanggal Produksi</Th>
                          <Th>Tanggal Kadaluwarsa</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          products && products.map(function(item, idx) {
                            return (
                              <Tr key={idx}>
                                <Td> {item.product_id}</Td>
                                <Td> {item.stup_sumber}</Td>
                                <Td> {item.jenis == 0 ? "Madu" : "Propolis"}</Td>
                                <Td> {item.grade}</Td>
                                <Td> {item.volume}</Td>
                                <Td> {item.tanggal_produksi}</Td>
                                <Td> {item.tanggal_kadaluwarsa}</Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>
                    </Table>
                  </Flex>
                  {products === null || products.length === 0 ?
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