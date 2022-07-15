import {
  Box,
  Image,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import React from 'react';

export default function AirbnbExample(props) {
  const { data, stup_list } = props;
  console.log("Ini Stups", stup_list)
  console.log("ini data", data)
  let sumber_stup = [];
  data.stup_sumber.forEach((element) => {
    // console.log(stup_list);
    const latLng = stup_list.filter((e) => e.id == element)[0];
    // console.log(latLng);
    sumber_stup.push([element, `https://maps.google.com?q=${latLng.lokasi[0]},${latLng.lokasi[1]}`])
  })
  const property = {
    imageUrl: 'https://picsum.photos/306/200',
    imageAlt: 'Rear view of modern home with pool',
    product_id: data.product_id,
    title: 'Produk Lebah',
    nama: data.nama_peternak,
    tanggal: new Date(data.tanggal_panen * 1000).toLocaleDateString("en-US"),
    jumlah_volume: data.jumlah,
    stup_sumber: sumber_stup,
    warna: data.warna,
    rasa: data.rasa
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} objectFit='fill' />

      <Box p='6' bg='white'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            mr='2'
          >
            Batch No.
          </Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {property.product_id}
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>
        
        <Box>
          <Box as='span' color='gray.600' fontSize='sm' mr={1}>
            Ukuran (volume):  
          </Box>
          {property.jumlah_volume} liter
        </Box>
        <Box>
          <Box as='span' color='gray.600' fontSize='sm' mr={1}>
            Warna:  
          </Box>
          {property.warna}
        </Box>
        <Box>
          <Box as='span' color='gray.600' fontSize='sm' mr={1}>
            Rasa:  
          </Box>
          {property.rasa}
        </Box>
        <Box mt={2}>
          <Button onClick={onOpen}>Trace</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Produk Lebah {property.product_id}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Pemanen/Peternak:  
                  </Box>
                  {property.nama}
                </Box>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Tanggal panen:  
                  </Box>
                  {property.tanggal}
                </Box>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Sumber Stup:  
                  </Box>
                  {property.stup_sumber.map((e) => {
                    return (
                      <Box 
                        as='button' 
                        borderRadius='md' 
                        bg='teal.500' c
                        olor='white' 
                        px={2} mr={2} h={8}
                        onClick={() => window.open(e[1])}>
                        #{e[0]}
                      </Box>
                    )
                  })}
                </Box>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Ukuran (volume):  
                  </Box>
                  {property.jumlah_volume} liter
                </Box>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Warna:  
                  </Box>
                  {property.warna}
                </Box>
                <Box>
                  <Box as='span' color='gray.600' fontSize='sm' mr={1}>
                    Rasa:  
                  </Box>
                  {property.rasa}
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  )
}