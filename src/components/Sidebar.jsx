import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = ()=>{
    return(  
<>


<div className='grid  grid-flow-col gap-4 '>

<aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 row-span-3">
	<nav className="space-y-8 text-sm">
		
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Dashboard</h2>
			<div className="flex flex-col space-y-1">
				<Link rel="noopener noreferrer" to="/Boat">Boat</Link>
				<a rel="noopener noreferrer" href="#">Driver</a>
				<a rel="noopener noreferrer" href="#">Route</a>
				<a rel="noopener noreferrer" href="#">Trip</a>
				
			</div> 
		</div>
	</nav>
</aside>
{/* <div className='grid grid-cols-3 grid-flow-'>

<div className='row-span-2 col-span-2 p-[5%] w-[50%] flex space-x-[30%]'>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Add Boat</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">See Boat</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Update</button>
</div>

<div className='row-span-2 col-span-2  p-[5%] w-[50%] flex space-x-[30%]'>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
</div>
<div className='row-span-2 col-span-2 p-[5%] w-[50%] flex space-x-[30%]'>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
</div>
<div className='row-span-2 col-span-2 p-[5%] w-[50%] flex space-x-[30%]'>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
<button type="button" className="px-8 py-3 font-semibold rounded text-gray-100 bg-gray-800">Basic</button>
</div>
</div> */}
</div>



</>

      )
}
export default Sidebar;