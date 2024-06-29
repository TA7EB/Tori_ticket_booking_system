import React from 'react'

function Addtrip() {
  return (
    <div>
    <section className="p-6 dark:text-gray-100">
  <form novalidate="" className="container w-[60%]  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
      <h2 className="w-full text-3xl font-bold leadi">Add Trip</h2>
      <div>
          <label for="t_name" className="block mb-1 ml-1">Trip Name</label>
          <input id="trip name" type="text" placeholder="Place Trip" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
      </div>
      <div>
          <label for="route" className="block mb-1 ml-1">Route</label>
          <input id="route" type="text" placeholder="Add Route" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
      </div>
      <div>
          <label for="boat" className="block mb-1 ml-1">Boat</label>
          <input id="boat" type="text" placeholder="Name of Boat" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"/>
      </div>
      <div>
          <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-green-600 focus:ri hover:ri text-gray-900">Submit</button>
      </div>
  </form>
</section>
  </div>
  )
}

export default Addtrip
