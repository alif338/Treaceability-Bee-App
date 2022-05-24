/*
Input yang diperlukan
1. jumlah (dalam liter)
2. sumber stup (list dari id-stup)
3. warna (string)
4. rasa (string)
5. Tanggal Panen

Otomatis terisi:
1. no_batch (integer)
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