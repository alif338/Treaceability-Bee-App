/*
Input yang diperlukan
1. name
2. provinsi
3. kecamatan
4. kelurahan
5. jumlah_volume
6. raw_products
*/

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Checkbox,
  Spacer
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {supabase} from "../../../supabaseClient"
import getFromDb from "../../../services/getFromDb";

import "react-datepicker/dist/react-datepicker.css";

export default function TambahPeternak() {
  const navigate = useNavigate();
  const [nama, setNama] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [kecamatan, setKecamatan] = useState(null);
  const [kelurahan, setKelurahan] = useState(null);

  const handleSubmit = async () => {
    const state = await getFromDb('state');
    state[0].peternaks.push({
      id: state[0].peternaks.length + 1,
      name: nama,
      provinsi: provinsi,
      kecamatan: kecamatan,
      kelurahan: kelurahan,
      jumlah_volume: 0.0,
      products_raw: []
    })

    try {
      const { data, error } = await supabase
        .from('state')
        .update({peternaks: state[0].peternaks})
        .eq('id', 1);
      if (error) throw error
      if (data) {
        alert('data berhasil ditambahkan')
        navigate('/admin/peternak')
      }
    } catch (error) {
      alert('data gagal ditambahkan')
    }
  }

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      css={{ backgroundAttachment: 'fixed', }}
      id="tambahPeternak">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack>
            <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
                minW='90vw'>
                <Flex>
                  <Box p='2'>
                    <Heading fontSize={{ base: '2xl', md: '3xl', }}>Input Data Peternak</Heading>
                  </Box>
                  <Spacer/>
                  <Box>
                    <Link
                      px={2}
                      py={1}
                      rounded={'md'}
                      _hover={{ textDecoration: 'none', }}
                      href={'/admin/peternak/'}>
                      <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500', }} isFullWidth> X </Button>
                    </Link>
                  </Box>
                </Flex>
                <VStack spacing={5} mt="10">
                  <FormControl isRequired>
                    <FormLabel>Nama</FormLabel>
                    <InputGroup>
                      <Input value={nama || ''} onChange={(e) => setNama(e.target.value)}
                        type="text" name="nama" placeholder="Nama Peternak" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Provinsi</FormLabel>
                    <InputGroup>
                      <Input value={provinsi || ''} onChange={(e) => setProvinsi(e.target.value)}
                        type="text" name="provinsi" placeholder="Provinsi Peternak" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Kecamatan</FormLabel>
                    <InputGroup>
                      <Input value={kecamatan || ''} onChange={(e) => setKecamatan(e.target.value)}
                        type="text" name="kecamatan" placeholder="Kecamatan Peternak" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Kelurahan</FormLabel>
                    <InputGroup>
                      <Input value={kelurahan || ''} onChange={(e) => setKelurahan(e.target.value)}
                        type="text" name="kelurahan" placeholder="Kelurahan Peternak" />
                    </InputGroup>
                  </FormControl>
                </VStack>
                <Flex mt="5">
                  <Button colorScheme="blue" bg="blue.400" mr='2' color="white" _hover={{ bg: 'blue.500', }} onClick={handleSubmit}> Submit </Button>
                  <Button colorScheme="red" bg="red.400" color="white" _hover={{ bg: 'blue.500', }}> Reset </Button>
                </Flex>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}