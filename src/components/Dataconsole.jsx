import React from "react";
import download from "../assets/images/download.png";
import DCTable from "./DCTable";

function DataConsole() {
  return (
    <>
      <div className="flex relative justify-center items-center h-10">
        <div className="font-bold text-xl">No. of records : 100</div>
        <div className="absolute flex right-0 items-center">
          <div className="flex items-center">
            <button className="cursor-pointer mr-2">
              <img src={download} alt="Download" />
            </button>
          </div>
          <div className="flex items-center">
            <span className="m-3 font-semibold">Value</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="m-3 font-semibold">Labels</span>
          </div>
        </div>
      </div>
      <div className="h-[90%] -mt-5">
        <div className="table-container_copy">
          <DCTable />
        </div>
      </div>
    </>
  );
}

export default DataConsole;
