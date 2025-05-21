import React from "react";
import img1 from "../assets/images/image 1.png";
import back from "../assets/images/left-arrow.png";
import logOut from "../assets/images/fa6-solid_power-off.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex">
      <div className="p-4 w-[15%] justify-center items-center flex">
        <img className="w-[200px]" src={img1} alt="Logo" />
      </div>
      <div className="w-[85%]">
        <div className="w-full relative right-0 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="83"
            viewBox="0 0 100% 83"
            fill="none"
          >
            <path
              d="M47.0452 0H1983V83H20.6529C3.70422 83 -5.56167 63.2393 5.27734 50.2096L47.0452 0Z"
              fill="#132F62"
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex">
            <div className="ml-12 w-12 flex items-center cursor-pointer">
              <img
                src={back}
                alt="Back"
                title="Back"
                onClick={() => navigate("/menu")}
              />
            </div>
            <div className="w-[86%] flex justify-center items-center text-4xl font-bold text-[#cdcacd]">
              Shoppers Edge
            </div>

            <div className="w-10 flex items-center cursor-pointer">
              <img
                src={logOut}
                alt="Logout"
                title="Logout"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
