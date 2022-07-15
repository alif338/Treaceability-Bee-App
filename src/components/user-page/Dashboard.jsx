import React, {useState, useEffect, useRef} from 'react';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import getFromDb from '../../services/getFromDb';
import AirbnbExample from "./Card";

const ProductAll = (props) => {
  const [productList, setProductList] = useState([]);
  const {state} = props;


  return (
    <SimpleGrid minChildWidth='240px' spacing='40px'>
      {productList.map((e) => {
        return (< AirbnbExample/>);
      })}
    </SimpleGrid>
  )
}

export default function UserDashboard() {
  const navigate = useNavigate();
  const [state, setStates] = useState(null);
  const [productList, setProductList] = useState([]);
  const [stupList, setStupList] = useState([]);
  // const stupList = useRef([]);

  useEffect(() => {
    getFromDb('state').then((value) => {
      // console.log(value[0]);
      getProducts(value[0]);
    })
  }, [])

  const getProducts = (data) => {
    console.log(data);
    console.log(data.stups);
    // stupList.current = data.stups;
    setStupList(data.stups);
    const result = [...productList];
    data.peternaks.forEach((item) => {
    	const idx = item.id;
    	item.products_raw.forEach((product) => {
    		const itemProd = {
    		...product,
    		"product_id": `${idx}-${product.no_batch}`,
        "nama_peternak": item.name
    		};
    		result.push(itemProd);
    	})
    })
    setProductList(result);
    console.log(result);
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text as='b' fontSize='2xl'>Product List</Text>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate("/")}>
                  Log Out
								</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={10} pb={4}>
        <SimpleGrid minChildWidth='240px' spacing='40px'>
          { productList.map((e) => {
            console.log("ini StupList", stupList)
            return (< AirbnbExample data={e} stup_list={stupList}/>);
          })}
        </SimpleGrid>
      </Box>
    </>
  )
}