import React from 'react'



const Carousel = ()=>{
    return(  
<>
<div>
    <h2 className='text-center font-bold'>Available Destinations</h2>
</div>
<div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/dDpc8Mv/Whats-App-Image-2024-07-10-at-10-51-41-PM.jpg" alt="Image 1" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/Cbt2Fp8/Whats-App-Image-2024-07-10-at-10-51-41-PM-1.jpg" alt="Image 2" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/ZcRTPTP/Whats-App-Image-2024-07-10-at-10-51-41-PM-2.jpg" alt="Image 3" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/HrHb5FV/msg1208936741-7008.jpg" alt="Image 4" />
	<img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/Qrjjtgf/DSC-Lake.png" alt="Image 5" />
</div>

</>

      )
}
export default Carousel;
