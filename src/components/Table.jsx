import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [formData, setFormData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const storedFormData = localStorage.getItem("rideInfo");
    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : null;
    setFormData(parsedFormData);
  }, []);

  let availableBoats = [
    {
      name: "Sampan-3",
      departureTime: "10:00 AM",
      arrivalTime: "11:30 AM",
      availableSeat: 20,
      fare: 90,
    },
    {
      name: "Sampan-5",
      departureTime: "10:30 AM",
      arrivalTime: "11:45 AM",
      availableSeat: 12,
      fare: 100,
    },
    {
      name: "Sampan-9",
      departureTime: "09:30 AM",
      arrivalTime: "10:45 AM",
      availableSeat: 8,
      fare: 120,
    },
  ];

  let handleProceedToPayment = (boatInfo) => {
    localStorage.setItem("boatInfo", JSON.stringify(boatInfo));
    navigate("/Payment");
  };

  return (
    <div className="overflow-x-auto p-10 m-10">
      <h1 className="my-4 text-center text-2xl font-bold">
        Available Boats for {formData?.fromLocation} to {formData?.toLocation}
      </h1>

      <table className="table table-xs">
        <thead>
          <tr className=" font-bold bg-green-600 text-white text-xl">
            <th>Boat</th>
            <th>Dep.Time</th>
            <th>Arr. Time</th>
            <th>Seat Availble</th>
            <th>Fare</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {availableBoats.map((item, index) => (
            <tr key={index}>
              <td className="text-lg">{item.name}</td>
              <td className="text-lg">{item.departureTime}</td>
              <td className="text-lg">{item.arrivalTime}</td>
              <td className="text-lg">{item.availableSeat}</td>
              <td className="text-lg">{item.fare}</td>
              <td className="text-lg">
                <button
                  onClick={() => handleProceedToPayment(item)}
                  className="bg-teal-400 font-bold p-2 rounded-lg"
                >
                  Proceed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
