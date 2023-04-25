import { useSelector } from "react-redux";
import { BsCloudSunFill } from "react-icons/bs";
import { Locations, Sources, Chart } from "./";

const Dashboard = () => {
  const { isSidebarOpen } = useSelector((state) => state.mainstack);
  return (
    <div
      className={`h-screen overflow-y-auto pb-8 relative ${
        isSidebarOpen ? "mr-72" : "mr-20"
      }`}
    >
      <h3 className="tracking-tight font-bold text-[#131316] text-[20px] leading-[24px] py-6 px-4 md:px-9">
        Dashboard
      </h3>

      <div className="py-3 px-4 md:px-9 flex justify-between items-center flex-wrap">
        <div className="flex flex-col">
          <div className="flex pb-2 justify-start items-center flex-wrap text-[24px] text-[#131316] leading-[32px] text-nowrap">
            <h3 className="pr-1">Good morning,</h3>
            <span className="flex">
              Blessing <BsCloudSunFill className="text-gray-600" />{" "}
            </span>
          </div>
          <p className="text-[14px] text-[#31373D] leading-[22px]">
            Check out your dashboard summary.
          </p>
        </div>
        <button className="text-[14px] leading-[22px] text-[#FF5403]">
          View analytics
        </button>
      </div>

      <div className="py-3 px-4 md:px-9 flex flex-col">
        <Chart />
        <div className="flex flex-col lg:flex-row w-full justify-center md:justify-between items-center">
          <Locations />
          <Sources />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
