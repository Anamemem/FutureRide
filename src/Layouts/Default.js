import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav';




function DefaultLayout() {
  return (
    <div>
        <Nav />
    
    <h1>Default page </h1>
    <div  style={{ backgroundColor:"red",width:"20px"}}>
    <Outlet />

    </div>
    

    </div>
  );
}

export default DefaultLayout;
