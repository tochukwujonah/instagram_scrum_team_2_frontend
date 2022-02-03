import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Spacer, Icon, Input, InputGroup, InputLeftElement, Select, HStack, Image, CloseButton } from '@chakra-ui/react'
import React from 'react'
import SearchIcon from '../../../assets/icons/searchIcon.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import HomeIcon from  '../../../assets/icons/home.svg'
import AddIcon from  '../../../assets/icons/add.svg'
import LikeIcon from  '../../../assets/icons/loveIcon.svg'
import UserAvatar from '../../../assets/icons/userAvatar.svg'
import MomentLogo from '../../../assets/icons/moment.svg'
import ArrowDown from '../../../assets/icons/arrowDown.svg'

const Header =()=> {
  return (
    
        <Box maxWidth="1440px" display="flex" borderBottom='1px' borderBottomColor='#E5E5E5' h="4rem" width="100%" borderBottomStyle="solid" justifyContent="center">
            <Flex width="80%" justifyContent="center">

            <HStack display="flex" justifyContent="flex-start" width="65%">
                <Box><Image width="60%" src ={ MomentLogo } alt ="tick logo"/> </Box>
                <InputGroup justifyContent="right" width= "50%" h="2rem" variant="filled">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                    /> <Spacer/><Spacer/><Spacer/><Spacer/>
                    <Input width ="full" type='text' borderRadius="12px" borderColor="#CECECE" placeholder='Search friends' />
                </InputGroup>
                    
            </HStack>

                <HStack width="20%" display="flex" justifyContent="space-between">
                    <HStack>
                        <Image width="20%" src= { HomeIcon } alt="Home Icon"/>
                        <Image width="20%" src= { LikeIcon } alt="Home Icon"/>
                        <Image width="20%" src= { AddIcon } alt="Home Icon"/>
                    </HStack>

                    <Box display="flex" justifyContent="space-between">
                        <Image src= {ArrowDown} alt="User Avatar"/> 
                        <Image width="60%" src= {UserAvatar} alt="User Avatar"/>
                    </Box>
                    
                </HStack>
            </Flex>
            
        </Box>
    
  )
}

export default Header;
