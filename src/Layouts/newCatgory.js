import React from 'react'
// import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

 

 const NewCategory = ({open, close}) => {
  // const [name, setName] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   console.log(name);
  // }

    return (
        <div>
            <Dialog
            open={open} 
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          
            >
               <Grid    item   xs={12} >
                    <Card sx={12} >
                    <CardContent sx={{ textAlign: 'center'}}>
                    
        <p style={{fontSize: "18px", fontFamily: 'Poppins', fontWeight:'700'}}> Cancel Ride
        </p>
        <p>Are you sure you want to cancel ride</p>
        <Grid   justifyContent= "center">
       
      
        </Grid>
        <Grid container>
                  <Grid item xs={12} md={12}>
                      <Link to='/map'>

        <Button type="submit" style={{background: "#103974", color: "white", fontFamily: 'Poppins',width:'80%'}}
                           onClick={close}  >
                              Confirm
                          </Button>
                      </Link>
                          </Grid>
                          <Grid item xs={12} md={12}>
                          <Button type="submit" style={{background: "transparent",width:'80%', color: "black", fontFamily: 'Poppins',border:'1px solid black'}}
                           onClick={close} sx={{px: 5, mt: 2}} >
                              Back 
                          </Button>
                    </Grid>
                    </Grid>
                        </CardContent>
                       
                    </Card>
                </Grid>
               
             
        </Dialog>
        </div>
    )
  };
   


export default NewCategory;