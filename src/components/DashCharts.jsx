import React from "react";
import ReactECharts from "echarts-for-react";

function InquireAboutPurchase() {
  return (
    <ReactECharts option={option1} style={{ height: "250px", width: "100%" }} />
  );
}
function ConsiderationOfPurchase() {
  return (
    <ReactECharts option={option2} style={{ height: "250px", width: "100%" }} />
  );
}
function TimeOfPlanningToPurchase() {
  return (
    <ReactECharts option={option3} style={{ height: "220px", width: "100%" }} />
  );
}
function RecommendYourFamily() {
  return (
    <ReactECharts option={option4} style={{ height: "120px", width: "100%" }} />
  );
}

const option1 = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const option2 = {
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu"],
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const option3 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "2%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "60%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: false,
        fontSize: 8,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Within One week" },
        { value: 735, name: "Within 2-3 week" },
        { value: 580, name: "Within 1-2 Months" },
        { value: 484, name: "Within 3-6 Months" },
        { value: 300, name: "Within 6-12 Months" },
      ],
    },
  ],
};

const option4 = {
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c} ({d}%)", // Show name, value, and percentage in the tooltip
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "70%"],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      label: {
        show: true,
        position: "outside",
        formatter: "{b} {d}%", // Show label as "Yes 83%" or "No xx%"
        color: "#000", // Label text color
        fontWeight: "bold",
      },
      labelLine: {
        length: 10,
        length2: 15,
        smooth: true,
      },
      data: [
        { value: 1048, name: "Yes", itemStyle: { color: "#0F9ED5" } }, // "Yes" in green
        { value: 735, name: "No", itemStyle: { color: "#156082" } }, // "No" in red
      ],
    },
  ],
};

export {
  InquireAboutPurchase,
  ConsiderationOfPurchase,
  TimeOfPlanningToPurchase,
  RecommendYourFamily,
};
