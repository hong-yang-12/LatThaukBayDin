import React from "react";
import { useNavigate } from "react-router-dom";

const words = [
  "က",
  "ခ",
  "ဂ",
  "ဃ",
  "င",
  "စ",
  "ဆ",
  "ဇ",
  "ဈ",
  "ည",
  "ဋ",
  "ဌ",
  "ဍ",
  "ဎ",
  "ဏ",
  "တ",
  "ထ",
  "ဒ",
  "ဓ",
  "န",
  "ပ",
  "ဖ",
  "ဗ",
  "ဘ",
  "မ",
  "ယ",
  "ရ",
  "လ",
  "ဝ",
  "သ",
  "ဟ",
  "ဠ",
  "အ",
];

const SearchFrontChar = () => {
  const nav = useNavigate();
  return (
    <div className="w-full h-screen bg-bg dark:bg-darkbg p-2">
      <div className="flex justify-between px-4">
        <h3 className="text-2xl mb-5 dark:text-rose-50">မေးခွန်းများ</h3>
        <button
          onClick={() => nav("/")}
          type="button"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
        >
          နောက်သို့
        </button>
      </div>
      <div className="grid grid-cols-3">
        {words.map((word) => (
          <button
            onClick={() => nav("/questions")}
            type="button"
            className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            {word} နှင့်စသော မေးခွန်းများ
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFrontChar;
