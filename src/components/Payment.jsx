import React from 'react';
import UserDetails from './UserDetails';
import BoatDetails from './BoatDetails';

const Payment = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
    <div className=" w-[50%] p-[5%]">
    <UserDetails></UserDetails>

        </div> 
    <div className="divider lg:divider-horizontal"></div> 
    <div className="p-[5%] ">

   <BoatDetails></BoatDetails>
    </div>
  </div>
    
      
  )
};
export default Payment;