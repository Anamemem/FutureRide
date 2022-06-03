import React, { useEffect } from 'react'
import { useState } from 'react';
import Nav from '../Component/Nav'
// import Grid from '@mui/material/Grid';
import Map, { Layer, Marker, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Box, Button, Grid, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AddNewcategory from './Trycycle'
import SinglePost from './motoCycle'
import NewPopup from './newPopup';
import { AiOutlineCaretUp } from 'react-icons/ai'
import { BsFillCaretDownFill } from 'react-icons/bs'

import { FaMapMarker, FaTimes } from "react-icons/fa"
import { getRouteService, reverseGeocoderService } from '../services/map';
// import { maxWidth } from '@mui/system';

// ES5

const accessToken =
  'pk.eyJ1IjoiYW5hbWVtZW0iLCJhIjoiY2wzazlpaDR3MGI1azNkcHZudGdldnpoMCJ9.S7c2-Cl457JtyZTKxoUz5A'

// const center = {
//   lng: 7.7145,
//   lat: 5.1744,
// }

const categories = [
  {img:"https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570521/Group_1224_ci6trn.png",title:"Motocycle",subTitle:"7 mins",price:50},
  {img:"https://res.cloudinary.com/dekbvdqnb/image/upload/v1653562889/Group_1228_ccy2vj.png",title:"Tricycle",subTitle:"7 mins",price:100},
  {img:"https://res.cloudinary.com/dekbvdqnb/image/upload/v1653570752/Group_1222_qlfwh4.png",title:"Premium",subTitle:"7 mins",price:200},
]

let activeSelector = "pickup"

export default function Mapp() {
  const [addNewcategory, setAddNewcategory] = useState(false);
  const [activecategory, setActivecategory] = useState({});
  // const [viewCenter, setViewCenter] = useState({ ...center });
  // const [locGetter, setLocGetter] = useState(1);
  const [pickUpLoc, setPickupLoc] = useState({});
  const [pickUpString, setPickupString] = useState('');
  const [destinationLoc, setDistinationLoc] = useState({});
  const [destinationString, setDistinationString] = useState();
  const [rideDetails, setRideDetails] = useState({})
  const [routeGeoson, setRouteGeoson] = useState({})
  // const mapRef = useRef(null);

  const handleAddNewcategory = (item) => {
    setAddNewcategory(true);
    setActivecategory(item)
  };

  const [singlePost, setSinglePost] = useState(false);
  // const handleSinglePost = () => {
  //   setSinglePost(true);
  // };

  const [newPopup, setNewPopup] = useState(false);
  // const handleNewPopup = () => {
  //   setNewPopup(true);
  // }

  const onClick = (e) => {
    if (activeSelector === "pickup") {
      setPickupLoc({ ...e.lngLat })
      activeSelector = "destination"
    } else {
      setDistinationLoc({ ...e.lngLat })
    }
    console.log(e)
  }

  const clearInputString = (type) => {
    activeSelector = type
    if (type === "pickup") {
      setPickupLoc({})
      setPickupString("")
    } else {
      setDistinationLoc({})
      setDistinationLoc("")
    }
  }

  useEffect(() => {
    if (pickUpLoc.lat && destinationLoc.lng) {
      getRouteService(pickUpLoc, destinationLoc).then((resp) => {
        const { distance, time } = resp?.features?.[0]?.properties
        setRideDetails({ distance: (distance / 1000).toFixed(2), time: (time / 60).toFixed(0) })
        setRouteGeoson({ ...resp })
      }).catch((e) => {
        console.log("setting route error", e)
      })
    } else {
      setRouteGeoson({})
    }
  }, [pickUpLoc, destinationLoc])

  useEffect(() => {
    if (pickUpLoc.lat) {
      reverseGeocoderService(pickUpLoc).then((resp) => {
        const { formatted } = resp?.features?.[0]?.properties
        setPickupString(formatted)
      }).catch((e) => {
        console.log("setting pickup string error", e)
      })
    }
  }, [pickUpLoc])

  useEffect(() => {
    if (destinationLoc.lat) {
      reverseGeocoderService(destinationLoc).then((resp) => {
        const { formatted } = resp?.features?.[0]?.properties
        setDistinationString(formatted)
      }).catch((e) => {
        console.log("setting pickup string error", e)
      })
    }
  }, [destinationLoc])

  return (
    <>
      <Nav />

      <Grid container minHeight="100vh">
        <Grid item xs={12} md={3} sx={{ pt: 10, px: 5 }} >
          <Stack direction={"row"}>
            <TextField
              label="Enter Pick up location"
              id="outlined-size-small"
              value={pickUpString}
              size="small"
              disabled
              margin="normal"
              InputProps={{
                endAdornment: pickUpString && <InputAdornment > <IconButton onClick={() => clearInputString("pickup")}> <FaTimes /> </IconButton> </InputAdornment>
              }}
            />
            <IconButton onClick={() => activeSelector = "pickup"}><AiOutlineCaretUp /></IconButton>
          
          </Stack>
          <Stack direction={"row"}>

            <TextField
              label="Enter a drop off location"
              id="outlined-size-small"
              size="small"
              margin="normal"
              sx={{
                "& input.Mui-disabled":{color:"red"}
              }}
              value={destinationString}
              disabled
              InputProps={{
                endAdornment: destinationString && <InputAdornment > <IconButton onClick={() => clearInputString("destination")}> <FaTimes /> </IconButton> </InputAdornment>
              }}
            />
            <IconButton onClick={() => activeSelector = "destination"}><BsFillCaretDownFill /></IconButton>
           
          </Stack>
          <Stack spacing={3}>
          {
            categories.map((item)=>(
          <Box sx={{border: '1.8px solid lightgray', borderRadius: '5px',maxWidth:"222px" ,
            ":hover":{border:"1px solid #1B1481"}
            }}>
            <ListItem onClick={()=>handleAddNewcategory(item)}>
              <ListItemAvatar>
                <Avatar  style={{ cursor: 'pointer' }}>
                  <img style={{ width: '60px', height: '60px' }} src={item.img} alt={item.title} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText  style={{ cursor: 'pointer', color: 'black' }} primary={ item.title}secondary={item.subTitle} />
            </ListItem>
          </Box>

            ))
          }

          </Stack>


        </Grid>
        <Grid item xs={12} md={9} overflow='hidden' minHeight={"80vh"}   >
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
              pickUpLoc.lat && <Marker longitude={pickUpLoc.lng} latitude={pickUpLoc.lat} anchor="bottom" >
                <FaMapMarker size={30} />
              </Marker>
            }
            {
              destinationLoc.lat && <Marker longitude={destinationLoc.lng} latitude={destinationLoc.lat} anchor="bottom" >
                <FaMapMarker size={30} />
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
        <AddNewcategory
          {...activecategory}
          {...rideDetails}
          pickUp={{...pickUpLoc,text:pickUpString}}
          destination={{...destinationLoc,text:destinationString}}
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
