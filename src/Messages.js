import React from 'react';
import {
  Box
} from '@chakra-ui/react';

const Messages = ({data}) => {
  if (!data.length) {
    return null;
  }

  return (
    <Box>
      {data.map((message, id) => <h1 id={id} style={{color: 'black'}}>{message}</h1>)}
    </Box>
  )
}

export default Messages;