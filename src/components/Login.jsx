import React, { useState } from "react";
import ShapeImg from "../assets/images/rect.png";
import ImgBlob from "../assets/images/blob2.png";
import image1 from "../assets/images/image 1.png";
import EyeFill from "../assets/images/eye-fill.png";
import EyeCut from "../assets/images/eye-off-fill.png";
import LoginBtn from "../assets/images/login_btn.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError(true);
    } else {
      setError(false);
      console.log(username, password);
      navigate("/landing");
    }
  };
  return (
    <section>
      <div className="relative top-0 left-0 h-screen bg-[#cdcacd] overflow-hidden">
        <div className="absolute top-0 left-0 z-40 h-full">
          <img src={ShapeImg} className="h-full shadow_lft" alt="" />
        </div>
        <div className="absolute top-0 left-32 z-20 h-full">
          <img src={ShapeImg} className="h-full shadow_lft" alt="" />
        </div>
        <div className="absolute top-0 left-64 z-10 h-full">
          <img src={ShapeImg} className="h-full shadow_lft" alt="" />
        </div>
        <div className="absolute bottom-0 left-44 z-30 h-full flex items-end">
          <img src={ImgBlob} className="w-[30rem] -mb-12" alt="" />
        </div>

        <div className="flex flex-col gap-6 justify-center items-center h-full w-[30%] absolute right-32">
          <div className="w-full shadow_out p-12 bg-[#ffffff54] logInPos rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center m-2">
                <img src={image1} alt="SMRC logo" className="w-[80%]" />
              </div>
              <div className="text-[#132f62] text-4xl text-center font-bold my-12">
                Login
              </div>
              <div className="m-3">
                <div className="text-[#132f62] text-xl font-semibold m-1">
                  User Name
                </div>
                <div className="m-2">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-b-2 border-[#132f62] outline-none w-full bg-transparent"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="m-3">
                <div className="text-[#132f62] text-xl font-semibold m-1">
                  Password
                </div>
                <div className="m-2 flex justify-between items-center">
                  <input
                    type={isVisible ? "text" : "password"}
                    name=""
                    id="password"
                    className="border-b-2 border-[#132f62] outline-none w-[90%] bg-transparent"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={togglePassword} className="cursor-pointer">
                    <img id="eye" src={isVisible ? EyeCut : EyeFill} alt="" />
                  </button>
                </div>
              </div>
              {error && (
                <div className="text-center text-red-700 text-sm italic">
                  <span>Please Check your Username or Password</span>
                </div>
              )}
              <div className="mt-12 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#132f62] p-3 shadow_out cursor-pointer rounded-md"
                >
                  <img src={LoginBtn} className="w-8 cursor-pointer" />
                </button>
              </div>
            </form>
          </div>
          <div className="p-3 text-[#132f62] font-semibold">
            *The data shown on this portal is for demo purposes only
          </div>
        </div>
      </div>
    </section>
  );
}
