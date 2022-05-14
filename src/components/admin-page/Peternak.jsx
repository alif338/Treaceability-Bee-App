import React from 'react';
import Header from '../Header';
import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
  Spacer,
} from '@chakra-ui/react';

export default function Peternak() {
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
                      }}>Peternak</Heading>
                    </Box>
                    <Spacer />
                  </Flex>
                  <Flex mt='5'>
                    <div id="chartdiv"></div>
                  </Flex>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  )
}