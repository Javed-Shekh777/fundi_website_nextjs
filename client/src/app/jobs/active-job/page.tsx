"use client";
import React from "react";
import JobTabs from "@/components/jobTabs/JobTabs";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
// import profileImage from "../../../../public/verified1.svg";

const ActiveJobPage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className={`postJob `}>
      <div className={`  py-0`}>
        <div
          className={` lg:px-[150px] sm:px-[20px] px-[10px]`}
        >
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
          <section className="activeJobs my-10">
            <div className="activeJobsContainer flex flex-col space-y-14">
              {arr?.map((item) => (
                <div
                  key={item}
                  className="bid sm:px-4 px-2 rounded-lg border border-black "
                >
                  <div className="boxHeader flex items-center justify-between  py-4 sm:px-5 px-2 border-b border-b-black">
                    <p className="text-[#2E2E2E] font-bold">2RTO782U13</p>
                    <p className=" w-32 text-center py-2  rounded-lg  text-[#CEBC35] bg-yellow-100">
                      Active Job
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
                        <p className="lable flex-1 font-[400]">Sub Category</p>
                        <p className="value flex-1 font-[500]">
                          Pipe Installation
                        </p>
                      </div>
                      <div className="box  flex    ">
                        <p className="lable flex-1 font-[400]">Description</p>
                        <p className="value flex-1 font-[500]  ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                      <div className="box  flex items-center  ">
                        <p className="lable flex-1 font-[400]">Date & Time</p>
                        <p className="value flex-1 font-[500] sm:flex-row flex-col flex-wrap flex sm:items-center gap-x-4">
                          <span>05/01/2025</span>
                          <span className="sm:text-left text-center">&</span>
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

                    <div className="sm:px-8 space-y-6 ">
                      <h1 className="text-2xl  p-0 sm:my-2 my-3 sm:text-left text-center text-[#2E2E2E] font-[600] ">
                        Fundi Details
                      </h1>
                      <div className="bidderProfileTop   flex sm:flex-row flex-col sm:gap-y-0 gap-y-5  justify-between">
                        <div className="leftInfo flex sm:items-center sm:w-[70%] w-full     sm:p-0 px-3 items-start flex-wrap md:gap-x-[30px] gap-x-0  ">
                          <div className="imageBox sm:w-auto w-full sm:mb-0 mb-3 flex items-center justify-center ">
                            <div className="image z-[10]    sm:w-full w-fit rounded-full border-[2px] border-[#2E2E2E] p-2">
                              <Image
                                src={"/verified1.svg"}
                                height={70}
                                width={130}
                                className="rounded-full"
                                alt="Bidder Image"
                              />
                            </div>
                          </div>
                          <div className="bidderWork md:w-[50%] w-full  ">
                            <div className="flex items-center mb-2  justify-between   ">
                              <h1 className="username   text-[22px]">Alex</h1>
                              <div className="stars  flex items-center gap-x-1">
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#D9D9D9]" />
                              </div>
                            </div>
                            <p className="">
                              Plubmbing, Cleaning, Appliance Repair,
                              Installation, Uninstallation, Repair
                            </p>
                          </div>
                        </div>
                        <div className="RightInfo   rounded-2xl  ">
                          <div className="bidderFees w-full space-y-2 flex xxl:p-20 xl:p-16 p-0 flex-col items-center">
                            <h1 className="fees text-[24px] ">$123</h1>
                            <div className="text-gray sm:w-fit text-center w-full bg-slate-400/20 m-0 px-3 py-2 rounded whitespace-nowrap">
                              Work On Progresss
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="boxBodyBottom bg-[#F4F4F4] sm:px-5 px-2 py-4 shadow-lg  w-full">
                        <textarea
                          name=""
                          id=""
                          rows={4}
                          placeholder="Write a review "
                          className="w-full resize-none placeholder:text-gray placeholder:text-[1rem] border-0 outline-0 focus:outline-0 focus:border focus:ring-1 rounded-lg focus:border-green-400 sm:px-3 py-3 p-5"
                        ></textarea>
                        <div className="stars   flex items-center gap-x-1">
                          <FaStar size={20} className="text-[#D9D9D9]" />
                          <FaStar size={20} className="text-[#D9D9D9]" />
                          <FaStar size={20} className="text-[#D9D9D9]" />
                          <FaStar size={20} className="text-[#D9D9D9]" />
                          <FaStar size={20} className="text-[#D9D9D9]" />
                        </div>
                      </div>
                    </div>

                    <div className="boxBodyBottom  space-x-2 sm:flex-row flex-col smM:gap-y-0 gap-y-3 sm:px-5 px-2 py-4 mt-4  flex items-center justify-center">
                      <Link
                      href={'/jobs/active-job/job-details'}
                        className="rounded-lg text-center  sm:w-80 w-full tracking-wide  sm:px-10 px-4  py-2 green text-white text-[1rem]"
                        type="button"
                      >
                       Job Details
                      </Link>
                      <button
                        className="rounded-lg cursor-pointer sm:w-80 w-full   tracking-wide  sm:px-10 px-4  py-2 green text-white text-[1rem]"
                        type="button"
                      >
                        Submit Review And Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ActiveJobPage;
