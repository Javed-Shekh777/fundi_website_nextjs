"use client";
import React from "react";
import JobTabs from "@/components/jobTabs/JobTabs";
import Link from "next/link";
const AppliedJobPage = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <section className={`postJob `}>
        <div className={`  py-0`}>
          <div className={` lg:px-[150px] sm:px-[20px] px-[10px]`}>
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
                          Applied Job
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
                          <Link
                            href={"/jobs/applied-job/job-details"}
                            className="rounded-lg text-center cursor-pointer  tracking-wide w-48   py-2 green text-white text-[1rem]"
                            type="button"
                          >
                            Show Details
                          </Link>
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
    </>
  );
};

export default AppliedJobPage;
