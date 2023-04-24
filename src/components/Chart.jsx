import { useState } from "react";
import { timeData } from "../utils/dashboard";

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState("All Time");

  return (
    <div className="h-[600px]">
      <div className="flex flex-row items-center justify-start flex-wrap">
        {timeData.map((item, index) => (
          <button
            key={index}
            className={`mr-2 text-[14px] leading-[16px] rounded-[100px] py-2 px-3 ${
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
    </div>
  );
};

export default Chart;
