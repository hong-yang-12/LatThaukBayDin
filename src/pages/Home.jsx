// "use client";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mtk.jpeg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-rose-100 dark:bg-rose-900 p-2">
      <div className="w-full bg-rose-200 dark:bg-rose-800 text-btn dark:text-rose-50 text-center grid  items-center p-2 mb-5">
        <div className="grid justify-center">
          <img className="w-32 h-32 rounded-full" src={logo} alt="" />
        </div>
        <h1 className="text-5xl">လက်ထောက်ဗေဒင်</h1>
        <p className="text-lg my-5">သင့်ကံကြမ္မာကို ဆန်းစစ်ကြည့်မလား</p>
        <p className="font-thin text-end">
          Developed by{" "}
          <Link to={"https://www.facebook.com/nyan.l.htet.583234"}>
            <span className=" cursor-pointer underline">Nyan Lin Htet</span>{" "}
          </Link>
        </p>
      </div>

      {/* buttons */}
      <div className="flex justify-center">
        <Link to={"/questions"}>
          <button
            type="button"
            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            မေးခွန်းများကို ကြည့်မည်။
          </button>
        </Link>
        <Link to={"/searchFrontChar"}>
          <button
            type="button"
            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            မေးခွန်းများကို စာလုံးအစဖြင့် ရှူာမည်။
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
