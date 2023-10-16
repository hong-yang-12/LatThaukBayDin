import React, { useEffect } from "react";
import { TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import BayDin from "../../data/baydin.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, setSearchTerm } from "../redux/slice/bayDinSlice";

const Questions = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();
  const handleClick = (questionNo, questionName) => {
    nav(`/detail`, {
      state: { questionNo: questionNo, questionName: questionName },
    });
  };

  useEffect(() => {
    dispatch(setQuestions(BayDin?.questions));
  }, [BayDin]);
  const questions = useSelector((state) => state.bayDinSlice.questions);
  const searchTerm = useSelector((state) => state.bayDinSlice.searchTerm);

  return (
    <div className="flex flex-col gap-2 bg-bg dark:bg-darkbg p-2">
      <TextInput
        icon={AiOutlineSearch}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        // onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="သိလိုသော မေးခွန်းများကို ရှာပါ"
        required
        color="failure"
      />
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
      {/* {BayDin?.questions
        ?.filter((q) => {
          if (searchTerm == "") {
            return q;
          } else if (q?.questionName.includes(searchTerm)) {
            return q;
          }
        })
        .map((q) => (
          // <Link key={q?.questionNo} to={`/detail/${q?.questionNo}`}>
          <button
            key={q?.questionNo}
            onClick={() => handleClick(q?.questionNo, q?.questionName)}
            type="button"
            className="w-full grid grid-cols-[1fr_10fr] text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
          >
            <span>{q.questionNo}.</span>
            <span>{q.questionName}</span>
          </button>
          // </Link>
        ))} */}
      <div className="grid  gap-1 xl:gap-3">
        {questions
          ?.filter((q) => {
            if (searchTerm == "") {
              return q;
            } else if (q?.questionName.includes(searchTerm)) {
              return q;
            }
          })
          .map((q) => (
            <button
              key={q?.questionNo}
              onClick={() => handleClick(q?.questionNo, q?.questionName)}
              type="button"
              className="w-full text-start grid grid-cols-[1fr_10fr] text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-rose-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-rose-800"
            >
              <span>{q.questionNo}.</span>
              <span>{q.questionName}</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default Questions;
