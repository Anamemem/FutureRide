import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Nav from '../Component/Nav';
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <>
    <Nav />
    <Grid container  >
    <Grid sx={{  display:{xs:'none', md:'flex'}}} item container    xs={12}  md={6} >
   
   <Grid  sx={{px: 8,  pt: 10 }} style={{backgroundColor: '#103974', height:"100vh", width:'120%'}}>
     
     <img style={{ height: '100%'}}  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653150226/vector-illustration-taxi-service-concept-isometric-3d-composition-cartoon-style-person-with-luggage-standing-near-automobile-smart-phone-with-map-location-sign-call-infographic-elements_165932-1499-re_1.png_om7qjq.png" alt=""/>
    
    
   </Grid>



  



</Grid>
  <Grid  sx={{px:{xs:3,md:10 }}} item container  alignContent="center" xs={12}  md={6}  >
    <Grid item sx={{pt: 5}}>
      <h2 className='dew'>Already have an Account?<Link style={{textDecoration: 'none'}} to='/About'><span style={{color: 'lightblue', cursor: 'pointer'}}>LogIn</span></Link> </h2>
  <h2 className="boys" >
  Join Us!
       </h2>
       <p className="freda">to begin this journey ,what type of <br />
account you’d be opening</p>
 <Link style={{textDecoration: 'none'}} to='/default'>

<List 
      sx={{    width: '90%',  maxWidth: 460 }} 
      style={{backgroundColor: '#080718', color: 'white', cursor: 'pointer'}}
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

 <Link style={{textDecoration: 'none'}} to='/default'>

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
 
 
       
       
          


        
         
       
    </Grid>
   
        
 </Grid>

     </Grid>
</>
  );
}

export default Signup;
