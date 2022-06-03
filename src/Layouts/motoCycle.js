import React from 'react'
//  import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
// import  NewCategory  from './newCatgory'

 const SinglePost = ({open, close}) => {
  



    return (
        <div>
            <Dialog
            open={open} 
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            
            >
               <Grid    item   xs={12} >
                    <Card >
                    <CardContent sx={{  width: 300, justifyContent: "center" }} style={{fontFamily: 'Poppins ', fontSize:'12.5px'
}} >
    <Stack
  direction="row"
  justifyContent="flex-end"


>   <CloseIcon onClick={close} style={{cursor: "pointer"}} /></Stack>
                  <hr />
                  <Grid container>
                  <Grid item xs={9} md={10}>
                  <h3>seats</h3>
                  <h3>Minimum price</h3>
                  
                 
                  <h3>Payment</h3>
                  </Grid>
                  <Grid item xs={3} md={2}>
                  <h3>1</h3>
                  <h3>#200</h3>
                
                 
                   <h3>Cash</h3>      
                  </Grid>
                  </Grid>
                 

                  <button className='eat' >Request Motocycle</button>
                
                  
                    
                        </CardContent>
                       
                    </Card>
                </Grid>
                {/* <NewCategory
            open={newCategory}
            close={() => setNewCategory(false)}
            />  */}
        </Dialog>
        </div>
    )
  };
   


export default SinglePost;