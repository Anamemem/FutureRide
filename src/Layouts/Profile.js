import React from 'react'
import Nav from '../Component/Nav'
import Grid from '@mui/material/Grid';
import  TextField from "@mui/material/TextField";

export default function Profile() {
  return (
    <div>
    <Nav />
     
        <Grid container  >
          
        <Grid sx={{  display:{xs:'none', md:'flex'}}} item container    xs={12}  md={6} >
       
       <Grid  sx={{  pt: 10 }} style={{ height:"100vh", width:'100%'}}>
      
            
         <img style={{ height: '100%'}}  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653389111/online-booking-concept-consumer-holds-phone-hand-with-application-rental-housing-vector-illustration-flat-design-isolated-white-background_153097-2360-removebg-preview_1_cvfw0p.png
    " alt=""/>
              
           
       </Grid>
    
    
    
      
    
    
    
    </Grid>
        <Grid  sx={{px:{xs:3,md:20, backgroundColor: 'whitesmoke',minHeight: '100vh' }}} item container  alignContent="center" xs={12}  md={6}
          >
          <Grid item > 
        
        
        <h2 className="boy" >
        Register individual Account
             </h2>
             <p className="fred">For the purpose of regulation,your details <br />
    are require</p>
       
       
          
       
       
             
             <TextField
              fullWidth 
              margin="normal"
              label="Email" id="fullWidth" />
                 
    
             
    
              
               
             
          </Grid>
          <Grid container
                 justifyContent="space-evenly"
                 alignItems="center" item xs={12} sx={{ mt: 5, }} spacing={1}>
                 
                 <button className="buttons" >Log In</button>
               </Grid>
               
              
       </Grid>
             
       
       
           
           </Grid>
        </div>
    
  )
}
