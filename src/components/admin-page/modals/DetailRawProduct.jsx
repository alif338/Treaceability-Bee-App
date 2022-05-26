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
  useDisclosure
} from '@chakra-ui/react';
import Lorem from 'react-lorem-component';

export default function DetailRawProduct(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box as='button' onClick={onOpen} borderRadius='md' bg='tomato' color='white' px={2} h={8}>
        #{props.data.no_batch}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {JSON.stringify(props.data)}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        
      </Modal>
    </>
  )
}