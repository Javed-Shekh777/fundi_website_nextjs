import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

type Data = {
  title: string;
  price: string;
  packageDuration: string;
  noOfBid: string;
  featuredTask: string;
  taskAllowed: boolean;
  featuredTaskDuration: string;
};
type Props = {
  isButton: boolean;
  isFlexRow: string;
  data: Data;
};
const SubcriptionPackage = ({
  isButton = true,
  isFlexRow = "",
  data,
}: Props) => {
  return (
    <div className="plan bg-[#F4F4F4] rounded-2xl py-6 px-4 w-full">
      <div
        className={`planHead mb-5 items-center flex ${
          isFlexRow ? isFlexRow : "flex-col"
        } `}
      >
        <h3 className="title text-gray font-semibold text-3xl ">
          {data.title}
        </h3>
        <div className="flex flex-col items-center">
          <h1 className="price flex items-center text-4xl text-green font-bold mt-2">
            <MdCurrencyRupee />
            {data.price}
          </h1>
          <span className="text-[15px] text-gray m-0 p-0 ">In all taxes</span>
        </div>
      </div>
      <div className="planBottom">
        <ul className="planBottomList text-[15px]">
          <li className="flex items-center border-b-[1px] justify-between border-b-[#28A745] py-3 px-4 text-[#2E2E2E]">
            <p className="key ">Package Duration</p>
            <p className="value ">{data.packageDuration}</p>
          </li>
          <li className="flex items-center border-b-[2px] justify-between border-b-[#28A745] py-3 px-4 text-[#2E2E2E]">
            <p className="key ">Number of Bid to Post</p>
            <p className="value ">{data.noOfBid} Bid</p>
          </li>
          <li className="flex items-center border-b-[1px] justify-between border-b-[#28A745] py-3 px-4 text-[#2E2E2E]">
            <p className="key ">Featured Task</p>
            <p className="value">{data.featuredTask} Allowed</p>
          </li>
          <li className="flex items-center border-b-[2px] justify-between border-b-[#28A745] py-3 px-4 text-[#2E2E2E]">
            <p className="key  ">Task Plan Allowed</p>
            <p className="value">{data.taskAllowed && <FaCheck />}</p>
          </li>
          <li className="flex items-center justify-between py-3 px-4 text-[#2E2E2E]">
            <p className="key">Featured Task Duration</p>
            <p className="value">{data.featuredTaskDuration}</p>
          </li>
        </ul>
        {isButton && (
          <div className="flex items-center justify-center my-5">
            <button className="rounded-lg cursor-pointer sm:w-44 w-full text-center self-center  tracking-wide       py-2 green text-white text-[1rem]">
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcriptionPackage;
