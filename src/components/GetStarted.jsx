import React from 'react'
import { Link } from 'react-router-dom';


const GetStarted = ()=>{
    return(  
<>
        <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/B6PdLLb/msg1208936741-6993.jpg")'}}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-transparent"> a</h1>
      <p className="mb-5 text-gray-950">Simplify your life with online booking.Set sail to new horizons.Travel. Explore. Enjoy.</p>
      <Link to='/Myform' className="btn btn-success">Get Started</Link>
    </div>
  </div>
</div>

</>

      )
}
export default GetStarted;