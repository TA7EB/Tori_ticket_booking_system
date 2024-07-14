import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const RouteTable = () => {
  let { data, refetch } = useQuery({
    queryKey: ["allRoutes"],
    queryFn: async () => {
      let res = await axios.post(`http://127.0.0.1:8000/api/list_route`).then();
      return res.data;
    },
  });

  const [routeData, setRouteData] = useState({
    start: "",
    end: "",
    fare: "",
    time: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateRoute = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/add_route?route_id&time=12:00&start=Birulia&end=DIU&boat_id=BOAT_0001&fare=500", routeData);

      toast.success("Route Added Successfully!!");

      refetch();

      document.getElementById("my_modal_1").close();

      setRouteData({
        name: "",
        type: "",
        capacity: "",
      });
    } catch (error) {
      console.error("Error adding route:", error);
      toast.error("Something went wrong!!");
      document.getElementById("my_modal_1").close();
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <button
          className="btn btn-accent mb-5"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add a route
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6 max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Add a route
              </h3>

              <form method="dialog">
                <button className="bg-red-600 px-2 rounded-lg font-bold text-xl text-white">
                  X
                </button>
              </form>
            </div>

            <form onSubmit={handleCreateRoute} className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Route Start
                </label>
                <input
                  type="text"
                  id="name"
                  name="start"
                  value={routeData.start}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Route End
                </label>
                <input
                  type="text"
                  id="name"
                  name="end"
                  value={routeData.end}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
               Fare
                </label>
                <input
                  type="number"
                  id="name"
                  name="fare"
                  value={routeData.fare}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
               Time
                </label>
                <input
                  type="time"
                  id="name"
                  name="time"
                  value={routeData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="modal-action mt-6 flex justify-center items-center">
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>

        <table className="table bg-gray-400">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg text-white">Route Name</th>
              <th className="text-lg text-white">Fare</th>
              <th className="text-lg text-white">Time</th>
              <th className="text-lg text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data.length === 0 ? (
              <tr>
                <th>1</th>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                  <button className="bg-green-600 text-white font-bold p-2 rounded-lg">
                    Update
                  </button>

                  <button className="bg-red-600 text-white font-bold p-2 rounded-lg ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ) : (
              data?.data.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    {item.start} - {item.end}
                  </td>
                  <td>{item.fare}</td>
                  <td>{item.time}</td>
                  <td>
                    <button className="bg-green-600 text-white font-bold p-2 rounded-lg">
                      Update
                    </button>

                    <button className="bg-red-600 text-white font-bold p-2 rounded-lg ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteTable;
