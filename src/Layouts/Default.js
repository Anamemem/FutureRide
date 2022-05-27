import React from 'react';
import { useState } from 'react';
import { TextField,  Button, Alert } from "@mui/material";
import Grid from '@mui/material/Grid';
import Nav from '../Component/Nav'
import InputAdornment from '@mui/material/InputAdornment';
import { useAuth } from "../context/auth";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router";


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
     
        <Grid container  >
          
        <Grid sx={{  display:{xs:'none', md:'flex'}}} item container    xs={12}  md={6} >
       
       <Grid  sx={{px: 8,  pt: 10 }} style={{ height:"100vh", width:'120%'}}>
      
         
         <img style={{ height: '100%'}}  src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1653315118/undraw_joyride_re_968t_1_pb6otf.png
    " alt=""/>
        
        
       </Grid>
    
    
    
      
    
    
    
    </Grid>
        <Grid  sx={{px:{xs:3,md:20, backgroundColor: 'whitesmoke',minHeight: '100vh' }}} item container  alignContent="center" xs={12}  md={6}
          >
          <Grid item > 
        
        
      
             <p className="fred">For the purpose of regulation,your details <br />
    are require</p>
       
       
    <form onSubmit={submit}>
      {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}
       
       
             
             <TextField
              fullWidth 
              margin="normal"
              label="Full name" id="fullWidth"
              name="fullname"
              onChange={handleChange} />
                        
       
       
       
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
          </Grid>
          <Grid container
                 justifyContent="space-evenly"
                 alignItems="center" item xs={12} sx={{ mt: 3 }} spacing={1}>
                 {loading ? <div className="text-center"> <CircularProgress color="primary" /></div> : <Button onClick={submit} type="submit"  style={{ textDecoration: 'none', 
                           width: '370px', height: '60px', backgroundColor: '#262626',color: 'white' }}>Register Account</Button>}
               
               </Grid>
               
              
       </Grid>
             
       
       
           
           </Grid>
        </div>
  );
}

export default DefaultLayout;
