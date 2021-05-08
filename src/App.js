import React from 'react';
import AppBar from './AppBar.js';
import NavBar from './NavBar.js';
import Box from '@material-ui/core/Box';

export default function App() {

  return (
    <Box component="span" m={1}>
      <AppBar />
      <NavBar />
    </Box>
  );
}
