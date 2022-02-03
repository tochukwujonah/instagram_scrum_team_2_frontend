import { Avatar, Box, Button, Flex, Grid, Heading, Text, ModalBody, ModalFooter, ModalContent, ModalOverlay, ModalCloseButton, Modal, ModalHeader,  VStack, Spacer, Icon, Input, InputGroup, InputLeftElement, Select, HStack, Image, CloseButton } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import GregAvatar from '../../../assets/icons/GregAvatar.svg'
import ZeusAvatar from '../../../assets/icons/ZeusAvatar.svg'
import PasquaAvatar from '../../../assets/icons/PasquaAvatar.svg'
import FileUploader from '../../../components/FileUploader';
import SearchIcon from '../../../assets/icons/searchIcon.svg'
// import FindFriend from '../../../components/FindFriend';

const Connect =()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [FmodalIsOpen, setFmodalIsOpen] = useState(false)
    const onClose = ()=> setModalIsOpen(false);
    const onFClose = ()=> setFmodalIsOpen(false);
     const [switchActive, setSwitchActive] = useState(false)
    const handleClick = (e) =>{
        // alert('cliked')
        const {target} = e
        if(target.id === 'createpost'){
            setFmodalIsOpen(false)
            setModalIsOpen(true)
            setSwitchActive(true)
            
        }else if(target.id === 'findfriend'){
            // alert(target.id)
            setModalIsOpen(false)
            setSwitchActive(false)
            setFmodalIsOpen(true)
        }
        // setModalIsOpen(true)
    }
    
    // useEffect(()=>{
    //   alert(modalIsOpen)
    // },[modalIsOpen])
    
  return (
        <Box display="flex" flexDirection="column" alignSelf="start" h="3rem">
            <HStack position='relative' mt="2rem" ml="14rem" height={'100%'} width="20%">
                <HStack display="flex" height={'100%'} justifyContent="left" width="50%" position='relative' position="relative" >
                    <Image position="absolute" right='%'src ={GregAvatar} top="%" alt="Avatar of our man greg"/>
                    <Image position="absolute" right="%" zIndex="30" top="%" src ={ZeusAvatar} alt="Avatar of our man greg"/>
                    <Image zIndex="40" position="absolute" right="59%" top="%" src ={PasquaAvatar} alt="Avatar of our man greg"/>
                </HStack>
                <Text fontWeight="bold" position="absolute" left="25%" top="%" fontSize="0.7rem">+22 Active Friends</Text>
            </HStack>

            <Box display="flex" ml="9.7rem" mt="2rem" maxWidth="50%" justifyContent="center">
                <HStack width="80%" justifyContent="space-between">
                    <Button borderRadius="6px" border="0" padding="1rem" color="#fff" fontWeight="400" 
                    bgColor="#00B4DB" cursor="pointer" id='findfriend' onClick={handleClick}>Find Friends</Button>

                    <Button borderRadius="6px" padding="1rem" borderColor="#00B4DB" color="#00B4DB" fontWeight="400" colorScheme='teal' bgColor="#fff" 
                     variant='outline' cursor="pointer" id='createpost' onClick={handleClick}>Create Post</Button>
                </HStack>
            </Box>
            {
                switchActive ?
                <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={modalIsOpen} size="lg">
                <ModalOverlay />
                <br /><br />
                <ModalContent>
                    <ModalHeader  borderBottom="1px" borderBottomColor="#e5e5e5" borderBottomStyle="solid">Create a post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody padding="0.6rem">
                       <HStack>
                            <Image src={ ZeusAvatar } alt="Zeus"/>
                            <Text fontSize="10px" fontWeight="500">bryantrace_</Text>
                       </HStack>
                       <Box mt="1rem">
                            <Input h="4rem" variant='filled' placeholder='Type caption here' />
                       </Box>

                      <Box padding="1.2rem" mt="1rem" border="2px" borderColor="#BCBCBC" borderRadius="10px" borderStyle="solid" >
                            <FileUploader/>
                      </Box>

                      <Button mt="1rem" fontSize="12px" w="full">Post</Button>
                            
                       
                        
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
            </ModalContent>
            </Modal> :
             <Modal motionPreset="slideInBottom" onClose={onFClose} isOpen={FmodalIsOpen} size="lg">
             <ModalOverlay />
             <br /><br />
             <ModalContent>
                 <ModalHeader  borderBottom="1px" borderBottomColor="#e5e5e5" borderBottomStyle="solid">Find Friends</ModalHeader>
                 <ModalCloseButton />
                 <ModalBody padding="0.6rem">

                        <InputGroup justifyContent="right" width= "100%" h="2rem" variant="filled">
                            <InputLeftElement
                            pointerEvents='none'
                            children={<Image src={ SearchIcon } alt="Search Icon" color='gray.300' />}
                            /> <Spacer/><Spacer/><Spacer/><Spacer/>
                            <Input width ="full" type='text' borderRadius="12px" borderColor="#CECECE" placeholder='Search friends' />
                        </InputGroup>
                       
                        <HStack mt="2rem">
                                <Image src={ ZeusAvatar } alt="Zeus"/>
                                <HStack justifyContent="space-between">
                                    <VStack mt="1rem">
                                    <Text fontSize="10px" fontWeight="500">bryantrace_</Text>
                                    <Text fontSize="10px" fontWeight="200">New to moment</Text>
                                    </VStack>

                                    <Box color="#00A3FF">
                                        + Follow
                                    </Box>
                                </HStack>
                               
                                
                        </HStack>
                        
                        <Button mt="1rem" fontSize="12px" w="full">Post</Button>
                                
                        
                            
                 </ModalBody>

                 {/* <ModalFooter>
                     <Button colorScheme='blue' mr={3} onClick={onClose}>
                     Close
                     </Button>
                     <Button variant='ghost'>Secondary Action</Button>
                 </ModalFooter> */}
         </ModalContent>
             </Modal>
            }
            
            
        </Box>  
    )
}

// const FindFriend=({findClose, findIsOpen})=>{

//     const [findIsOn, setFindIsOn] = useState(false);
//     const findClose = ()=> setFindIsOpen(false);
//     const handleFindIsOpen = ()=> setFindIsOpen (< FindFriend/>) 
//     return(
          
//     )
// }


export default Connect;
