import React, { useState, useEffect } from 'react';
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
  InputLeftAddon,
  Wrap,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  HStack,
  Checkbox,
  Spacer,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import getFromDb from "../../services/getFromDb";
import DatePicker from "react-datepicker";
import { f4_pemanenan, getContract } from "../../services/sc_functions";

import "react-datepicker/dist/react-datepicker.css";

export default function Pemanenan() {
  const [state, setState] = useState(null);
  const [idPeternak, setIdPeternak] = useState(null);
  const [stupVolArr, setStupVolArr] = useState([]);
  const [stup, setStup] = useState(null);
  const [volume, setVolume] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [warna, setWarna] = useState(null);
  const [rasa, setRasa] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getFromDb('state').then((value) => {
      setState(value[0]);
    })
  }, [])
  
  const handleStupVols = () => {
    if (!stup || !volume) {
      alert('Kedua id stup dan volume harus terisi');
      return;
    }
    const result = [...stupVolArr];
    result.push([stup, volume]);
    setStupVolArr(result);
    setStup(null);
    setVolume(null);
  }

  const handleSubmit = async () => {
    alert("Memulai pemanenan");
    const stup_sumber = stupVolArr.map((e) => e[0]);
    const komposisi_volume = stupVolArr.map((e) => parseFloat(e[1]));
    const data_panen = {
      no_batch: state.peternaks[idPeternak-1].products_raw.length + 1,
      jumlah: komposisi_volume.reduce((partSum, a) => parseFloat(partSum) + parseFloat(a), 0),
      stup_sumber: stup_sumber,
      warna: warna,
      rasa: rasa,
      tanggal_panen: Math.floor(startDate.getTime()/1000)
    }
    
    try {
      const result = await f4_pemanenan(stup_sumber, idPeternak, data_panen, komposisi_volume)
      console.log(result);
      if (result) {
        alert("Pemanenan Berhasil");
        navigate("/admin/peternak");
      } else {
        throw "Gagal";
      }
      
    } catch(error) {
      alert("Pemanenan GAGAL")
    }
  }

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      css={{ backgroundAttachment: 'fixed', }}
      id="pemanenan">
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
                <Box p='2'>
                  <Heading fontSize={{ base: '2xl', md: '3xl', }}>Input Pemanenan</Heading>
                </Box>
                <VStack spacing={5} mt="10">
                  <FormControl mt={4} isRequired>
                    <FormLabel>Id Peternak</FormLabel>
                    <Select onChange={(val) => setIdPeternak(val.target.value)} placeholder='Pilih Id Peternak'>
                      {!state ? null : state.peternaks.map((e) => {
                        return (
                          <option value={e.id}>{e.id}: {e.name}</option>
                        )
                      })}
                    </Select>
                  </FormControl>
                  
                  <FormControl mt={4} isRequired>
                    <FormLabel>Stup Sumber</FormLabel>
                    <HStack spacing={2}>
                      <InputGroup>
                        <InputLeftAddon children='Id Stup' />
                        <Select onChange={(val) => setStup(val.target.value)} placeholder='Id Stup'>
                          {!state ? null : state.stups.map((e) => {
                            return (
                              <option value={e.id.toString()}>{e.id}</option>
                            )
                          })}
                        </Select>
                      </InputGroup>
                      <InputGroup>
                        <InputLeftAddon children='Volume (liter)' />
                        <Input value={volume || ''} onChange={(val) => setVolume(val.target.value)} type='text' placeholder='Volume' />
                      </InputGroup>
                        <Button onClick={handleStupVols} colorScheme='teal' variant='ghost'>Add</Button>
                    </HStack>
                  </FormControl>
                  <Wrap mt={3}>
                    {stupVolArr.map((value) => {
                       return (<Box as='button' borderRadius='md' bg='gray.200' color='gray.600' px={2} h={8}>
                          id: {value[0]}, v: {value[1]} liter
                        </Box>)
                      })
                    }
                  </Wrap>
                </VStack>
                <Box>
                  <Heading as='h1' size='md'>Data Panen</Heading>
                </Box>
                <VStack spacing={5}>
                  <FormControl mt={4} isRequired>
                    <FormLabel>Warna</FormLabel>
                    <Input placeholder='Warna' onChange={(val) => setWarna(val.target.value)}/>
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <FormLabel>Rasa</FormLabel>
                    <Input placeholder='Rasa' onChange={(val) => setRasa(val.target.value)}/>
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <FormLabel>Tanggal Panen</FormLabel>
                    <DatePicker 
                       selected={startDate} 
                       onChange={(date) => setStartDate(date)} />
                  </FormControl>
                </VStack>
                <Flex mt="5"> 
                   <Button colorScheme="blue" bg="blue.400" mr='2' color="white" _hover={{ bg: 'blue.500', }} onClick={handleSubmit}> Submit </Button> 
                   <Button colorScheme="red" bg="red.400" color="white" _hover={{ bg: 'red.500', }}> Reset </Button> 
                </Flex>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}