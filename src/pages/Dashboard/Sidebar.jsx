const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-4 px-10 rounded-s-xl">
      <ul>
        <li className="mb-2">
          <a href="#boat" className="hover:text-gray-400 text-xl">
            Boat
          </a>
        </li>
        <li className="mb-2">
          <a href="#driver" className="hover:text-gray-400 text-xl">
            Driver
          </a>
        </li>
        <li className="mb-2">
          <a href="#route" className="hover:text-gray-400 text-xl">
            Route
          </a>
        </li>
        <li className="mb-2">
          <a href="#trip" className="hover:text-gray-400 text-xl">
            Trip
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
