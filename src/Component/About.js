// import "./login.css";
import { TextField, Button,CircularProgress, Alert } from "@mui/material";
import { useState } from 'react';
import { Grid, Box } from '@mui/material/';
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
          navigate('/user/')
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
 
<Grid container  sx={{ minHeight: '100vh' }} className='logs' >
<Grid item xs={12} sx={{  pt: 15,}}>
<Box
        sx={{
          mx: 'auto',
          width: 300,
          height: 320,
          p: 5,
        
          background: 'white'
         }}>
           <h2>Login</h2>
           <div className="sew"></div>
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
            
             InputProps={{
             endAdornment:
               <InputAdornment position="end">
                <Button onClick={showPassword}> Show </Button>
               </InputAdornment>,
           }}
           /> 
          
           </form>

                          {loading ? <div className="text-center"> <CircularProgress color="primary" /></div> : <Button onClick={submit} type="submit"  style={{ textDecoration: 'none', 
                           width: '305px', height: '60px', backgroundColor: '#103974',color: 'white' }}>Sign In</Button>}
           

   </Box>
</Grid>

   

       
          
           
          

         
        
        
      </Grid>
    
    </div>
  )
}