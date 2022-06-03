import React, { useState } from 'react'

import Nav from '../Component/Nav'
import { Box, Button, Drawer, Grid } from '@mui/material/';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { acceptRideService, getActiveOrder } from '../services/driver';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
//   import { UpdateLocation } from '../services/resource';
// import { useAuth } from "../context/auth";
// import  NewCategory  from './newCatgory'

const accessToken =
  'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

export default function Earnings() {
  const [orders, setOrders] = useState([])
  const [currentOrder, setCurrentOrder] = useState({})
  const [drawer, setDrawer] = useState(false)
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onClick = (item) => {
    console.log("makrer clid")
    setCurrentOrder({ ...item })
    setDrawer(true)
    // UpdateLocation (
    // {
    //   "status": "active",
    //   "location": {
    //     "lat": 1.22,
    //     "lng": "2.2"
    //   },
    //   "category": "6296f67b1bbb184f0fb6cf81"
    // })
  }

  const getAwaitingOrder = () => {
    getActiveOrder().then((data) => {
      setOrders([...data])
      console.log(data)
    }).catch(e => {
      console.log("getting awatint order", e)
    })
  }

  const acceptRide = () => {
    acceptRideService(currentOrder?._id, { status: "active" }).then((data) => {
      navigate(`../order/${currentOrder?._id}`)
      console.log(data)
    }).catch(e => {
      console.log("getting awatint order", e)
    })

  }
  return (
    <div>
      <Nav />
      <Grid container minHeight="100vh">
        <Grid item xs={12} md={3} sx={{ pt: 8 }}  >
          <div className='act'>Online</div>
          <h3>Todays Earnings</h3>
          <p className='mew'>#0</p>
          <h3>Activty Score</h3>
          <p className='mewss'>89%</p>
          <h3>Current Rating</h3>
          <p className='mewd'>5.0</p>
        </Grid>
        <Grid item sx={12} md={9} overflow='hidden'  minHeight={"80vh"}   >
          <Map
            onClick={getAwaitingOrder}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={accessToken}
            style={{
              height: "100%",
              width:"100%"
            }}
            initialViewState={{
              longitude: 7.7145,
              latitude: 5.1744,
              zoom: 14,
            }}
          >
            {orders.length && orders.map((order) =>
              <Marker onClick={()=>onClick(order)} longitude={order.pickUp.lng} latitude={order.pickUp.lat} anchor="bottom" >
                <FaMapMarkerAlt size={30} />
                {/* <h2>78</h2> */}
              </Marker>

            )
            }
          </Map>

        </Grid>
        {/* <NewCategory
                open={newCategory}
                close={() => setNewCategory(false)}
                /> */}
      </Grid>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <Box xs={12} md={3} sx={{ pt: 10, px: 5 }} style={{ backgroundColor: '#1B1481', textAlign: 'center' }} >
          <img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654182701/Group_1244_jjsncc.png' alt='' />
          <h3 className='jb'>{currentOrder?.user?.fullName}   </h3>
          <p style={{ color: 'white', marginTop: '-20px' }} > {currentOrder?.user?.phoneNumber || 0} </p>
          <p style={{ color: 'white', marginTop: '-20px' }} > {currentOrder?.user?.ratings || 0} </p>
          <p style={{ color: 'white', marginTop: '-10px' }} >{currentOrder?.distance || 0}km away</p>
          <p style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>From
            <span style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}> {currentOrder?.pickUp?.text} </span></p>
          <p style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>To
            <span style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}> {currentOrder?.destination?.text} </span></p>
          <Grid container spacing={1}>
            <Grid item xs={12}>
             
              <button onClick={() => acceptRide()}className='accept'>Accept</button>

            </Grid>
            <Grid item xs={12}>
            
              <button onClick={() => setDrawer(false)}className='decline'>Ignore</button>

            </Grid>
          </Grid>

        </Box>

      </Drawer>
    </div>
  )
}
