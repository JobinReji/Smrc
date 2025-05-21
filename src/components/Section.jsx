import React from "react";
import DataConsole from "./DataConsole";
import MISStat from "./MISStat";
import CrossTab from "./CrossTab";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

function Section() {
  return (
    <section className="w-full h-[84vh] relative">
      <div className="bg-[#132F62] absolute bottom-0 w-full h-[80%] -z-[2px] blur-[100px]"></div>
      <div className="absolute w-full h-full flex items-center">
        <div className="h-[98%] w-full flex justify-center items-stretch text-[#132F62]">
          <div className="bg-[#ffffff80] w-[98%] rounded-lg shadow_out p-2 h-full">
            <Outlet />
            {/* <DataConsole /> */}
            {/* <MISStat /> */}
            {/* <CrossTab /> */}
            {/* <Dashboard /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
