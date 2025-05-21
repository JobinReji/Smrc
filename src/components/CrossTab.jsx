import React, { useState, useRef, useEffect } from "react";
import CTtable from "./CTtable";
import filter from "../assets/images/mdi_table-filter.png";

export default function CrossTab() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="m-3 font-semibold">Percentage</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="m-3 font-semibold">Count</span>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <label>Select Row</label>
            <select
              name=""
              id=""
              className="bg-[#132F62] text-white rounded-lg p-1 w-60 m-2 cursor-pointer"
            >
              <option value="">--Select--</option>
            </select>
          </div>
          <div>
            <label>Select Column</label>
            <select
              name=""
              id=""
              className="bg-[#132F62] text-white rounded-lg p-1 w-60 m-2 cursor-pointer"
            >
              <option value="">--Select--</option>
            </select>
          </div>
          <div>
            <button className="px-2 pt-2 pb-1 bg-[#132F62] rounded-lg text-white">
              <img src={filter} alt="Generate" />
            </button>
          </div>
        </div>
        <div>
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="px-2 py-1 bg-[#132F62] rounded-lg dropbtn"
            >
              Sort
            </button>
            {isOpen && (
              <div className="absolute mt-1 bg-white shadow-lg rounded-lg min-w-[100px] z-50 right-0">
                <p className="px-2 font-bold">Rows</p>
                <button className="listBtn hover:bg-slate-400 w-full">
                  A → Z
                </button>
                <button className="listBtn hover:bg-slate-400 w-full">
                  Z → A
                </button>
                <p className="px-2 font-bold">Columns</p>
                <button className="listBtn hover:bg-slate-400 w-full">
                  A → Z
                </button>
                <button className="listBtn hover:bg-slate-400 w-full">
                  Z → A
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-[95%] -mt-5">
        <div className="table-container2_copy">
          <CTtable />
        </div>
      </div>
    </>
  );
}
