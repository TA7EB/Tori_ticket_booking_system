import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const DriverTable = () => {
  let { data, refetch } = useQuery({
    queryKey: ["allDrivers"],
    queryFn: async () => {
      let res = await axios.post(`http://127.0.0.1:8000/api/list_driver`).then();
      return res.data;
    },
  });

  const [driverData, setDriverData] = useState({
    driver_name: "",
    driver_contact: "",
    driver_join: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateDriver = async (e) => {
    e.preventDefault();

    console.log(driverData);
    try {
      await axios.post("http://127.0.0.1:8000/api/add_driver", driverData);

      toast.success("Driver Added Successfully!!");

      refetch();

      document.getElementById("my_modal_1").close();

      setDriverData({
        name: "",
        type: "",
        capacity: "",
      });
    } catch (error) {
      console.error("Error adding Driver:", error);
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
          Add Driver
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box p-6 max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl text-gray-800 mb-4">
                Add a Driver
              </h3>

              <form method="dialog">
                <button className="bg-red-600 px-2 rounded-lg font-bold text-xl text-white">
                  X
                </button>
              </form>
            </div>

            <form onSubmit={handleCreateDriver} className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Driver Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="driver_name"
                  value={driverData.driver_name}
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
                  Driver Contact
                </label>
                <input
                  type="number"
                  id="type"
                  name="driver_contact"
                  value={driverData.driver_contact}
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
                  Driver Join
                </label>
                <input
                  type="date"
                  id="capacity"
                  name="driver_join"
                  value={driverData.driver_join}
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
              <th className="text-lg text-white">Driver Name</th>
              <th className="text-lg text-white">Contact</th>
              <th className="text-lg text-white">Join Date </th>
              <th className="text-lg text-white">Action </th>
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
                  <td>{item.driver_name}</td>
                  <td>{item.driver_contact}</td>
                  <td>{item.driver_join}</td>
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

export default DriverTable;
