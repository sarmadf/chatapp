import React, {useState} from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react';

function ChatBox({handleChange}) {
  return (
    <Box w="100%" h="100%" bg="papayawhip">
      <InputGroup>
        <Input
          pr="4.5rem"
          placeholder="Enter password"
          border="2px"
          borderColor="black"
          placeholder="Message"
          onChange={handleChange}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" colorScheme="teal">
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default ChatBox;