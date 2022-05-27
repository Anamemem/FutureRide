import React from 'react'
import { useState } from 'react';
import Nav from '../Component/Nav'
// import Grid from '@mui/material/Grid';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Grid, TextField } from '@mui/material';
import  AddNewcategory  from './addNewcategory'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

 
// ES5
 
  const accessToken=
    'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'


 
export default function Mapp() {
  const [addNewcategory, setAddNewcategory] = useState(false);
  const handleAddNewcategory = () => {
   setAddNewcategory(true);
   };  

   const onClick=(e) => {
     console.log(e) 
   }
  return (
      <>
      <Nav />
     
<Grid container minHeight="100vh">
<Grid item xs={12} md={3} sx={{pt: 10, px: 5}} >
<TextField
          label="Pick up location"
          id="outlined-size-small"
        
          size="small"
          margin="normal"
        />

<TextField
          label="Destination"
          id="outlined-size-small"
         
          size="small"
          margin="normal"
        />
          <ListItem>
        <ListItemAvatar>
     <Avatar onClick={handleAddNewcategory} style={{cursor:'pointer'}}>

          <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653562889/Group_1228_ccy2vj.png' alt='' />
     </Avatar>
         
        </ListItemAvatar>
        <ListItemText onClick={handleAddNewcategory} style={{cursor:'pointer'}} primary="Tricycle" secondary="7 mins" />
      </ListItem>
      <ListItem >
        <ListItemAvatar>
         <Avatar onClick={handleAddNewcategory} style={{cursor:'pointer'}}>

            <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570521/Group_1224_ci6trn.png' alt='' />
         </Avatar>
          
        </ListItemAvatar>
        <ListItemText onClick={handleAddNewcategory} style={{cursor:'pointer'}} primary="Motocycle" secondary="7 mins" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar onClick={handleAddNewcategory} style={{cursor:'pointer'}}>

           <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570752/Group_1222_qlfwh4.png' alt='' /> 
          </Avatar>
          
        </ListItemAvatar>
        <ListItemText onClick={handleAddNewcategory} style={{cursor:'pointer'}} primary="Premium" secondary="10 mins" />
      </ListItem>
        

</Grid>
<Grid item sx={12} md={8} overflow='hidden'    >
<Map
onClick={onClick}
    mapStyle="mapbox://styles/mapbox/streets-v9"
mapboxAccessToken={accessToken}
style={{
  height:"100%",
  // width:"100%"
}}
initialViewState={{
  longitude:7.7145,
  latitude:5.1744,
  zoom:14,
}}
  >
    <Marker longitude={7.7145} latitude={5.1744} anchor="bottom" >
      <img src="./pin.png" alt='' />
      {/* <h2>78</h2> */}
    </Marker>
  </Map>
</Grid>
<AddNewcategory
            open={addNewcategory}
            close={() => setAddNewcategory(false)}
            />
</Grid>
   
 
       
      </>
  )
}
