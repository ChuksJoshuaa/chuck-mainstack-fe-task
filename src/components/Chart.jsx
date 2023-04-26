import { useState } from "react";
import { dateFormatter, timeData } from "../utils/dashboard";
import { useSelector } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Chartt from "react-apexcharts";

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState("All Time");
  const { data } = useSelector((state) => state.mainstack);

  let date = data?.graph_data?.views;

  const fetchRecord = () => {
    if (date !== undefined) {
      const dateCheck = Object.keys(date);
      let yearDate = dateCheck;
      yearDate = yearDate.map((item) => dateFormatter(item));
      return yearDate;
    }
  };

  const fetchData = () => {
    if (date !== undefined) {
      const dateCheck = Object.values(date);
      let yearDate = dateCheck;
      yearDate = yearDate.map((item) => item);
      return yearDate;
    }
  };

  const calculateTotal = () => {
    if (date !== undefined) {
      const dateCheck = Object.values(date);
      let yearDate = dateCheck;
      yearDate = yearDate.reduce((partialSum, a) => partialSum + a, 0);
      return yearDate;
    }
  };

  const xaxis = fetchRecord();
  const yaxis = fetchData();

  const options = {
    series: [
      {
        name: "",
        type: "area",
        data: yaxis,
      },
    ],
    chart: {
      height: 350,
      type: "line",
    },
    legend: {
      show: false,
    },
    parentHeightOffset: 0,
    stroke: {
      curve: "straight",
    },

    theme: {
      monochrome: {
        enabled: true,
        color: "#FF5403",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },

    labels: xaxis,
    markers: {
      disabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  return (
    <div className="h-[800px]">
      <div className="flex flex-row items-center justify-start flex-wrap pb-5">
        {timeData.map((item, index) => (
          <button
            key={index}
            className={`mr-2 text-[14px] leading-[16px] mb-2 rounded-[100px] py-2 px-3 ${
              selectedOption === item
                ? "border-[1px] border-[#FFDDCD] text-[#FF5403] font-bold bg-[#FFDDCD]"
                : "text-gray-500 border-[1px] border-[#EFF1F6]"
            }`}
            onClick={() => setSelectedOption(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-7 rounded-[12px] border-[1px] border-[#EFF1F6] bg-white">
        <div className="flex w-full flex-row flex-wrap justify-between items-center p-4">
          <div>
            <h3 className="text-[18px] leading-[24px] text-[#131316] tracking-[-1.5%] font-bold pb-2">
              Page Views
            </h3>
            <p className="text-[14px] leading-[20px] font-medium">All Time</p>
          </div>
          <AiOutlineInfoCircle className="text-[#31373D] text-2xl font-bolder" />
        </div>

        <h3 className="px-4 text-[48px] leading-[120%] tracking-wider font-bold">
          {calculateTotal()}
        </h3>

        <div className="donut">
          <Chartt
            options={options}
            series={options.series}
            type="area"
            width="100%"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
