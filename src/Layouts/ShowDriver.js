import React, { useState, useEffect } from 'react';


import Nav from '../Component/Nav'
import { Stack, Grid } from '@mui/material/';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getActiveDriver } from '../services/resource';
  // import { UpdateLocation } from '../services/resource';
import { useAuth } from "../context/auth";
import  NewCategory  from './newCatgory'






const accessToken=
'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

export default function ShowDriver() {
  const [newCategory, setNewCategory] = useState(false);
   const handleNewCategory = () => {
   setNewCategory(true);
  };

  const { currentUser } = useAuth()
  console.log(currentUser)

  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000)
  }, []);


    const onClick=(e) => {
      getActiveDriver({lat:23.2,lng:23})
      // UpdateLocation (
      // {
      //   "status": "active",
      //   "location": {
      //     "lat": 1.22,
      //     "lng": "2.2"
      //   },
      //   "category": "6296f67b1bbb184f0fb6cf81"
      // })
        console.log(e) 
      }
      return !spinner &&  (
    <div>
<Nav />
<Grid container minHeight="100vh">
<Grid item xs={12} md={3} sx={{pt: 10, px: 5}} style={{backgroundColor: '#1B1481',textAlign:'center'}} >
<img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654182701/Group_1244_jjsncc.png' alt='' />
<h3 className='jb'>John  </h3>
<p  style={{color:'white',marginTop:'-15px'}} >toyota pirus</p>
<p  style={{color:'white',marginTop:'-10px'}} >5.0</p>

<p className='jb' >#500</p>   
<Stack
  direction="row"
  justifyContent="flex-end"
 
  spacing={2}
>

<img style={{cursor:'pointer'}} onClick={handleNewCategory} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654189832/image_15_ljhfhw.png' alt='' />
<p onClick={handleNewCategory}  style={{fontSize:'18px',fontWeight:'600',cursor:'pointer'}}>Cancel</p>
</Stack>
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
<NewCategory
                open={newCategory}
                close={() => setNewCategory(false)}
                /> 
</Grid>
    </div>
  )
}
