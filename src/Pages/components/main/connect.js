import { Avatar, Box, Button, Flex, Grid, Heading, Text, ModalBody, ModalFooter, ModalContent, ModalOverlay, ModalCloseButton, Modal, ModalHeader,  VStack, Spacer, Icon, Input, InputGroup, InputLeftElement, Select, HStack, Image, CloseButton } from '@chakra-ui/react'
import React, { useState } from 'react';
import GregAvatar from '../../../assets/icons/GregAvatar.svg'
import ZeusAvatar from '../../../assets/icons/ZeusAvatar.svg'
import PasquaAvatar from '../../../assets/icons/PasquaAvatar.svg'
import FileUploader from '../../../components/FileUploader';

const Connect =()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const onClose = ()=> setModalIsOpen(false);
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
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
                    <Button borderRadius="6px" border="0" padding="1rem" color="#fff" fontWeight="400" bgColor="#00B4DB">Find Friends</Button>
                    <Button borderRadius="6px" padding="1rem" borderColor="#00B4DB" color="#00B4DB" fontWeight="400" colorScheme='teal' bgColor="#fff" 
                     variant='outline' cursor="pointer" onClick={()=> setModalIsOpen(true)}>Create Post</Button>
                </HStack>
            </Box>
            
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
            </Modal>
        </Box>  
    )
}


export default Connect;
