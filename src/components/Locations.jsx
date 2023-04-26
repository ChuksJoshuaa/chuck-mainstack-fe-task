import { useSelector } from "react-redux";
import { colorBg, flagIcon } from "../utils/dashboard";
import Chart from "react-apexcharts";
import { useState } from "react";

const Locations = () => {
  const { locations } = useSelector((state) => state.mainstack);
  const [color, setColor] = useState([
    "#599EEA",
    "#844FF6",
    "#0FB77A",
    "#FAB70A",
    "#F7B538",
    "#edd4b4",
  ]);

  const yes = () => {
    let value = locations.map((item) => ({ percent: item.percent }));
    value = value.map((item) => Number(item.percent));
    value = [...value, 24];
    return value;
  };
  const series = yes();

  const labelData = () => {
    let value = locations.map((item) => ({ country: item.country }));
    value = value.map((item) => item.country);
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
      enabled: true,
      formatter: function (val, opts) {
        return `${opts.w.config.series[opts.seriesIndex]}%`;
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
    <div className="bg-[#FFFFFF] border-[1px] border-[#EFF1F6] h-[auto] md:h-[336px] w-[100%] rounded-[12px] mr-2 py-2 md:py-0">
      <div className="p-3 flex items-center flex-row justify-between">
        <h3 className="text-[18px] leading-[24px] font-bold">Top Locations</h3>
        <button className="text-[#FF5403] text-[14px] leading-[22px]">
          View full reports
        </button>
      </div>
      <div className="pt-5 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="flex flex-col w-[auto]">
          {locations?.map((item, index) => (
            <div
              className="px-4 py-2 flex flex-row item-center justify-center md:justify-start"
              key={index}
            >
              <span className="text-[15px]">{flagIcon(item.country)}</span>
              <span className="px-2 text-[16px] leading-[140%] text-[#131316] text-wrap">
                {item.country}{" "}
                <span className="font-bold">{item.percent}%</span>
              </span>
              <span
                className={`rounded-[100px] ${colorBg(
                  item.country
                )} w-[12px] h-[12px] mt-1`}
              />
            </div>
          ))}
          <div className="px-9 pt-2 flex items-center flex-row justify-center md:justify-start pb-3">
            <span className="text-[16px] leading-[140%] text-[#131316] pr-2">
              Others <span className="font-bold">24%</span>
            </span>
            <span
              className={`rounded-[100px] bg-[#edd4b4] w-[12px] h-[12px]`}
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

export default Locations;
