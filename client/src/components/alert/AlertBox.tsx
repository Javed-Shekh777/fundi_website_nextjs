import React from "react";
import { FaCheck } from "react-icons/fa";

const AlertBox = () => {
  return (
    <section className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)] `}>
      <div className="flex items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
      <div className="shadow p-10 sm:m-0 m-2 rounded-lg bg-white flex items-center flex-col justify-center">
        <div className="icon rounded-full  p-5 sm:p-8  green border-[15px] border-green-200/40 ">
          <FaCheck size={50} color="white" />
        </div>
        <h3 className="sm:text-4xl text-2xl  font-bold my-3 text-center  ">
          Phone Number Verified
        </h3>
        <p className="text-gray text-center text-lg">
          You will be redirected to the main pagein a few moments
        </p>
      </div>
      </div>

    </section>
  );
};

export default AlertBox;
