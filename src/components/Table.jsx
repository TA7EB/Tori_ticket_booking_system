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
      let res = await axios
        .post(`http://127.0.0.1:8000/api/list_schedule`)
        .then();
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  console.log(data);

  let handleProceedToPayment = (boatInfo) => {
    localStorage.setItem("boatInfo", JSON.stringify(boatInfo));
    navigate("/Payment");
  };

  return (
    <div className="overflow-x-auto p-10 m-10">
      <h1 className="my-4 text-center text-2xl font-bold">
        Available Boats for {formData?.fromLocation} to {formData?.toLocation}
      </h1>

      {/* <table className="table table-xs">
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
      </table> */}

      <div>
        <div className=" w-[80%] mx-auto grid grid-cols-2 gap-6">
          {data.data.map((item, index) => (
            <div className="border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-cyan-500 text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
              <div>
                <h1 className="text-[2em] font-medium">{item.boat}</h1>
                <p className="text-[16px]">Departure Time: {item.dep_time}</p>
                <p className="text-[16px]"> Arrival Time: {item.arr_time}</p>
                <p className="text-[16px]">
                  Available Seat: {item.available_seat}
                </p>
                <p className="text-[16px]">Fare: {item.fare}</p>
              </div>

              <button
                onClick={() => handleProceedToPayment(item)}
                className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
              >
                <p>Proceed</p>
                <svg
                  className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
                  stroke="currentColor"
                  stroke-width="1"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Table;
