// import "./login.css";
import { TextField, Button,CircularProgress, Alert } from "@mui/material";
import { useState } from 'react';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Nav from '../Component/Nav'
import InputAdornment from '@mui/material/InputAdornment';
import { useAuth } from "../context/auth";

import { useNavigate } from "react-router";

import "../App.css"







export default function About(props) {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState(false)
  const { login } = useAuth()

  const navigate = useNavigate()



  const submit = async function (e) {
    setError('')
    if (data.email  && data.password) {
      setLoading(true);
      await login(data)
        .then(() => {
          navigate('/map')
        })
        .catch(e => {
          setError(e.message)
        }).finally(()=>{
           setLoading(false)
        })
    } else {
      setError('input All fields')
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const showPassword = (e)=>{
    console.log('password change---> ',password)
    setPassword(!password)
  }


  return (
    <div>
<Nav />
 
    <Grid container  >
      
    <Grid sx={{  display:{xs:'none', md:'flex'}}} item container    xs={12}  md={6} >
   
   <Grid  sx={{px: 8,  pt: 10 }} style={{ height:"100vh", width:'120%'}}>
  
     
     <img style={{ height: '100%'}}  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653308496/online-booking-concept-laptop-with-bus-tickets-white-background_476612-12604-removebg-preview_1_bhtssj.png
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
   
   
       
<form onSubmit={submit}>
      {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}
   
<TextField
             id="filled-full-width"
             label="Email Adress"
             name="email"
             onChange={handleChange}
             fullWidth
             margin="normal"
             variant="filled"
           />
            
           <TextField
             id="filled-full-width standard-adornment-password"
             label="Password"
             name="password"
             onChange={handleChange}
             fullWidth
             type={ password ? 'text' : 'password' }
             autoComplete="current-password"
             margin="normal"
             variant="filled"
             InputProps={{
             endAdornment:
               <InputAdornment position="end">
                <Button onClick={showPassword}> Show </Button>
               </InputAdornment>,
           }}
           /> 
          
           </form>
         
      </Grid>
      <Grid container
             justifyContent="space-evenly"
             alignItems="center" item xs={12} sx={{ mt: 5, }} spacing={1}>
                          {loading ? <div className="text-center"> <CircularProgress color="primary" /></div> : <Button onClick={submit} type="submit"  style={{ textDecoration: 'none', 
                           width: '370px', height: '60px', backgroundColor: '#262626',color: 'white' }}>Sign In</Button>}
           
           </Grid>
           
          
   </Grid>
         
   
   
       
       </Grid>
    </div>
  )
}