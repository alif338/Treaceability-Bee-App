import React, {useState, useEffect} from "react";
import Header from '../Header';
import {
  Box,
  Flex,
  Link,
  Button,
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
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import getFromDb from '../../services/getFromDb';
import {f1_perpindahanProduk} from "../../services/sc_functions";

const AmbilDariPeternak = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idPeternak, setIdPeternak] = useState(null);
  const onSubmit = async () => {
    const result = await f1_perpindahanProduk(idPeternak-1, 0, 0);
    if (result) alert("Pengambilan Berhasil")
    else alert("Pengambilan GAGAL");
  }
  
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        bg="blue.400"
        color="white"
        _hover={{ bg: 'blue.500', }}
        isFullWidth> Ambil dari Peternak </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Pilih Peternak</FormLabel>
              
              <Select onChange={(val) => setIdPeternak(val.target.value)} placeholder='id: Nama Peternak'>
                {
                  props.state?.peternaks.map((val) => {
                    return (
                      <option value={val.id}>{val.id}: {val.name}</option>
                    )
                  })
                }
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button isDisabled={!idPeternak} colorScheme='blue' mr={3} onClick={onSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function ProdukMentah() {
  const [productsRaw, setProductsRaw] = useState([]);
  const [state, setState] = useState(null);
  useEffect(() => {
    getFromDb('state').then((value) => {
      setProductsRaw(value[0].rumah_produksi.products_raw);
      setState(value[0]);
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
                    <Box>
                      <Link
                        px={2}
                        py={1}
                        rounded={'md'}
                        _hover={{ textDecoration: 'none', }}
                        // href={'/admin/peternak/add-peternak'}
                        >
                        <AmbilDariPeternak state={state}/>
                      </Link>
                    </Box>
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