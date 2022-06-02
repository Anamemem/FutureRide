import React from 'react'
import { useState } from 'react';
import Nav from '../Component/Nav'
// import Grid from '@mui/material/Grid';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Grid, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import  AddNewcategory  from './Trycycle'
import  SinglePost  from './motoCycle'
import NewPopup from './newPopup';

 
// ES5
 
  const accessToken=
    'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'


 
export default function Mapp() {
  const [addNewcategory, setAddNewcategory] = useState(false);
  const handleAddNewcategory = () => {
   setAddNewcategory(true);
   };  

   const [singlePost, setSinglePost] = useState(false);
  const handleSinglePost = () => {
   setSinglePost(true);
  };  

  const [newPopup, setNewPopup] = useState(false);
  const handleNewPopup = () => {
    setNewPopup(true);
  }

   const onClick=(e) => {
     console.log(e) 
   }
  return (
      <>
      <Nav />
     
<Grid container minHeight="100vh">
<Grid item xs={12} md={3} sx={{pt: 10, px: 5}} >
<TextField
          label="Enter Pick up location"
          id="outlined-size-small"
        
          size="small"
          margin="normal"
        />

<TextField
          label="Enter a drop off location"
          id="outlined-size-small"
         
          size="small"
          margin="normal"
        />
        <p className='pes'>

          <ListItem style={{border: '1.8px solid lightgray',borderRadius: '5px',height: '50px',width:'222px'}}>
        <ListItemAvatar>
     <Avatar onClick={handleAddNewcategory} style={{cursor:'pointer'}}>

          <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653562889/Group_1228_ccy2vj.png' alt='' />
     </Avatar>
         
        </ListItemAvatar>
        <ListItemText onClick={handleAddNewcategory} style={{cursor:'pointer', color:'black'}} primary="Tricycle" secondary="7 mins" />
      </ListItem>
        </p>
        <p className='pes'>

      <ListItem style={{border: '1.8px solid lightgray',borderRadius: '5px',height: '50px',width:'222px'}}>
        <ListItemAvatar>
         <Avatar onClick={handleSinglePost} style={{cursor:'pointer', color:'black'}}>

            <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570521/Group_1224_ci6trn.png' alt='' />
         </Avatar>
          
        </ListItemAvatar>
        <ListItemText onClick={handleSinglePost} style={{cursor:'pointer', color:'black'}} primary="Motocycle" secondary="7 mins" />
      </ListItem>
        </p>
      <p className='pes'>

      <ListItem style={{border: '1.8px solid lightgray',borderRadius: '5px',height: '50px',width:'222px'}}>
        <ListItemAvatar>
          <Avatar onClick={handleNewPopup} style={{cursor:'pointer'}}>

           <img style={{width:'60px',height:'60px'}} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570752/Group_1222_qlfwh4.png' alt='' /> 
          </Avatar>
          
        </ListItemAvatar>
        <ListItemText onClick={handleNewPopup} style={{cursor:'pointer', color:'black'}} primary="Premium" secondary="10 mins" />
      </ListItem>
      </p>
        

</Grid>
<Grid item sx={12} md={9} overflow='hidden'    >
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
              <SinglePost
            open={singlePost}
            close={() => setSinglePost(false)}
            />

            <NewPopup 
            open={newPopup}
            close={() => setNewPopup(false)} 
            />
</Grid>
   
 
       
      </>
  )
}
