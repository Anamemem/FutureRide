import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

export default function Nav() {
  return (
    <Box >
      <AppBar>
        <Toolbar style={{backgroundColor: '#FFFFFF'}} >


          
          <Typography variant="h6" sx={{mx: -1}}  component="div">
            <img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652704037/Asset_2_2_ipuzv2.png' alt='' />
          </Typography>
       
        </Toolbar>
      
      </AppBar>
      
    </Box>
  );
}
