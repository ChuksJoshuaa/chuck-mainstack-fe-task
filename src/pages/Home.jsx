import { Sidebar, Dashboard } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { isSidebarOpen } = useSelector((state) => state.mainstack);

  return (
    <div>
      {isSidebarOpen ? (
        <div className="w-72 overflow-y-auto fixed bg-white border-2 border-gray-100 h-screen">
          <Sidebar />
        </div>
      ) : (
        <div className="w-20 overflow-y-auto fixed dark:bg-secondary-dark-bg border-2 border-gray-100 h-screen">
          <Sidebar />
        </div>
      )}
      <div
        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen ${
          isSidebarOpen ? "ml-72" : "ml-20"
        }`}
      >
        <div className="fixed h-screen bg-main-bg dark:bg-main-dark-bg w-full overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Home;
