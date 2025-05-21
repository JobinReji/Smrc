import bg_img from "../assets/images/menu_back.png";
import image1 from "../assets/images/image 1.png";
import back from "../assets/images/left-arrow.png";
import menu1 from "../assets/images/t1.png";
import menu2 from "../assets/images/t2.png";
import menu3 from "../assets/images/t3.png";
import menu4 from "../assets/images/t4.png";
import menu5 from "../assets/images/t5.png";
import { useNavigate } from "react-router-dom";
export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <section
      className="w-screen h-screen bg-no-repeat bg-center bg-cover relative"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <header className="flex justify-between w-full">
        <div className="p-5">
          <img src={image1} className="w-72" alt="Logo" />
        </div>
        <div className="p-5 flex flex-col gap-1 items-center text-white">
          <div className="text-4xl font-semibold p-2">
            Shopper Hub - Quick Access
          </div>
          <div className="text-2xl p-2">
            Access your surveys, cross-tabs, and analytics instantly
          </div>
        </div>
        <div className="p-5 cursor-pointer">
          <img
            src={back}
            alt="Back"
            title="Back"
            onClick={() => navigate("/landing")}
          />
        </div>
      </header>
      <div className="flex items-center justify-evenly absolute bottom-[20%] w-full">
        <MenuBtns
          path={menu1}
          text="Survey Response Zone"
          className="w-24"
          onClick={() => navigate("/survey")}
        />
        <MenuBtns
          path={menu2}
          text="Data Management Console"
          className="w-20"
          onClick={() => navigate("/section/dataconsole")}
        />
        <MenuBtns
          path={menu3}
          text="MIS Status"
          className="w-32"
          onClick={() => navigate("/section/misstat")}
        />
        <MenuBtns
          path={menu4}
          text="Cross Tabs"
          className="w-20"
          onClick={() => navigate("/section/crosstab")}
        />
        <MenuBtns
          path={menu5}
          text="Dashboard"
          className="w-24"
          onClick={() => navigate("/section/dashboard")}
        />
      </div>
    </section>
  );
}

function MenuBtns({ path, text, onClick, ...props }) {
  return (
    <div
      className="flex items-center justify-center flex-col w-60 h-60 gap-4 p-5 rounded-xl bg-[#ffffff3a] hover:bg-[#ffffff7c] transition-colors backdrop-blur-md cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full flex justify-center">
        <img src={path} alt="Icon" {...props} />
      </div>
      <div className="text-white text-xl text-center font-semibold">{text}</div>
    </div>
  );
}
