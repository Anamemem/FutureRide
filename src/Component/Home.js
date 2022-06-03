import React from 'react';
import Box from '@mui/material/Box';
import Nav from './Nav'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import '../App.css'

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

                              <Link to='/DriverHome'>

<button className='btn goods'>Sign up to drive </button>
</Link>                             


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
      <Grid container sx={{ minHeight: '100vh' }}  className='bgts'  >
     
      
  
  <Grid item xs={12} md={6} >
  <h1 className='text3 goods'>Ready 
set, <br />
go, in just a few  <br />
quick tap</h1>
<p className='pos goods'>No matter you  Destination , we ‘ll get you  where you need to go</p>
<p className='pos1 goods'>Get a reliable ride in minutes </p> 
<p className='pos1 goods'>Know that your driver is wearing a mask</p>  
<p className='pos1 goods'>Schedule your ride in advance
</p>
<Link to='/login'>

<button className='btn goods' style={{marginTop: '-5px'}}>Get a ride </button>
</Link>                          
  </Grid>
  <Grid item xs={12} md={6} sx={{ display:{xs:'none', md:'flex'}}} >
<img style={{height: '100vh'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653927874/Rectangle_tyc8ls.png' alt='' />
  </Grid>
</Grid>
<Box >
      <Grid container sx={{ minHeight: '100vh', width: '100%'}} >
        <Grid item xs={12} md={7} style={{backgroundColor: '#fff'}} sx={{pt: 5,  minHeight: '100vh' }}  
        >
        <h1 className='text2 goods'>Set your own hours. Earn on your own terms.</h1>

                  <h2 className='tah goods'>Reliable earnings</h2>     
                  <p className='pos goods'>Make money, keep your tips, and cash out when you want</p>  
                  <h2 className='tah goods'>A flexible schedule:</h2>
                  <p className='pos goods'>Be your own Boss and drive whenever it works for you</p> 
                  <h2 className='tah goods'>Get paid instantly</h2>
                  <p className='pos goods'>Cash out your earnings whenever you want</p>     

                  <Link to='/user'>

<button className='btn goods'>Become a driver </button>
</Link>                             
        </Grid>
        <Grid item xs={12} md={5} sx={{ display:{xs:'none', md:'flex'}}} >
        <img  style={{width:'100%'}} className='imgs' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653921105/handsome-elegant-man-car-salon_1157-30215_1_uachny.png' alt='' />  
        </Grid>
      </Grid>
    </Box>
    
 
<Grid container  sx={{ minHeight: '100vh', width: '100%'}} className='bgr ' >
  <Grid xs={12} >
  <Box sx={{ textAlign: 'start', m: 1 }} className='dsl goods'
   style={{fontFamily: 'Poppins, sans-serif',fontWeight:'700'}}><h1>We’ve got options to get you where 
     you’re<br /> going.Choose a ride* that suits your<br />
   mood and budget.  
  </h1></Box>
  </Grid>
        <Grid item xs={12} md={4}sx={{px: 2}}>
  <Link to='/user'>  
        <img className='west' style={{width: '100%'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654005718/Group_1231_kpyh7v.png' alt='' />
  </Link>
        </Grid>
        <Grid item xs={12} md={4} sx={{px: 2}}>
        <Link to='/user'>  
        <img className='west' style={{width: '100%'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653916763/Group_1232_jgtbwy.png' alt='' />
  </Link>
          </Grid>
        <Grid item xs={12} md={4} sx={{px: 2}}>
        <Link to='/user'>
        <img className='west' style={{width: '100%'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653920387/Group_1237_bfwgrv.png ' alt='' />
            </Link>
        </Grid>
           
         
        
      </Grid>
      <Grid container >
        <Grid item xs={12} md={4}   >
<img className='good  company '  src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652704037/Asset_2_2_ipuzv2.png' alt='' />
<p className='good d '>+2348054337851</p>
<p className='good d '  >hello@futureLabs</p>
        </Grid>
        <Grid item xs={12} md={4}  >
          <h2 className='company good'>Company </h2>
          <p className='good d '>home</p>
          <p className='good d ' >about</p>
          <p className='good  d '>service</p>
        </Grid>
        <Grid item xs={12} md={4}  >
          <h2 className='company good'>Lets Get in Touch</h2>
          <p className='good  d '> to receive our news letter</p>
          <input className='in good' type='text' placeholder='enter your email'  /><button className='bq'>Send</button>
        </Grid>
      </Grid>
   
<footer >Futureride 2022</footer>
      
    </div>
  );
}

export default Home;
