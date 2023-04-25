import { useSelector } from "react-redux";
import { colorSourceBg, flagSourceIcon } from "../utils/dashboard";
import { useState } from "react";
import Chart from "react-apexcharts";

const Sources = () => {
  const { sources } = useSelector((state) => state.mainstack);

  const [color, setColor] = useState([
    "#599EEA",
    "#844FF6",
    "#0FB77A",
    "#FAB70A",
    "#edd4b4",
  ]);

  const yes = () => {
    let value = sources.map((item) => ({ percent: item.percent }));
    value = value.map((item) => item.percent);
    value = [...value, 24];
    return value;
  };

  const series = yes();

  const labelData = () => {
    let value = sources.map((item) => ({ source: item.source }));
    value = value.map((item) => item.source);
    value = [...value, "Others"];
    return value;
  };

  const options = {
    labels: labelData(),
    parentHeightOffset: 0,
    colors: color,

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="bg-[#FFFFFF] border-[1px] border-[#EFF1F6] h-[auto] md:h-[350px] w-[100%]  rounded-[12px] my-3 lg:my-3 py-2 md:py-0">
      <div className="p-3 flex items-center flex-row justify-between">
        <h3 className="text-[18px] leading-[24px] font-bold">
          Top Referral Source
        </h3>
        <button className="text-[#FF5403] text-[14px] leading-[22px]">
          View full reports
        </button>
      </div>

      <div className="pt-5 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex flex-col w-[auto]">
          {sources?.map((item, index) => (
            <div
              className="px-4 py-2 flex flex-row flex-nowrap text-nowrap item-center justify-center md:justify-start"
              key={index}
            >
              <span className="text-[15px] mt-1">
                {flagSourceIcon(item.source)}
              </span>
              <span className="px-1 text-[16px] md:text-[14px] lg:text-[16px] leading-[140%] text-[#131316] capitalize">
                {item.source} <span className="font-bold">{item.percent}%</span>
              </span>
              <span
                className={`rounded-[100px] ${colorSourceBg(
                  item.source
                )} w-[12px] h-[12px] mt-1`}
              />
            </div>
          ))}
          <div className="px-9 pt-2 flex items-center flex-row justify-center md:justify-start">
            <span className="text-[16px] md:text-[14px] lg:text-[16px] leading-[140%] text-[#131316] pr-1">
              Others <span className="font-bold">24%</span>
            </span>
            <span
              className={`rounded-[100px] bg-[#edd4b4] w-[12px] h-[12px] mt-1 `}
            />
          </div>
        </div>
        <div className="donut">
          <Chart options={options} series={series} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default Sources;
