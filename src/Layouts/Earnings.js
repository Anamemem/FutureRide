import React from 'react'

import Nav from '../Component/Nav'
import {  Grid } from '@mui/material/';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getActiveDriver } from '../services/resource';
//   import { UpdateLocation } from '../services/resource';
// import { useAuth } from "../context/auth";
// import  NewCategory  from './newCatgory'

const accessToken=
'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

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

export default function Earnings() {
  return (
    <div>
    <Nav />
    <Grid container minHeight="100vh">
    <Grid item xs={12} md={3} sx={{pt: 8}}  >
   <div className='act'>Online</div>
   <h3>Todays Earnings</h3>
   <p className='mew'>#0</p>
   <h3>Activty Score</h3>
   <p className='mewss'>89%</p>
   <h3>Current Rating</h3>
   <p className='mewd'>5.0</p>
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
    {/* <NewCategory
                open={newCategory}
                close={() => setNewCategory(false)}
                /> */}
    </Grid>
        </div>
  )
}
