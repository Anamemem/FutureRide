import React from 'react'
// import { useState } from "react";

import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

 

  const AddNewCategory = ({open, close}) => {
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
            style={{marginTop:'300px'}}
            >
               <Grid    item   xs={12} >
                    <Card>
                    <CardContent sx={{ width: 500 }} >
                  <hr />
                  <Grid container>
                  <Grid item xs={6} md={6}>
                  <h3>seats</h3>
                  <h3>Minimum price</h3>
                  <h3>Start</h3>
                  <h3>Time</h3>
                  </Grid>
                  <Grid item xs={6} md={6}>
                  <h3>1-4</h3>
                  <h3>#500</h3>
                  <h3>#200</h3>
                  <h3>Time</h3>
        
                  </Grid>
                  </Grid>
                  <button className=''>Request Lite</button>
                  
                    
                        </CardContent>
                       
                    </Card>
                </Grid>
               
             
        </Dialog>
      </div>
  )
  };
   


export default AddNewCategory;
