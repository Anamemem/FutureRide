import React from 'react';
import Box from '@mui/material/Box';
import Nav from './Nav'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import '../App.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Driver from '../Layouts/Driver';


function Home() {
  return (
    <div>
      <Nav />
      <Driver />
       <Box sx={{width: '100%'}}>
      <Grid container >
        <Grid item xs={12} md={6} style={{backgroundColor: '#103974'}} sx={{pt: 18,  minHeight: '100vh' }}  
        >
        <h2 className='text goods'>Providing A   <br />Professional &<br />
        
                              Relaible Service</h2>

                              <p className='d goods'>Download the App</p>
                             

<img className='rude goods' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652704848/download-removebg-preview_1_fnwpd5.png' alt='' />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display:{xs:'none', md:'flex'}}} >
        <img className='imgs' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652957884/smiley-woman-talking-phone-backseat-car-while-having-coffee_23-2148685302_1_igtozb.png' alt='' />  
        </Grid>
      </Grid>
    </Box>
    
 
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className='goods' style={{textAlign: 'center'}}>
    <Grid  item xs={12} md={4} >
    <h1>625+</h1>
    <p>city in 1 country</p>
 
    </Grid>
    <Grid  item xs={12} md={4}>
    <h1>1bn</h1>
    <p>Rides</p>
 
    </Grid>
    <Grid  item xs={12} md={4}>
    <h1>100M</h1>
    <p>Users</p>
 
    </Grid>
            
      </Box>


<Grid container sx={{ minHeight: '100vh' }}  className='bgt'  alignItems="center" justifyContent= "center">

  <Grid  item xs={12} md={4}sx={{px: 10, mt: 15, mb: 23}} style={{textAlign: 'center'}}>
 
<img  className='responsive' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652973050/Group_1210_uivyny.png' alt='' />
         <h2 className='pat'  style={{marginTop: '-50px'}}>Offer your fare</h2>
         <p className='de' >With Transend, you are the one who decides on how much to pay for 
           your ride. Specify a fair price 
           for your route, get offers from drivers and start saving on rides!</p>
  
         
  </Grid>
  <Grid  item xs={12} md={4}sx={{px: 5, mt: -15}} style={{textAlign: 'center'}}>

       

 <img className='responsive' style={{marginTop: '-40px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652973194/Group_1211_hz2ydu.png' alt='' />
        <h1 className='pat'style={{marginTop: '60px'}} >Freedom of choice</h1>
        <p className='de'>Select the best offers from drivers in terms <br />
        of the price, vehicle brand and estimated arrival time. Experience true freedom.</p>
  </Grid>
  <Grid item xs={12} md={4} sx={{px: 9}} style={{textAlign: 'center'}}>


  <img className='responsive' style={{marginTop: '80px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652973003/Group_1212_vcncmk.png' alt='' />
       <h2 className='pat' style={{marginTop: '7px'}} >Know  your driver </h2>
       <p className='de'>Transend, always shows you the rating of each driver who responds.
          It also shows you the number of previous trips which they completed.
           You are the one who chooses the driver for your rides. You can even share your 
         ride info and current location directly on the app. You are in control.</p>
  </Grid>
</Grid>

<Grid container  sx={{ minHeight: '60vh' }} style={{backgroundColor: '#103974'}} >
<Grid item xs={12} md={6} sx={{ display:{xs:'none', md:'flex'}}}>
          <img style={{width: '743.25px', marginTop: '-200px'}} src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652970256/Group_1209_apeuxi.png" alt="" /> 

        </Grid>

        <Grid item xs={12} md={6} >
           <h1 className='text1'>Get a ride in minutes</h1>
          <p className='ds' style={{marginTop: "-25px"}}>Pick your destination , request a <br />ride,meet your driver ,enjoy the<br /> journey</p>


        </Grid>
        
        
      </Grid>
      <Grid container sx={{ minHeight: '100vh' }}  className='bgt'  >
     
      
  <Grid  item xs={12}>
  <Box sx={{ textAlign: 'center', m: 1 }} style={{fontFamily: 'Poppins, sans-serif'}}><h1>How does it work?</h1></Box>

  <List
      sx={{    width: '100%',  maxWidth: 460 }} 
    >
      <ListItem className='goods'>
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652963335/Group_1201_k7t4zp.png" alt="" />
        </ListItemAvatar>
        <ListItemText sx={{px: 2}} primary="Save on Rides" secondary="With inDriver, you can book rides way cheaper! Say no to compulsory rates and high-demand manipulations." />
      </ListItem>
      </List>
      <List
      sx={{    width: '100%',  maxWidth: 460 }}
    >
      <ListItem className='goods'>
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652964267/Group_1204_ulemab.png" alt="" />
        </ListItemAvatar>
        <ListItemText sx={{px: 2}} primary="Offer your own price" secondary="specify the route and a fair price that you are ready to pay" />
      </ListItem>
      </List>
      <List
      sx={{    width: '100%',  maxWidth: 460 }}
    >
      <ListItem className='goods'>
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652965731/Group_1206_bnztvk.png" alt="" />
        </ListItemAvatar>
        <ListItemText sx={{px: 2}} primary="Select the best driver offers" secondary="View all the offers that you receive and select the one that suits you best in terms of the price, 
        vehicle brand, estimated arrival time and driver rating." />
      </ListItem>
      </List>
      <List
      sx={{    width: '100%',  maxWidth: 460 }}
    >
      <ListItem className='goods'>
        <ListItemAvatar>
          <img  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652966006/Group_1208_yyrxgt.png" alt="" />
        </ListItemAvatar>
        <ListItemText sx={{px: 2}} primary="Average vehicles arrival time: 5 minutes" secondary="We will show your driver's your current location on the map" />
      </ListItem>
      </List>
  </Grid>
</Grid>
<Grid container sx={{ minHeight: '100vh' }}    alignItems="center" justifyContent= "center">

  <Grid  item xs={12} md={4}sx={{px: 8,mt: 15}} style={{textAlign: 'center'}}>
 
<img  className='responsive' style={{marginTop: '-60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653000232/Group_1213_p9meep.png' alt='' />
         <h2 className='pat' style={{marginTop: '80px'}} >Offer your own price</h2>
         <p className='de' >Our service payments are always lower than 
         those of our competitors, averaging at just 9.5%</p>
  
         
  </Grid>
  <Grid  item xs={12} md={4}sx={{px: 2}} style={{textAlign: 'center'}}>

       

 <img  className='responsive' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653000244/Group_1203_p3yexm.png' alt='' />
        <h1 className='pat' >accept requests that make money</h1>
        <p className='de'>Select the best offers from drivers in terms <br />
        of the price, vehicle brand and estimated arrival time. Experience true freedom.</p>
  </Grid>
  <Grid item xs={12} md={4} sx={{mt: -5}} style={{textAlign: 'center'}}>


  <img className='responsive pro' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653000261/Group_1202_t2wkrh.png' alt='' />
       <h2 className='pat bra' style={{marginTop: '-90px'}}>No middlemen</h2>
       <p className='de '>Get paid directly by passengers at the end of their rides. 
       There's no need to wait for payments anymore.</p>
  </Grid>
</Grid>
<Box sx={{ width: '85%',  
          mx: 'auto',
          mb: 10
           }}>
<Grid container  sx={{ minHeight: '65vh'}} className='bgr ' >
        <Grid item xs={12} md={12} style={{textAlign: 'center'}} >
        
           <h1 className='text' style={{fontWeight: 'bold'}}>Eazy Register </h1>
          <p className='dsl' style={{marginTop: "-25px"}}>Complete a simple online registration and get
           access to ride requests that will make you<br /> money within a day.</p>
<Link to='/user'>

<button className='btn'>Become a driver</button>
</Link>
        </Grid>


        
        
      </Grid>
   </Box>


    </div>
  );
}

export default Home;
