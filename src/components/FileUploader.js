import { Image, VStack, Text } from '@chakra-ui/react'
import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import UploadIcon from '../assets/icons/uploadIcon.svg'


const Button = styled.button`
  /* Insert your favorite CSS code to style a button */
`;
        const FileUploader = props => {
        const hiddenFileInput = React.useRef(null);
        
        const handleClick = event => {
          hiddenFileInput.current.click();
        };
        const handleChange = event => {
          const fileUploaded = event.target.files[0];
          props.handleFile(fileUploaded);
        };
        return (
          <VStack justifyContent="center">
            <Image src={ UploadIcon } alt="image upload placeholder"/>
            <Button mr="auto" ml="auto" style= {{color:"#00B4DB", fontSize:"10px"}} onClick={handleClick}>
              Click to add an image
            </Button>
            <input type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{display:'none'}} 
            /> 
          </VStack>
        );
      };
export default FileUploader;