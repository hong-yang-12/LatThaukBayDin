import React from "react";
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-5">
      <Spinner aria-label="Failure spinner example" color="failure" />
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
