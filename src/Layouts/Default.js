import React from 'react';
import { useState } from 'react';
import { TextField,  Button, Alert, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Nav from '../Component/Nav'
import InputAdornment from '@mui/material/InputAdornment';
import { useAuth } from "../context/auth";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom'

import "../App.css"




function DefaultLayout() {
 
  const [data, setData] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState(false)
  const { signup } = useAuth()

  const navigate = useNavigate()


  const submit = async function (e) {
    e.preventDefault()
    setError('')
    if (data.phone && data.email && data.fullname && data.password) {
      setLoading(true);
      data.type=0
      await signup(data)
        .then(() => {
          navigate('/About')
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

           <h2>Signup for a new account</h2>
          
           <form onSubmit={submit}>
      {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}
            <Grid container spacing={2}>

            <Grid item xs={6}>
             <TextField
              fullWidth 
              margin="normal"
              label="Full name" id="fullWidth"
              name="fullname"
              onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
             <TextField
              fullWidth 
              margin="normal"
              label="Last Name" id="fullWidth"
              name="fullname"
              onChange={handleChange} />
              </Grid>
       
            </Grid>
                        <TextField
          id="filled-full-width"
          label="Phone "
          name="phone"
          fullWidth
          onChange={handleChange}
          margin="normal"
        
        />
                        <TextField
          id="filled-full-width"
          name="email"
          label="Email Address"
          fullWidth
          onChange={handleChange}
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
                           width: '400px', height: '60px', backgroundColor: '#103974',color: 'white' }}>Register Account</Button>}
   </Box>
</Grid>

   

       
          
           
          

         
        
        
      </Grid>
             </div>
  );
}

export default DefaultLayout;
