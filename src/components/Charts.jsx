import React from "react";
import ReactECharts from "echarts-for-react";

export default function Charts() {
  return (
    <div className="h-[50%]">
      <div className="relative flex items-center justify-center">
        <div className="flex justify-center text-xl font-bold text-[#464646]">
          Survey Completion per Day
        </div>
        <div className="text-[#132F62] font-semibold absolute right-0">
          n=12
        </div>
      </div>
      <div className="h-full">
        <ReactECharts option={option} />
      </div>
    </div>
  );
}

const option = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["2025-01-02", "2025-01-03", "2025-01-06"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [2, 1, 1],
      type: "line",
      areaStyle: {},
    },
  ],
};
