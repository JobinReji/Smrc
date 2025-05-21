import React from "react";
import image1 from "../assets/images/image 1.png";
import background from "../assets/images/background.png";
import box from "../assets/images/box.png";
import rightArrow from "../assets/images/right-arrow.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-screen h-screen flex overflow-hidden justify-center items-start"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="triangle mt-10"></div>
        <div className="z-10 flex flex-col w-[30%] text-center">
          <div className="flex justify-center py-8 mt-20">
            <img src={image1} className="w-72" alt="" />
          </div>
          <div>
            <div className="text-3xl font-bold text-[#132f62] py-6">
              Shoppers Edge
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center py-2 px-10 font-semibold">
                A study on Shopper behavior at the showroom & factors
                influencing the purchase preference
              </p>
              <p className="text-center py-4 px-10 font-semibold">
                Custom based tool offering End-to-End Research Solutions, right
                from data capture with real-time MIS & Crosstabs, and Reporting
                Dashboards with appealing visuals
              </p>
            </div>
          </div>
          <div className="mt-8">
            <img src={box} alt="" />
          </div>
        </div>
      </div>
      <div className="square"></div>
      <div className="cursor-pointer square2" onClick={() => navigate("/menu")}>
        <img src={rightArrow} alt="Next" />
      </div>
    </>
  );
}
