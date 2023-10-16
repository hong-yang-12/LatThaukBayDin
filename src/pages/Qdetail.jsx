import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BayDin from "../../data/baydin.json";

const Qdetail = () => {
  const location = useLocation();
  const { questionNo, questionName } = location.state;
  const numberList = BayDin?.numberList;
  const answerList = BayDin?.answers;

  //Obtain Key and Value from baydinJSON
  const [pickedEngNum, setPickedEngNum] = useState(1);
  const [pickedMyanNum, setPickedMyanNum] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (EngNum, MyanNum) => {
    setPickedEngNum(EngNum);
    setPickedMyanNum(MyanNum);
    // console.log(EngNum);

    //Finding Answer
    answerList?.filter((answer) => {
      if (
        answer?.questionNo === questionNo &&
        answer?.answerNo == pickedEngNum
      ) {
        setResult(answer?.answerResult);
      }
    });
  };

  return (
    <div className="w-full h-screen bg-bg dark:bg-darkbg p-2">
      <div className="hidden lg:flex items-end justify-between px-4 ">
        <h3 className="grid grid-cols-[1fr_9fr] text-btn dark:text-light text-xl p-3">
          <span>{questionNo}.</span>
          <span>{questionName}</span>
        </h3>
        <Link to={-1}>
          <button
            type="button"
            className="w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            နောက်သို့
          </button>
        </Link>
      </div>
      <div className="block lg:hidden items-end justify-between ">
        <Link to={-1}>
          <button
            type="button"
            className="w-full text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            နောက်သို့
          </button>
        </Link>
        <h3 className="grid grid-cols-[1fr_9fr] text-btn dark:text-light text-xl p-3">
          <span>{questionNo}.</span>
          <span>{questionName}</span>
        </h3>
      </div>
      <p className="dark:text-bg text-darkbg text-center px-3 mt-5 ">
        မျက်စိမှိတ်၍ အောက်ပါဂဏန်းများကို ကျပန်းနှိပ်ပါ။
      </p>
      {/* numberList */}
      <div className="grid grid-cols-9 p-5">
        {numberList.map((num, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(num?.key, num?.value)}
            type="button"
            className="text-white bg-btn hover:bg-hoverBtn focus:ring-4 focus:ring-focusBtn font-medium rounded-lg text-sm px-1 py-1.5 xl:px-5 xl:py-2.5 mr-2 mb-2 dark:bg-darkBtn dark:hover:bg-btn focus:outline-none dark:focus:ring-hoverBtn"
          >
            {num?.value}
          </button>
        ))}
      </div>
      {/* result */}
      <div className="grid gap-3 text-dark dark:text-bg p-5">
        <p>
          ရွေးချယ်ထားသော သင်၏နံပါတ် : ({" "}
          {pickedMyanNum ? pickedMyanNum : "မရွေးရသေးပါ။"} )
        </p>
        <p>အဖြေ : {result ? result : "နံပါတ်အရင်ရွေးပါ။"}</p>
      </div>
    </div>
  );
};

export default Qdetail;
