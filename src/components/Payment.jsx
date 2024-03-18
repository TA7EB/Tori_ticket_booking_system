import React from 'react';

const Payment = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
    <div className=" w-[40%] p-[5%] ">
    <label className="input input-bordered flex items-center gap-2 ">
  Name
  <input type="text" className="grow" placeholder="Enter Name" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="" />
</label>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Phone Number" />
 
</label>
{/* <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <span className="badge badge-info">Optional</span>
</label> */}
        </div> 
    <div className="divider lg:divider-horizontal"></div> 
    <div className="grid flex-grow h-32 card  rounded-box place-items-center">content</div>
  </div>
    
      
  )
};
export default Payment;