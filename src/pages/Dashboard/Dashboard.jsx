import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
