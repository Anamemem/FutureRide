import React from 'react';
import { Outlet } from 'react-router-dom';



function Driver() {
  return (
    <div>   
    
    <h1>Driver page </h1>
<Outlet />
    </div>
  );
}

export default Driver;
