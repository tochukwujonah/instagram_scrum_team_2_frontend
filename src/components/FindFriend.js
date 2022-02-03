import React, { useState } from 'react';
import { Avatar, Box, Button, Flex, Grid, Heading, Text, ModalBody, ModalFooter, ModalContent, ModalOverlay, ModalCloseButton, Modal, ModalHeader,  VStack, Spacer, Icon, Input, InputGroup, InputLeftElement, Select, HStack, Image, CloseButton } from '@chakra-ui/react'
import GregAvatar from '../assets/icons/GregAvatar.svg'
import ZeusAvatar from '../assets/icons/ZeusAvatar.svg'
import PasquaAvatar from '../assets/icons/PasquaAvatar.svg'
import FileUploader from '../assets/icons/uploadIcon.svg'


const FindFriend =()=> {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const onClose = ()=> setModalIsOpen(false);

  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={modalIsOpen} size="lg">
                <ModalOverlay />
                <br /><br />
                <ModalContent>
                    <ModalHeader  borderBottom="1px" borderBottomColor="#e5e5e5" borderBottomStyle="solid">Find Friend</ModalHeader>
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
  );
}

export default FindFriend;
