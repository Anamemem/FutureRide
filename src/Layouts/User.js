import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box'
import Nav from '../Component/Nav';
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <>
    <Nav />
    <Grid container  sx={{ minHeight: '100vh' }} className='logs1' >
<Grid item xs={12} sx={{  pt: 9,}}>
<Box
        sx={{
          mx: 'auto',
          width: 400,
          height: 470,
          p: 5,
        
          background: 'white'
         }}>
 
  <p className="boys" >
  Join Us!
       </p>
       <p className="freda">to begin this journey ,what type of <br />
account you’d be opening</p>
<Link style={{textDecoration: 'none'}} to='/signup'>

<List 
      sx={{    width: '90%',  maxWidth: 460 }} 
      style={{backgroundColor: '#103974', color: 'white', cursor: 'pointer'}}
    >
      <ListItem >
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653305460/Group_1218_s4lpvr.png" alt="" />
        </ListItemAvatar>
        <ListItemText  sx={{px: 2, color: 'light'}}  primary="personal account to manage all 
you activities as a user" />
      </ListItem>
      </List>
 </Link>


 <Link style={{textDecoration: 'none'}} to='/signup'>

      <List
      sx={{    width: '90%',  maxWidth: 460 ,mt: 5}} 
      style={{backgroundColor: 'white', color: 'black', border: '1px solid #68A1AE', cursor: 'pointer'}}
      >
      <ListItem >
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653306042/Group_1219_sldn6z.png" alt="" />
        </ListItemAvatar>
        <ListItemText  sx={{px: 2}}  primary="personal account to manage all 
you activities as a Transend driver" />
      </ListItem>
      </List>
</Link>     


        
         
       
    </Box>
   
        
 </Grid>

     </Grid>
</>
  );
}

export default Signup;
