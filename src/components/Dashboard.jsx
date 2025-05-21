import React from "react";
import {
  InquireAboutPurchase,
  ConsiderationOfPurchase,
  TimeOfPlanningToPurchase,
  RecommendYourFamily,
} from "./DashCharts";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/4.png";
import img4 from "../assets/images/10.png";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Tools />
      </div>
      <div className="flex justify-around h-[40%] m-4">
        <div className="w-[25%] flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-full">
          <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
            Gender
          </div>
          <div className="mt-8 flex items-center justify-around w-[80%]">
            <div className="p-2 m-2 bg-[#132F62] text-white rounded-lg">
              53%
            </div>
            <img src={img1} alt="" className="w-32" />
            <div className="p-2 m-2 bg-[#132F62] text-white rounded-lg">
              47%
            </div>
          </div>
        </div>
        <div className="w-[25%] flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-full">
          <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
            Currently own a vehicle
          </div>
          <div className="mt-5">
            <div className="flex gap-16 font-bold mt-4 justify-center">
              <div className="text-[#7EAD51]">53%</div>
              <div className="text-[#DD5F5F]">47%</div>
            </div>
            <img src={img2} className="w-40 my-4" alt="" />
          </div>
        </div>
        <div className="w-[35%] flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-full">
          <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
            Inquire about purchasing
          </div>
          <div className="mt-5 h-full w-full">
            <InquireAboutPurchase />
          </div>
        </div>
      </div>
      <div className="flex justify-around h-[40%] mt-8">
        <div className="w-[35%] flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-full">
          <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
            Consideration of purchase
          </div>
          <div className="mt-5 h-full w-full">
            <ConsiderationOfPurchase />
          </div>
        </div>
        <div className="w-[30%] flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-full">
          <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
            Time of planning to purchase
          </div>
          <div className="mt-5 h-full w-full">
            <TimeOfPlanningToPurchase />
          </div>
        </div>
        <div className="w-[30%] h-full">
          <div className="w-full flex flex-col items-center justify-evenly relative bg-white rounded-lg shadow_out h-[60%]">
            <div className="bg-[#132F62] text-white shadow-lg absolute top-0 -mt-3 mb-4 px-8 py-1 rounded-lg">
              Recommend your Family/ friends
            </div>
            <div className="mt-5 h-full w-full flex justify-around items-center">
              <div className="w-[70%]">
                <RecommendYourFamily />
              </div>
              <div className="w-30%">
                <img src={img3} alt="" className="w-32" />
              </div>
            </div>
          </div>
          <div className="h-[35%] flex items-center mt-6">
            <div className="w-[40%] m-4 py-4 text-2xl flex text-white flex-col items-center justify-evenly relative bg-[#132F62] rounded-lg shadow_out">
              <div className="bg-white text-sm text-[#132F62] shadow-lg absolute top-0 -mt-3 mb-4 px-4 rounded-lg">
                Down Payment
              </div>
              ₹ 20,000 Avg
            </div>
            <div className="w-[46%] z-10">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Tools() {
  return (
    <div className="flex justify-center gap-4 items-center w-full relative">
      <Filter labelTxt="Filter 1" />
      <Filter labelTxt="Filter 2" />
      <Filter labelTxt="Filter 3" />
      <div className="text-[#132F62] font-semibold absolute right-0">n=12</div>
    </div>
  );
}

function Filter({ labelTxt }) {
  return (
    <>
      <div>
        <label>{labelTxt}</label>
        <select
          name=""
          id=""
          className="bg-[#132F62] text-white rounded-lg px-2 py-1 text-sm w-44 m-2 cursor-pointer"
        >
          <option value="">--Select--</option>
        </select>
      </div>
    </>
  );
}
