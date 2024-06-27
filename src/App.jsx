import React from 'react';
import Tree from './components/Tree';
import data from './data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const App = () => (
    <Container maxWidth="xl">
        <Box>
            <Typography variant="h1" gutterBottom>
                Checkbox Tree
            </Typography>
            <Tree data={data} />
        </Box>
    </Container>
);

export default App;
