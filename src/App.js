import React from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Grid,
  GridItem,
  theme,
} from '@chakra-ui/react';

import ChatBox from './ChatBox';
import SideBar from './SideBar';
import Messages from './Messages';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const [data, setData] = React.useState([])
  const handleChange = (e) => setData([e.target.value, ...data])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container maxWidth="120ch">
            <Box borderRadius="lg" overflow="hidden">
              <Grid
                height="90vh"
                templateRows="repeat(8, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={8} colSpan={1} bg="tomato" >
                  <SideBar />
                </GridItem>
                <GridItem rowSpan={7} colSpan={4} bg="papayawhip">
                  <Messages data={data} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={4}>
                  <ChatBox handleChange={handleChange} />
                </GridItem>
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
