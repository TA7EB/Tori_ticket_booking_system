import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Table = () => {
  const [formData, setFormData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const storedFormData = localStorage.getItem("rideInfo");
    const parsedFormData = storedFormData ? JSON.parse(storedFormData) : null;
    setFormData(parsedFormData);
  }, []);

  let { data, isLoading } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      let res = await axios.post(`http://127.0.0.1:8000/api/list_schedule`).then();
      return res.data;
    },
  });

  if(isLoading){
    return <div>Loading.....</div>
  }






  console.log(data)

  
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
          {data.data.map((item, index) => (
            <tr key={index}>
              <td className="text-lg">{item.boat}</td>
              <td className="text-lg">{item.dep_time}</td>
              <td className="text-lg">{item.arr_time}</td>
              <td className="text-lg">{item.available_seat}</td>
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
