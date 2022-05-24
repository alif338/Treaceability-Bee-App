/*
Input data yang diperlukan:
1. Koordinat lokasi (lat, lng)
2. link_foto (string)
3. produktivitas

yang otomatis terisi:
1. id (integer)
2. terakhir dipanen (integer, unix epoch)
*/
import React, {useState, forwardRef}  from 'react'; 
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
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function TambahStup() {
  const navigate = useNavigate()
  const [longitude, setLongitude] = useState(null); 
  const [latitude, setLatitude] = useState(null);
  const [linkFoto, setLinkFoto] = useState(null)
  const [produktivitas, setProduktivitas] = useState(null)
  const [startDate, setStartDate] = useState(new Date());
  
  const handleSubmit = async () => {
    
  }

  return (
    <Flex bg={useColorModeValue('gray.100', 'gray.900')} 
       align="center" 
       justify="center" 
       css={{ backgroundAttachment: 'fixed', }} 
       id="contact">
        <Box 
           borderRadius="lg" 
           m={{ base: 5, md: 16, lg: 10 }} 
           p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }}>
                <Box bg={useColorModeValue('white', 'gray.700')} 
                   borderRadius="lg" 
                   p={8} 
                   color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                   shadow="base" 
                   minW='90vw'>
                  <Flex>
                     <Box p='2'> 
                        <Heading fontSize={{ base: '2xl', md: '3xl', }}>Input Data Peternak</Heading> 
                     </Box> 
                     <Spacer /> 
                     <Box> 
                        <Link 
                           px={2} 
                           py={1} 
                           rounded={'md'} 
                           _hover={{ textDecoration: 'none', }} 
                           href={'/peternak/'}> 
                           <Button colorScheme="blue" bg="blue.400" color="white" _hover={{ bg: 'blue.500', }} isFullWidth> X </Button> 
                        </Link>
                     </Box> 
                  </Flex>
                  <VStack spacing={5} mt="10">
                     <FormControl isRequired> 
                        <FormLabel>Link Foto</FormLabel> 
                        <InputGroup> 
                           <Input value={linkFoto || ''} onChange={(e) => setLinkFoto(e.target.value)} 
                             type="text" name="link_foto" placeholder="Link Foto" />
                        </InputGroup> 
                     </FormControl> 
                    
                     <FormControl isRequired> 
                        <FormLabel>Produktivitas</FormLabel> 
                        <InputGroup> 
                           <Input value={produktivitas || ''} onChange={(e) => setProduktivitas(e.target.value)} 
                             type="text" name="produktivitas" placeholder="Produktivitas" />
                        </InputGroup> 
                     </FormControl> 
                    
                     <Flex mt="5" w="100%"> 
                        <Box flex='1' pr="5"> 
                           <FormControl isRequired> 
                              <FormLabel>Longitude</FormLabel> 
                              <InputGroup> 
                                <Input value={longitude || ''} onChange={(e) => setLongitude(e.target.value)} 
                                 type="text" name="longitude" placeholder="Longitude Stup" /> 
                              </InputGroup> 
                           </FormControl> 
                        </Box> 
                        <Box flex='1' pl="5"> 
                           <FormControl isRequired> 
                              <FormLabel>Latitude</FormLabel> 
                              <InputGroup> 
                                <Input value={latitude || ''} onChange={(e) => setLatitude(e.target.value)} 
                                 type="text" name="latitude" placeholder="Latitude Stup" /> 
                              </InputGroup> 
                           </FormControl> 
                        </Box> 
                     </Flex> 

                     <FormControl isRequired> 
                        <FormLabel>Tanggal Dipanen</FormLabel> 
                           <DatePicker 
                             selected={startDate} 
                             onChange={(date) => setStartDate(date)} />
                     </FormControl> 
                  </VStack>
                  <Flex mt="5"> 
                     <Button colorScheme="blue" bg="blue.400" mr='2' color="white" _hover={{ bg: 'blue.500', }} onClick={ handleSubmit }> Submit </Button> 
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