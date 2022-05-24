/*
Input yang diperlukan
1. name
2. provinsi
3. kecamatan
4. kelurahan
5. jumlah_volume
6. raw_products
*/

import React, {useState}  from 'react'; 
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