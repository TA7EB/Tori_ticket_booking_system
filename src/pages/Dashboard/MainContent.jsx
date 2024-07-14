import { useLocation } from "react-router-dom";
import BoatTable from "./BoatTable";
import DriverTable from "./DriverTable";
import RouteTable from "./RouteTable";
import TripTable from "./TripTable";

const MainContent = () => {
  const location = useLocation();
  const hash = location.hash;

  return (
    <div className="flex-1 p-4 bg-[#a3eed9] rounded-e-lg">
      <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h2>

      <div>
        {hash === "#boat" && <BoatTable />}

        {hash === "#driver" && <DriverTable />}

        {hash === "#route" && <RouteTable />}

        {hash === "#trip" && <TripTable />}

        {!hash && (
          <div className="text-xl flex flex-col justify-center items-center mx-auto font-bold">
            <img className="w-[400px]" src="./welcome.png" alt="" />

            <p className="text-2xl font-bold mt-4">
              Manage boats, drivers, routes and trips.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
