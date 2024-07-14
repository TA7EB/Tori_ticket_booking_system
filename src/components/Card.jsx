import React from 'react'
const Card = ()=>{
    return(  


<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 h-[50%] bg-">
{/* <!--Card 1--> */}
<div className="rounded overflow-hidden shadow-lg bg-white">
  <img className="w-[40%] mx-auto  " src="https://i.ibb.co/MsyMjFB/Search.png" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Search</div>
    <p className="text-gray-700 text-base">
      Choose Your origin,desination,journey dates and search for boats
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TIcket</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Enjoy</span>
  </div>
</div>
{/* <!--Card 2--> */}
<div className="rounded overflow-hidden shadow-lg bg-white">
  <img className="w-[40%] mx-auto" src="https://i.ibb.co/FbjDg5v/Select.png" alt="River"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Select</div>
    <p className="text-gray-700 text-base">
      Select your desired trip
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ticket</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Enjoy</span>
  </div>
</div>

{/* <!--Card 3--> */}
<div className="rounded overflow-hidden shadow-lg bg-white">
  <img className="w-[40%] mx-auto" src="https://i.ibb.co/t4M1v41/Pay.png" alt="Forest"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Pay</div>
    <p className="text-gray-700 text-base">
      Pay by bank cards,mobile banking or cash
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ticket</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Enjoy</span>
  </div>
</div>
</div>
);
}
export default Card;