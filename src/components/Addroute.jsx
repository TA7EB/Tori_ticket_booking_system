import React from 'react'

function Addroute() {
  return (
    <div>
    <section className="p-6 dark:text-gray-100">
  <form novalidate="" className="container w-[60%]  p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900">
      <h2 className="w-full text-3xl font-bold leadi">Add Route</h2>
      <div>
          <label for="r_name" className="block mb-1 ml-1">Route Name</label>
          <input id="route name" type="text" placeholder="Place Route" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
      </div>
      <div>
          <label for="fare" className="block mb-1 ml-1">Fare</label>
          <input id="fare" type="text" placeholder="Add fare" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
      </div>
      <div>
          <label for="time" className="block mb-1 ml-1">Time</label>
          <input id="time" type="text" placeholder="Time of Route" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"/>
      </div>
      <div>
          <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-green-600 focus:ri hover:ri text-gray-900">Submit</button>
      </div>
  </form>
</section>
  </div>
  )
}

export default Addroute
