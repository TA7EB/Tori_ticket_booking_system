import React from 'react';
import UserDetails from './UserDetails';
import BoatDetails from './BoatDetails';
import FareDetails from './FareDetails';

const Payment = () => {
  return (
    <div>

    <div className="flex flex-col w-full lg:flex-row">
    <div className=" w-[50%] p-[5%]">
    <UserDetails></UserDetails>

        </div> 
    <div className="divider lg:divider-horizontal"></div> 
    <div className="p-[5%] ">

   <BoatDetails></BoatDetails>
    </div>
  </div>
    <div className='p-[5%]'>
    <div className="flex flex-col w-full border-opacity-50">
  <div className="grid  card  place-items-">
    <FareDetails></FareDetails>

  </div>
  <div className="divider"></div>
  <div className="grid h-20 card  place-items-center">content</div>
</div>

    </div>
    
    </div>
      
  )
};
export default Payment;