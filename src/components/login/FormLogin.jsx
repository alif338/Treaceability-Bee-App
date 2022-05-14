import React from 'react';
import {
  Box,
  Flex,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
  Center,
  Stack,
  Radio,
  RadioGroup
} from "@chakra-ui/react";

function FormLogin(props) {
  const { handleSubmit, changeEmail, radioHandler } = props;
  const mainColor = useColorModeValue("#00A18B", "#00A18B");
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex position="relative" >
      <Flex h={{ sm: "initial", md: "75vh", lg: "85vh" }} w="100%" maxW="1044px" mx="auto" justifyContent="center" pt={{ sm: "100px", md: "0px" }}>
        <Flex alignItems="center" justifyContent="start" >
          <Flex direction="column" w="100%" background="transparent" >
            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="20px">Masukkan Email untuk Login!</Text>
            <chakra.form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">Email</FormLabel>
                <Input onChange={changeEmail} borderRadius="15px" mb="24px" fontSize="sm" type="text" placeholder="Email Anda" size="lg" />
              </FormControl>
              <FormControl>
                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">Login sebagai</FormLabel>
                <RadioGroup value={radioHandler[0]} onChange={radioHandler[1]}>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='blue' value='1'>
                      Admin
                    </Radio>
                    <Radio colorScheme='green' value='2'>
                      User
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl>
                <Button fontSize="sm" type="submit" bg={mainColor} w="100%" h="45" mb="20px" color="white" mt="20px" _hover={{ bg: "teal.200" }} _active={{ bg: mainColor }}> SIGN IN </Button>
              </FormControl>
            </chakra.form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormLogin;