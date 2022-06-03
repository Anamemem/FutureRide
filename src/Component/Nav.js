import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';





export default function Nav() {
  return (
    <Box  >
      <AppBar>
        <Toolbar style={{backgroundColor: '#FFFFFF'}} >

<Grid container >
  <Grid item xs={12} md={2} >

          <Link to='/'>
          <Typography variant="h6" component="div">
            <img className='good5'    src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652704037/Asset_2_2_ipuzv2.png' alt='' />
          </Typography>

          </Link>
  </Grid>
  <Grid  item xs={12} md={10}   >
 

</Grid>
</Grid>
          
         

        </Toolbar>
      
      </AppBar>
      
    </Box>
  );
}
