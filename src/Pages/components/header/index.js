import { Avatar, Box, Button, Flex, Grid, Heading, Text, VStack, Spacer, Icon, Input, InputGroup, InputLeftElement, Select, HStack, Image, CloseButton } from '@chakra-ui/react'
import React from 'react'
import SearchIcon from '../../../assets/icons/searchIcon.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import HomeIcon from  '../../../assets/icons/home.svg'
import AddIcon from  '../../../assets/icons/add.svg'
import LikeIcon from  '../../../assets/icons/loveIcon.svg'
import UserAvatar from '../../../assets/icons/userAvatar.svg'
import ArrowDown from '../../../assets/icons/arrowDown.svg'

function Header() {
  return (
    
        <Box display="flex" border='1px' borderColor='gray.200' h="4rem" width="80%" bgColor="" justifyContent="center"  borderBottom="5px">
            <HStack display="flex" justifyContent="space-around" width="75%">
                <Box width="10%" > <Image width="80%" src ={ Instagram } alt ="tick logo"/> </Box>
                <InputGroup width= "full" h="2rem" variant="filled">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                    /> <Spacer/><Spacer/><Spacer/><Spacer/>
                    <Input width ="full" type='text' placeholder='Search friends' />
                </InputGroup>
                    
            </HStack>

                <HStack width="25%" display="flex" justifyContent="space-between">
                    <HStack>
                        <Image width="20%" src= { HomeIcon } alt="Home Icon"/>
                        <Image width="20%" src= { LikeIcon } alt="Home Icon"/>
                        <Image width="20%" src= { AddIcon } alt="Home Icon"/>
                    </HStack>

                    <Box display="flex" mr="3rem">
                        <Image src= {ArrowDown} alt="User Avatar"/>
                        <Image width="60%" src= {UserAvatar} alt="User Avatar"/>
                    </Box>
                    
                </HStack>
            
        </Box>
    
  )
}

export default Header;
