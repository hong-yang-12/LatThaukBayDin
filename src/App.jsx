import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import Path from "./routes/Path";

const App = () => {
  return (
    <div className="container 2xl:w-2/3 mx-auto bg-bg dark:bg-darkbg ">
      <div className="text-end me-2 py-1">
        <DarkThemeToggle />
      </div>
      <Path />
    </div>
  );
};

export default App;
