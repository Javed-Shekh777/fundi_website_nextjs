"use client";
import React, { useRef, useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import BidderProfile from "@/components/bidderProfile/BidderProfile";
import JobTabs from "@/components/jobTabs/JobTabs";
import useClickOutside from "@/hooks/useClickOutside";
const BidJobPage = () => {
  const arr = [1, 2, 3, 4, 5];

  const [showBidders, setShowBidders] = useState(false);
  const [showBidderFilter, setShowBidderFilter] = useState(false);
  const bidderFilterRef = useRef(null);
  const bidderRf = useRef<HTMLButtonElement>(null);

  useClickOutside(bidderRf as React.RefObject<HTMLElement>, () =>
    setShowBidders(false)
  );

  return (
    <>
      <section className={`postJob `}>
        <div className={`  py-0`}>
          <div className={`  lg:px-[150px] sm:px-[20px] px-[10px]`}>
            {/* <div className="filters text-[18px] px-2 py-2  flex items-center justify-between ">
              <div className="but sm:hidden block">
                <FaBarsStaggered size={30} />
              </div>
              <button className="flex items-center ">
                <p>Filter</p>
                <MdOutlineFilterAlt size={30} />
              </button>
            </div> */}

            <JobTabs />

            <div className="allbids my-14">
              <div className="bidsWrapper">
                <div className="bids flex flex-col space-y-20">
                  {arr.map((bid) => (
                    <div
                      key={bid}
                      className="bid sm:px-4 px-2 rounded-lg border border-black "
                    >
                      <div className="boxHeader flex items-center justify-between  py-4 sm:px-5 px-2 border-b border-b-black">
                        <p className="text-[#2E2E2E] font-bold">2RTO782U13</p>
                        <p className=" w-32 text-center py-2  rounded-lg bg-green-300 text-green">
                          Bid
                        </p>
                      </div>
                      <div className="boxBody ">
                        <div className="boxBodyTop text-[#666666] space-y-4 sm:px-5 px-2  py-4  border-b border-b-black">
                          <div className="box  flex items-center ">
                            <p className="lable flex-1 font-[400] ">
                              Service Category
                            </p>
                            <p className="value flex-1 font-[500]">Plumbring</p>
                          </div>
                          <div className="box  flex items-center ">
                            <p className="lable flex-1 font-[400]">
                              Sub Category
                            </p>
                            <p className="value flex-1 font-[500]">
                              Pipe Installation
                            </p>
                          </div>
                          <div className="box  flex    ">
                            <p className="lable flex-1 font-[400]">
                              Description
                            </p>
                            <p className="value flex-1 font-[500]  ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                          <div className="box  flex items-center  ">
                            <p className="lable flex-1 font-[400]">
                              Date & Time
                            </p>
                            <p className="value flex-1 font-[500] sm:flex-row flex-col flex-wrap flex sm:items-center gap-x-4">
                              <span>05/01/2025</span>
                              <span className="sm:text-left text-center">
                                &
                              </span>
                              <span>Morning 9 to 2</span>
                            </p>
                          </div>
                          <div className="box  flex items-center ">
                            <p className="lable flex-1 font-[400]">Location</p>
                            <p className="value flex-1 font-[500]">
                              123, Street Name, Landmark, City
                            </p>
                          </div>
                        </div>
                        <div className="boxBodyBottom  sm:px-5 px-2 py-4 mt-4  flex items-center justify-center">
                          <button
                            onClick={() => setShowBidders(true)}
                            ref={bidderRf}
                            className="rounded-lg cursor-pointer  tracking-wide w-48   py-2 green text-white text-[1rem]"
                            type="button"
                          >
                            Show Bidders
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showBidders && (
        <section
          className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="flex   items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
            <div className="shadow  w-[500px]   rounded-2xl bg-white flex items-center flex-col justify-center">
              <p className=" green text-white py-4 px-3  text-xl w-full rounded-tl-2xl rounded-tr-2xl font-bold   text-center  ">
                Bidders
              </p>
              <div className="relative filterBtn flex items-end justify-end w-full">
                <div
                  ref={bidderFilterRef}
                  onClick={() => setShowBidderFilter(!showBidderFilter)}
                  className=" flex items-center text-base pr-3 py-2"
                >
                  <p>Filter</p>
                  <MdOutlineFilterAlt size={30} />
                </div>
                {showBidderFilter && (
                  <ul className="filterOptions   z-[150] bg-white shadow-lg list-none py-3 px-2 rounded-lg absolute right-2 top-[40px]">
                    <li className="py-1 px-2 hover:bg-slate-200 rounded-lg">
                      Ascending to Price
                    </li>
                    <li className="py-1 px-2 hover:bg-slate-200 rounded-lg">
                      Descending to Price
                    </li>
                    <li className="py-1 px-2 hover:bg-slate-200 rounded-lg">
                      Ascending to Rating
                    </li>
                  </ul>
                )}
              </div>

              <div className="bidders my-2 overflow-y-auto h-72">
                <BidderProfile />
                <BidderProfile />
                <BidderProfile />
                <BidderProfile />
                <BidderProfile />
                <BidderProfile />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BidJobPage;
