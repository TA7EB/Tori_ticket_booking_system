import React from 'react'
import { Link } from 'react-router-dom';


const GetStarted = ()=>{
    return(  
<>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/w4Lcv26/Boat-Wallpaper-01-1920x1200-1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Plan. Book. Go.</h1>
      <p className="mb-5">Simplify your life with online booking.Set sail to new horizons.Travel. Explore. Enjoy.</p>
      <Link to='/Myform' className="btn btn-success">Get Started</Link>
    </div>
  </div>
</div>

</>

      )
}
export default GetStarted;