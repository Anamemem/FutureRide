import React, { useRef } from 'react'
import { useState } from 'react';
import Nav from '../Component/Nav'
// import Grid from '@mui/material/Grid';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button, Grid, TextField } from '@mui/material';
import AddNewcategory from './addNewcategory'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { MenuSharp } from '@mui/icons-material';
import { reverseGeocoderService } from '../services/map';
import { GeoAutoComplete } from '../Component/GeoAutoComplete';


// ES5

const accessToken =
  'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

const center = {
  lng: 7.7145,
  lat: 5.1744,
}


export default function Mapp() {
  const [addNewcategory, setAddNewcategory] = useState(false);
  const [viewCenter, setViewCenter] = useState({ ...center });
  const [locGetter, setLocGetter] = useState(1);
  const mapRef = useRef(null);
  const handleAddNewcategory = () => {
    setAddNewcategory(true);
  };

  const onClick = (e) => {
    setViewCenter({...e.lngLat})
    console.log(e)
  }

  const updateCenter = (e) => {
    console.log(e)
    if (mapRef.current) {
      setViewCenter({ ...mapRef.current.getCenter() })
    }
  }

  const geoGetter = ()=>{
    reverseGeocoderService(viewCenter).then((resp)=>{
      console.log(resp)
    }).catch((e)=>{
      console.log("geocoder", {e})
    })
  }
  return (
    <>
      <Nav />

      <Grid container minHeight="100vh">
        <Grid item xs={12} md={3} sx={{ pt: 10, px: 5 }} >
          <GeoAutoComplete  />
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
              <Avatar onClick={handleAddNewcategory} style={{ cursor: 'pointer' }}>

                <img style={{ width: '60px', height: '60px' }} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653562889/Group_1228_ccy2vj.png' alt='' />
              </Avatar>

            </ListItemAvatar>
            <ListItemText onClick={handleAddNewcategory} style={{ cursor: 'pointer' }} primary="Tricycle" secondary="7 mins" />
          </ListItem>
          <ListItem >
            <ListItemAvatar>
              <Avatar onClick={handleAddNewcategory} style={{ cursor: 'pointer' }}>

                <img style={{ width: '60px', height: '60px' }} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570521/Group_1224_ci6trn.png' alt='' />
              </Avatar>

            </ListItemAvatar>
            <ListItemText onClick={handleAddNewcategory} style={{ cursor: 'pointer' }} primary="Motocycle" secondary="7 mins" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar onClick={handleAddNewcategory} style={{ cursor: 'pointer' }}>

                <img style={{ width: '60px', height: '60px' }} src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570752/Group_1222_qlfwh4.png' alt='' />
              </Avatar>

            </ListItemAvatar>
            <ListItemText onClick={handleAddNewcategory} style={{ cursor: 'pointer' }} primary="Premium" secondary="10 mins" />
          </ListItem>


        </Grid>
        <Grid item xs={12} md={8} overflow='hidden' minHeight={"80vh"}   >
          <Map
            onClick={onClick}
            onMoveEnd={updateCenter}
            ref={mapRef}
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
            <Marker longitude={viewCenter.lng} latitude={viewCenter.lat} anchor="bottom" >
              <MenuSharp />
            </Marker>

            {locGetter &&
              <Popup closeButton={false} closeOnClick={false} longitude={viewCenter.lng} latitude={viewCenter.lat} anchor='top'>
                <Button onClick={geoGetter} variant='contained' fullWidth color='primary'>  Set  {locGetter === 1 ? "Pick up Location" : "Destination"} </Button>
              </Popup>
            }
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
