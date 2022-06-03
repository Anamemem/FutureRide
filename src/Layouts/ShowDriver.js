import React, { useState, useEffect, useCallback } from 'react';


import Nav from '../Component/Nav'
import { Stack, Grid, CircularProgress } from '@mui/material/';
import Map, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getActiveDriver, getOrder } from '../services/driver';
// import { UpdateLocation } from '../services/resource';
import { useAuth } from "../context/auth";
import NewCategory from './newCatgory'
import { useNavigate, useParams } from 'react-router-dom';
import { FaCarAlt, FaMapMarker } from 'react-icons/fa';
import { getRouteService } from '../services/map';
import { Button } from 'react-bootstrap';






const accessToken =
  'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

// let pageStatus = "pending"
let interval
const getRoute = async (order) => {
  return await getRouteService(order.pickUp, order.destination)
}

export default function ShowDriver() {
  const [newCategory, setNewCategory] = useState(false);
  const [order, setOrder] = useState({})
  const [orderStatus, setOrderStatus] = useState("active")
  const [routeGeoson, setRouteGeoson] = useState({})
  const [driver, setDriver] = useState({})
  const [loading, setLoading] = useState(false)
  const handleNewCategory = () => {
    setNewCategory(true);
  };

  const { currentUser } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(currentUser)

  const [spinner, setSpinner] = useState(true);

  // It will be executed before rendering

  console.log(orderStatus,spinner,setDriver, setSpinner)
  useEffect(() => {
    setLoading(true)
    getOrder({ id: id }).then(async (response) => {
      const routeGeoson = await getRoute(response[0]).catch(e => {
        console.log("getting driver error",)
      })
      console.log("ge rojos,", routeGeoson)
      setOrder({ ...response[0] })
      setRouteGeoson({ ...routeGeoson })
    }).catch(e => {

    }).finally(() => {
      setLoading(false)
    })
  }, [id]);

  const getDriverLocation = useCallback(() => {
    if (!order.driver?._id) { return }

    interval = setTimeout(() => {
      getActiveDriver({ user: order?.driver._id }).then((resp) => {
        let driver = resp[0]
        if(driver?._id){
          setOrderStatus("completed")
        }
        getDriverLocation()
      }).catch((e) => {

      })
    }, 2000)
  }, [order?.driver?._id])

  useEffect(() => {
    getDriverLocation()
    return () => {
      if (interval) {
        clearTimeout(interval)
      }
    }
  }, [getDriverLocation])

  const endRide = () => {
    navigate("/user")
  }
  const onClick = (e) => {
    getActiveDriver({ lat: 23.2, lng: 23 })
    console.log(e)
  }
  return (
    <>
      <Nav />
      <Grid container minHeight="100vh">

        <Grid item xs={12} md={3} sx={{ pt: 10, px: 5 }} style={{ backgroundColor: '#1B1481', textAlign: 'center' }} >
          {
            loading
              ? <CircularProgress />
              : order._id
                ?
                <>
                  <img src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654182701/Group_1244_jjsncc.png' alt='' />
                  <h3 className='jb'>{order.driver.fullname}  </h3>
                  <h3 className='jb'>{order.driver.phone}  </h3>
                  <h3 className='jb'>{order.driver.vehicleName || "toyota pirus"}  </h3>
                  <p style={{ color: 'white', marginTop: '-10px' }} >5.0</p>
                  <p className='jb' > #{order.price} </p>
                  <p className='jb' > {order.distance} </p>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={2}
                  >
                    {
                      orderStatus === "completed"
                        ?
                        <Button onClick={endRide} variant="contained"> Rate Driver  </Button>
                        :
                        <>
                          <img style={{ cursor: 'pointer' }} onClick={handleNewCategory} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1654189832/image_15_ljhfhw.png' alt='' />
                          <p onClick={handleNewCategory} style={{ fontSize: '18px', fontWeight: '600', cursor: 'pointer' }}>Cancel</p>
                        </>
                    }
                  </Stack>
                </>
                : <h2> Nothing found</h2>
          }
        </Grid>
        <Grid item sx={12} md={9} overflow='hidden' minHeight={"80vh"}   >
          <Map
            onClick={onClick}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={accessToken}
            style={{
              height: "100%",
              width: "100%"
            }}
            initialViewState={{
              longitude: 7.7145,
              latitude: 5.1744,
              zoom: 14,
            }}
          >
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

            {
              order?.pickUp?.lat && <Marker longitude={order.pickUp.lng} latitude={order.pickUp.lat} anchor="bottom" >
                <FaMapMarker size={40} />
              </Marker>
            }
            {
              order?.pickUp?.lat && <Marker longitude={order.destination.lng} latitude={order.destination.lat} anchor="bottom" >
                <FaMapMarker color='#fafa' size={40} />
              </Marker>
            }
            {
              driver?._id && <Marker longitude={driver.location.lng} latitude={driver.location.lat} anchor="bottom" >
                <FaCarAlt size={40} />
              </Marker>
            }
          </Map>

        </Grid>
        <NewCategory
          open={newCategory}
          close={() => setNewCategory(false)}
        />

      </Grid>
    </>
  )
}
