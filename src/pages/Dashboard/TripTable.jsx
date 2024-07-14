import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TripTable = () => {
  let { data, refetch } = useQuery({
    queryKey: ["allTrips"],
    queryFn: async () => {
      let res = await axios.post(`http://127.0.0.1:8000/api/list_schedule`).then();
      return res.data;
    },
  });

  const [tripData, setTripData] = useState({
    boat: "",
    dep_time: "",
    arr_time: "",
    available_seat: "",
    fare: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateTrip = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/add_schedule", tripData);

      toast.success("Trip Added Successfully!!");

      refetch();

      document.getElementById("my_modal_1").close();

      setTripData({
        name: "",
        type: "",
        capacity: "",
      });
    } catch (error) {
      console.error("Error adding trip:", error);
      toast.error("Something went wrong!!");
      document.getElementById("my_modal_1").close();
    }
  };
  console.log(data)
  return (
    <div>
      <div className="overflow-x-auto">
        <button
          className="btn btn-primary mb-5"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add a trip
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6 max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Add a trip
              </h3>

              <form method="dialog">
                <button className="bg-red-600 px-2 rounded-lg font-bold text-xl text-white">
                  X
                </button>
              </form>
            </div>

            <form onSubmit={handleCreateTrip} className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Boat Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="boat"
                  value={tripData.name}
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
                Departure Time
                </label>
                <input
                  type="time"
                  id="name"
                  name="dep_time"
                  value={tripData.dep_time}
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
                Arrival Time
                </label>
                <input
                  type="time"
                  id="name"
                  name="arr_time"
                  value={tripData.arr_time}
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
               Available Seat
                </label>
                <input
                  type="number"
                  id="name"
                  name="available_seat"
                  value={tripData.available_seat}
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
                  value={tripData.fare}
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

        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg text-black">Boat Name</th>
              <th className="text-lg text-black">Departure Time</th>
              <th className="text-lg text-black">Arrival Time</th>
              <th className="text-lg text-black">Seats</th>
              <th className="text-lg text-black">Fare</th>
             
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
                  <td>{item?.boat}</td>
                  <td>
                    {item?.dep_time} 
                  </td>
                  <td>
                    {item?.arr_time} 
                  </td>
                  <td>{item?.available_seat}</td>
                  <td>{item?.fare}</td>
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

export default TripTable;
