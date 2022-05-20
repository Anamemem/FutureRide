// import "./login.css";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

import "../App.css"







export default function About(props) {


 



  


  return (
    <Grid container sx={{ minHeight: '100vh' }} >
      <Grid sx={{px:2, py:5,  display:{xs:'none', md:'flex'}}} item container  alignContent="center" justifyContent="space-evenly" direction="column" xs={12}  md={6} >
     
     <Grid style={{height: "100vh"}} >
       
       <img src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1652711325/online-booking-concept-laptop-with-bus-tickets-white-background_476612-12604-removebg-preview_1_y6v7po.png" alt=""/>
      
      
     </Grid>



    



</Grid>
    <Grid  sx={{px:{xs:3,md:20,minHeight: '100vh' }, py:1}} item container  alignContent="center" xs={12}  md={6}  >
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
             

             <TextField
          fullWidth 
          margin="normal"
          label="password" id="fullWidth" />
            


          
           
         
      </Grid>
      <Grid container
             justifyContent="space-evenly"
             alignItems="center" item xs={12} sx={{ mt: 5, }} spacing={4}>
             
             <button className="buttons" >Log In</button>
           </Grid>
           
          
   </Grid>
         
   
   
       
       </Grid>
  )
}