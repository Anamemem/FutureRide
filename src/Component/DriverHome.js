import React from 'react';
import Box from '@mui/material/Box';
import Nav from './Nav'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import '../App.css'

export default function DriverHome() {
  return (
    <div>
         <Nav />
    
       <Box sx={{width: '100%'}}>
      <Grid container >
        <Grid item xs={12} md={6} style={{backgroundColor: '#103974'}} sx={{pt: 18,  minHeight: '100vh' }}  
        >
        <h2 className='text goods'> Make Everyday   <br />Payment        
                               </h2>

                              <Link to='/user'>

<button className='btn goods'>Sign up to drive </button>
</Link>                             


        </Grid>
        <Grid item xs={12} md={6} sx={{ display:{xs:'none', md:'flex'}}} >
        <img className='imgs' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654007587/handsome-elegant-man-car-salon_1157-30191_1_cabiic.png' alt='' />  
        </Grid>
      </Grid>
    </Box>


    <Grid container  style={{backgroundColor:'#EFEEFF',textAlign:'center',alignItems:'center'}} >
        <Grid item xs={12} md={6}>
            <img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654007883/white-hatchback-car-isolated-white-vector_53876-67399-removebg-preview_1_pl6mdg.png' alt='' />
        </Grid>
    <Grid item xs={12} md={6} >
        <h2 className='car'>No car? No problem</h2>
        <p className='vow'>You don’t even need a car of your own
         to drive<br /> with Futureride. Rent worry-free with Express Drive,<br />
             we’ll take care of insurance, standard and<br /> preventative maintenance, and roadside assistance.</p>
    </Grid>
    </Grid>
 
   
<Grid container className='con'>
    <Grid item xs={12} md={3}>

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
  )
}
