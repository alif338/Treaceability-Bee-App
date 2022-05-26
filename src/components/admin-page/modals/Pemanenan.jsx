import React, {useState, useEffect} from 'react';
import {
  Box,
  Link,
  Button,
  Modal,
  Stack,
  HStack,
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
  InputGroup,
  InputLeftAddon,
  Wrap,
  WrapItem
} from '@chakra-ui/react';

export default function Pemanenan(props) {
  const {dataStup} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stupVolArr, setStupVolArr] = useState([]);
  const [stup, setStup] = useState(null);
  const [volume, setVolume] = useState(null);
  const handleStupVols = () => {
    if (!stup || !volume) alert('Kedua id stup dan volume harus terisi');
    const result = [...stupVolArr];
    result.push([stup, volume]);
    setStupVolArr(result);
    setStup(null);
    setVolume(null);
  }
  return (
    <>
      <Button
        colorScheme="green"
        bg="green.400"
        color="white"
        onClick={onOpen}
        _hover={{ bg: 'green.500', }}
        isFullWidth> Pemanenan </Button>
      
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Input Pemanenan</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired>
              <FormLabel>Id Peternak</FormLabel>
              <Input placeholder='Id Peternak' />
            </FormControl>
            
            <FormControl mt={4} isRequired>
              <FormLabel>Stup Sumber</FormLabel>
              <HStack spacing={2}>
                <InputGroup>
                  <InputLeftAddon children='Id Stup' />
                  <Input value={stup || ''} onChange={(val) => setStup(val.target.value)} type='text' placeholder='Stup' />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children='Volume' />
                  <Input value={volume || ''} onChange={(val) => setVolume(val.target.value)} type='text' placeholder='Volume' />
                </InputGroup>
                  <Button onClick={handleStupVols} colorScheme='teal' variant='ghost'>Add</Button>
              </HStack>
            </FormControl>
            <Wrap mt={3}>
              {stupVolArr.map((value) => {
                return (
                  <Box as='button' borderRadius='md' bg='gray.200' color='gray.600' px={2} h={8}>
                    (#{value[0]}, {value[1]} L)
                  </Box>
                )
              })}
            </Wrap>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}