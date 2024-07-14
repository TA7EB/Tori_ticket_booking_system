import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "" || "Not Specified",
    fromLocation: "",
    toLocation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.startDate) {
      return Swal.fire({
        title: "Oops!!",
        text: "Date of journey is required!",
        icon: "warning",
      });
    }
    if (!formData.fromLocation) {
      return Swal.fire({
        title: "Oops!!",
        text: "From Location is required",
        icon: "warning",
      });
    }
    if (!formData.toLocation) {
      return Swal.fire({
        title: "Oops!!",
        text: "To Location is required",
        icon: "warning",
      });
    }

    localStorage.setItem("rideInfo", JSON.stringify(formData));

    setFormData({
      startDate: "",
      endDate: "",
      fromLocation: "",
      toLocation: "",
    });

    navigate("/Table");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url("https://i.ibb.co/MGxNX81/pexels-tom-fisk-1406636.jpg")',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content"></div>
      <div className="w-[40%] h-[50%] shadow-sm  mx-auto my-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="startDate"
              >
                Date of Journey
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endDate"
              >
                Date of Return
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="endDate"
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <select
              name="fromLocation"
              className="w-full outline-none border border-gray-400 p-2 rounded-md"
              value={formData.fromLocation}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select from where the journey starts
              </option>
              <option value="DSC">DSC</option>
              {/* <option value="Ashulia">Ashulia</option>
              <option value="Charabag">Birulia</option>
              <option value="Datta Para">Akrain</option> */}
            </select>
          </div>

          <div className="mb-6">
            <select
              name="toLocation"
              className="w-full outline-none border border-gray-400 p-2 rounded-md"
              value={formData.toLocation}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select where the journey ends
              </option>
              <option value="Ashulia">Ashulia</option>
              <option value="Birulia">Birulia</option>
              <option value="Akrain">Akrain</option>
              <option value="Kazipara">Kazipara</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Search Boat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MyForm;
