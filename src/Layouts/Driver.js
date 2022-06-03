import {  Grid } from '@mui/material';

import React from 'react';
import {  Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653063644/network-mesh-wire-digital-technology-background_1017-27428_1_yussok.png',
    bg: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653139409/parcel-tracking-app-delivery-truck-with-cargo-box-mobile-phone-online-parcel-inspection-concept_196604-43-removebg-preview_1_kerurh.png',
    caption: 'Providing A Professional & Relaible Service'
  },
  {
    url: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653063926/abstract-white-shapes-background_79603-1362_1_etlglh.png',
    bg: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653140615/transport-isometric-concept-with-smartphone-yellow-electric-car-white-background-3d_1284-32228-removebg-preview_1_geoae9.png',
    caption: 'Providing A Professional & Relaible Service'
  },  
  {
    url: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653063886/creative-wallpaper-with-white-shapes_23-2148811498_1_risyar.png',
    bg: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653140999/taxi-online-service-mobile-application-with-yellow-taxicab-with-road-buildings-concept-order-taxi-service-isometric-vector-illustration_473922-234-removebg-preview_1_neuwvg.png',
    
    caption: 'Providing A Professional & Relaible Service'
  }, {
    url: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653064148/elegant-white-texture-background_23-2148431731-removebg-preview_1_yqifkp.png',
    bg: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653310945/Group_1220_jhm930.png',
    caption: 'Providing A Professional & Relaible Service'
  },
  {
    url: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653064239/white-painted-wall-texture-background_53876-138197_1_mctsqs.png',
    bg: 'https://res.cloudinary.com/dekbvdqnb/image/upload/v1653064907/online-taxi-service-transportation-technology-woman-calling-taxi-service-with-location-map-smart-phone-screen_251139-222-removebg-preview_1_rzyoxb.png',
    caption: 'Providing A Professional & Relaible Service'
  },
];

function Driver() {
  return (
    
    <div className="slide-container">
      <h3>hjghgh gjhg hgjhgj</h3>
    <Zoom duration = '4000' slidesToShow={1} indicators arrows = {false}>
     {slideImages.map((slideImage, index)=> (
        <div  style={{'backgroundImage': `url(${slideImage.url})`,backgroundSize:"cover",minHeight: 'calc(100vh - 64px)'}} className="each-slide nin" key={index}>
          <div >
            <Grid container >
              <Grid item sx={12} md={4} >
                <h1 className='text goods'  style={{color: 'black', fontWeight: 'bold'}}> {slideImage.caption} </h1>
                <p className='d goods' style={{color: 'black'}}>Download the App</p>
                <img className='rudes goods' src='https://res.cloudinary.com/dekbvdqnb/image/upload/v1652704848/download-removebg-preview_1_fnwpd5.png' alt='' />
                
              </Grid>
              <Grid item sx={12} md={8}   container justifyContent={"end"} >
              <img className='hw' src={slideImage.bg} alt="" />

              </Grid>
            </Grid>
            
          </div>
        </div>
      ))} 
    </Zoom>
  </div>

  );
}

export default Driver;
