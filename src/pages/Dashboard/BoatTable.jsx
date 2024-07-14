import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const BoatTable = () => {
  let { data, refetch } = useQuery({
    queryKey: ["allBoats"],
    queryFn: async () => {
      let res = await axios.post(`http://127.0.0.1:8000/api/list_boat`).then();
      return res.data;
    },
  });

  const [boatData, setBoatData] = useState({
    boat_name: "",
    boat_type: "",
    boat_capacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateBoat = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/add_boat?boat_id&boat_name=Tori First Class&boat_type=Speed Boat&boat_capacity=4&owner_id",
        boatData
      );

      toast.success("Boat Added Successfully!!");

      refetch();

      document.getElementById("my_modal_1").close();

      setBoatData({
        name: "",
        type: "",
        capacity: "",
      });
    } catch (error) {
      console.error("Error adding boat:", error);
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
          Add Boat
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6 max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Add a Boat
              </h3>

              <form method="dialog">
                <button className="bg-red-600 px-2 rounded-lg font-bold text-xl text-white">
                  X
                </button>
              </form>
            </div>

            <form onSubmit={handleCreateBoat} className="space-y-4">
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
                  name="boat_name"
                  value={boatData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Boat Type
                </label>
                <input
                  type="text"
                  id="type"
                  name="boat_type"
                  value={boatData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Boat Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  name="boat_capacity"
                  value={boatData.capacity}
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

        <table className="table bg-gray-300">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg text-white">Boat Name</th>
              <th className="text-lg text-white">Boat Type</th>
              <th className="text-lg text-white">Capacity</th>
              <th className="text-lg text-white">Actions</th>
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
                  <td>{item.boat_name}</td>
                  <td>{item.boat_type}</td>
                  <td>{item.boat_capacity}</td>
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

export default BoatTable;
