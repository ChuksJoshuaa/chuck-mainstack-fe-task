import { useState } from "react";
import { dashboardIcon, links } from "../utils/sidebarData";
import { logoUrl, userUrl } from "../utils/url";
import { useSelector } from "react-redux";
import { AiOutlineDash } from "react-icons/ai";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const { isSidebarOpen } = useSelector((state) => state.mainstack);

  return (
    <div className={`${isSidebarOpen ? "pr-5" : ""}`}>
      <div className={`${isSidebarOpen ? "px-[4em] py-4" : "p-3 ml-0.5 mt-1"}`}>
        <img src={logoUrl} alt="mainstack-logo" height="42px" width="42px" />
      </div>
      <div className="mt-3 pb-8 mb-8">
        <div className="">
          {links.map((item, index) => (
            <div
              key={index}
              className={`${isSidebarOpen ? "py-3" : "py-5 mx-4"}`}
            >
              <div
                className={`flex flex-row items-center justify-center mt-4 py-2 ${
                  selectedOption === "Dashboard" &&
                  item.title === "Dashboard" &&
                  isSidebarOpen
                    ? "border-l-[3px] border-[#FF5403]"
                    : "pr-3"
                }`}
                onClick={() => setSelectedOption("Dashboard")}
              >
                {item.title === "Dashboard" ? (
                  <span
                    className={` ${
                      selectedOption === "Dashboard"
                        ? "text-[#FF5403]"
                        : "text-gray-700"
                    } `}
                  >
                    {dashboardIcon()}
                  </span>
                ) : null}
                {isSidebarOpen ? (
                  <span
                    className={`text-[16px] leading-[24px] ${
                      item.title === "Dashboard"
                        ? "capitalize px-3"
                        : "uppercase tracking-wider pr-9 font-bold"
                    } ${
                      selectedOption === "Dashboard" &&
                      item.title === "Dashboard"
                        ? "text-[#FF5403] font-bold"
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </span>
                ) : null}
              </div>
              {item.links.map((link) => (
                <div
                  key={link.name}
                  className={`mt-3 flex flex-row items-center justify-center py-2 ${
                    selectedOption === link.name && isSidebarOpen
                      ? "border-l-[3px] border-[#FF5403]"
                      : "px-3"
                  } ${isSidebarOpen ? "pr-[3.8em]" : "pr-7"}`}
                  onClick={() => setSelectedOption(link.name)}
                >
                  <span
                    className={`${
                      selectedOption === link.name
                        ? "text-[#FF5403]"
                        : "text-gray-700"
                    } cursor-pointer`}
                  >
                    {link.icon}
                  </span>
                  {isSidebarOpen ? (
                    <span
                      className={`${
                        selectedOption === link.name
                          ? "text-[#FF5403] font-bold"
                          : "text-gray-700"
                      } px-3 text-[16px] leading-[24px]`}
                    >
                      {link.name}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-row justify-between flex-wrap pb-6 ${
          isSidebarOpen ? "px-4 py-3" : "pr-4"
        }`}
      >
        <div className="flex items-center justify-start pl-4">
          <img
            src={userUrl}
            alt="blessing-image"
            className="w-[32px] h-[32px] rounded-full"
          />
          {isSidebarOpen ? (
            <h3 className="text-gray-700 capitalize pl-2 text-gray-700 text-[15px] leading-[16px]">
              Blessing Daniels
            </h3>
          ) : null}
        </div>

        <AiOutlineDash
          className={`text-gray-900 font-bold cursor-pointer  ${
            isSidebarOpen
              ? "text-2xl font-bold mt-1"
              : "mt-3 ml-4 text-3xl font-bold"
          }`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
