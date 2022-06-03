import React, { useEffect, useState } from 'react'

import Nav from '../Component/Nav'
import { Button, CircularProgress, Grid } from '@mui/material/';
import Map, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getActiveDriver, getOrder, UpdateLocation } from '../services/driver';
import { getRouteService } from '../services/map';
import { useParams } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';
//   import { UpdateLocation } from '../services/resource';
// import { useAuth } from "../context/auth";
// import  NewCategory  from './newCatgory'

const accessToken =
  'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

const onClick = (e) => {
  getActiveDriver({ lat: 23.2, lng: 23 })
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


// const pageStatus = "pending"
// let interval
const getRoute = async (order) => {
  return await getRouteService(order.pickUp, order.destination)
}

export default function DriverView() {
  const [order, setOrder] = useState({})
  const [orderStatus, setOrderStatus] = useState("pending")
  const [routeGeoson, setRouteGeoson] = useState({})
  // const [driver, setDriver] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()


  useEffect(() => {
    setLoading(true)
    getOrder({ id: id }).then(async (response) => {
      const routeGeoson = await getRoute(response[0]).then(resp=>{
        setRouteGeoson({...resp})
      }).catch(e => {
        console.log("getting driver error",)
      })
      setOrder(response[0])
    }).catch(e => {

    }).finally(() => {
      setLoading(false)
    })
  }, [id]);

  const updateStatus = () => {
    UpdateLocation({
      location: {
        lat: order.pickUp.lat,
        lng: order.pickUp.lng,
        text: order.pickUp.text
      }, status: "engaged"
    }).then(() => {
      setOrderStatus("active")
    }).catch((e) => {

    })
  }

  return (
    <div>
      <Nav />
      <Grid container minHeight="100vh">
        <Grid item xs={12} md={3} sx={{ pt: 10, px: 5 }} style={{ backgroundColor: '#1B1481', textAlign: 'center' }} >
          {
            loading
              ? <CircularProgress />
              : order._id
                ? <>
                  <img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654182701/Group_1244_jjsncc.png' alt='' />
                  <h3 className='jb'>{order?.user?.fullname}   </h3>
                  <p style={{ color: 'white', marginTop: '-20px' }} > {order?.user?.phone || 0} </p>
                  <p style={{ color: 'white', marginTop: '-20px' }} > {order?.user?.ratings || 0} </p>
                  <p style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>From
                    <span style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}>{order?.pickUp?.text} </span></p>
                  <p style={{ color: 'black', fontSize: '20px', fontWeight: '600' }}>To
                    <span style={{ color: 'white', fontSize: '16px', fontWeight: '400' }}>Uyo road </span></p>

                  {
                    orderStatus === "pending"
                      ? <Button onClick={updateStatus}> Pick up {order.user.fullName} </Button>
                      : orderStatus === "active"
                        ? <Button onClick={updateStatus}> End up </Button>
                        : <Button onClick={updateStatus}> Submit </Button>
                  }
                </>

                : <h2> Failed to load data</h2>
          }
        </Grid>
        <Grid item sx={12} md={9} overflow='hidden'   minHeight={"80vh"}  >
          <Map
            onClick={onClick}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={accessToken}
            style={{
              height: "100%",
              // width:"100%"
            }}
            initialViewState={{
              longitude: 7.7145,
              latitude: 5.1744,
              zoom: 14,
            }}
          >
            <Marker longitude={7.7145} latitude={5.1744} anchor="bottom" >
              <img src="./pin.png" alt='' />
              {/* <h2>78</h2> */}
            </Marker>
            {
              order?.pickUp.lat&&<Marker longitude={order.pickUp.lng} latitude={order.pickUp.lat} anchor="bottom" >
              <FaMapMarker size={40} />
            </Marker>
            }
            {
              order?.pickUp.lat&&<Marker longitude={order.destination.lng} latitude={order.destination.lat} anchor="bottom" >
              <FaMapMarker color='#fafa' size={40} />
            </Marker>
            }
          {
            routeGeoson.features &&
            <Source id="polylineLayer" type="geojson" data={routeGeoson}>
              <Layer id="lineLayer" type="line" source="my-data"
                layout={{
                  "line-join": "round",
                  "line-cap": "round"
                }}
                paint={{
                  "line-color": "#1B1481",
                  "line-width": 5
                }}
              />
            </Source>
          }
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
