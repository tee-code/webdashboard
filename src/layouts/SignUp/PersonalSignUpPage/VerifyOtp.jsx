import {
    Center,
    Button,
    Box,
    Stack,
    Image,
    Text,
    PinInput, PinInputField,HStack
  } from '@chakra-ui/react'
  import logo from '../../../assets/Logomark.png'
import { useColorModeValue } from "@chakra-ui/color-mode";
import { verifyNumberSms } from '../../../ReduxContianer/PersonalRedux/PersonalAction';
import {useDispatch} from 'react-redux'
import Countdown from "react-countdown";
import {useHistory,Redirect} from 'react-router-dom'

export default function VerifyOtp() {
    const yellowbtn = useColorModeValue('yellow.500')
   
    const dispatch = useDispatch()
    // const history = useHistory()

    
    function handleClick(){
      dispatch(verifyNumberSms(localStorage.getItem('phoneNumber')))
 }
 


  const renderer = ({minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    } 
  };



    return (
       
        <Box maxW='lg' p='50' m='36'  boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' borderRadius='lg' overflow='hidden'>
           <Center>
        <Stack>
        <Image mt='35' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px'  p='25' fontWeight='bold' lineHeight='5'>Enter OTP</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='2'>
             <Text align ='center'
             color='gray'
             >Enter the OTP sent to your phone number</Text>
           </Stack>
         </Center>
         
               <Center>
               <HStack mt='8'>
              <PinInput size='lg' otp>
                 <PinInputField  />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                   </PinInput>
                   </HStack>
               </Center>
      
                 <HStack pt='9' direction='row' color='gray'>
                 <Text>Resend SMS</Text>
                 <Stack>
                    <Countdown date={Date.now() + 25000} renderer={renderer} autoStart/>
                    </Stack>
                   </HStack>
             <HStack direction='row'>
            <Center>
              <Button
                  mr={6}
                  mt={4}
                  bg={yellowbtn}
                  width='150px' h='90px' 
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                  onClick={handleClick}
                >
                  Send SMS
                </Button>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='150px' h='90px' 
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Verify Number
                </Button>
              </Center>
            </HStack>
        </Box>
    );
}

