import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Qdetail from "../pages/Qdetail";
import SearchFrontChar from "../pages/SearchFrontChar";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/detail" element={<Qdetail />} />
        <Route path="/searchFrontChar" element={<SearchFrontChar />} />
      </Routes>
    </div>
  );
};

export default Path;
