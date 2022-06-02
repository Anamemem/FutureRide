import React from 'react'
// import { useState } from "react";

// import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid'
import { Card, Stack} from '@mui/material'
import CardContent from '@mui/material/CardContent'
import "../App.css"
// import  NewCategory  from './newCatgory'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

  const AddNewCategory = ({open, close}) => {

   

//     const [newCategory, setNewCategory] = useState(false);
//  const handleNewCategory = () => {
//   setNewCategory(true);
//  };  
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
                  
                  <h3>Time</h3>
                  <h3>Payment</h3>
                  </Grid>
                  <Grid item xs={3} md={2}>
                  <h3>1-4</h3>
                  <h3>#500</h3>
                
                  <h3>Time</h3>
                   <h3>Cash</h3>      
                  </Grid>
                  </Grid>
                 
        
     
    
    
<Link to='/driversprofile'>

                  <button className='eat'  >Request Trycycle</button>
</Link>
                
                  
                    
                        </CardContent>
                       
                    </Card>
                </Grid>
               
                {/* <NewCategory
            open={newCategory}
            close={() => setNewCategory(false)}
            /> */}
        </Dialog>
      </div>
  )
  };
   


export default AddNewCategory;
