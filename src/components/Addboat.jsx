import React from 'react'

function Addboat() {
  return (
    <div>
      <section className="p-6 dark:text-gray-100">
	<form novalidate="" className="container w-[60%]  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
		<h2 className="w-full text-3xl font-bold leadi">Add Boat</h2>
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="boat name" type="text" placeholder="Place Boat name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label for="type" className="block mb-1 ml-1">Boat Type</label>
			<input id="type" type="text" placeholder="Add Type of Boat" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label for="capacity" className="block mb-1 ml-1">Capacity</label>
			<input id="capacity" type="text" placeholder="Capacity of Boat" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"/>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-green-600 focus:ri hover:ri text-gray-900">Submit</button>
		</div>
	</form>
</section>
    </div>
  )
}

export default Addboat
