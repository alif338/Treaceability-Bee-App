import React from 'react';
import {
  Box,
  Link,
  Button,
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
  Input
} from '@chakra-ui/react';

export default function UpdatePeternak(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {profile} = props;
  return (
    <>
      <Button 
        onClick={onOpen}
        colorScheme="green"
        bg="green.400"
        color="white"
        _hover={{ bg: 'green.500', }}
        isFullWidth>Update Peternak</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Update Data Peternak</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired>
              <FormLabel>Jumlah Volume</FormLabel>
              <Input placeholder='Jumlah Volume' />
            </FormControl>
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