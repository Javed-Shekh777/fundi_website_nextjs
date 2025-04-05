"use client";
import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import { FaCheck, FaStar } from "react-icons/fa";
const ExploreJobDetailsPage = () => {

  const [isSuccess, setIsSuccess] = useState(false);
  const outsideClickSuccessRef = useRef<HTMLDivElement | null>(null);

  const handlePlaceBidSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  useClickOutside(outsideClickSuccessRef as React.RefObject<HTMLElement>, () => setIsSuccess(false));

  return (
    <>
      <section className={`postJob `}>
        <div className={`   py-0`}>
          <div
            className={`  lg:px-[150px] sm:px-[20px] px-[10px]`}
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

            <div className="alljobs my-14 ">
              <div className="jobsWrapper">
                <div className="jobs flex flex-col space-y-20">
                  <div className="bid sm:px-4 px-2 rounded-lg border border-black ">
                    <div className="boxHeader flex items-center justify-between flex-wrap py-2 sm:px-5 px-2 border-b border-b-black">
                      <div className="flex flex-col sm:space-y-4 space-y-2   justify-between">
                        <p className="text-[#2E2E2E] font-bold">2RTO782U13</p>
                        <h3 className="text-[#2E2E2E] font-bold">
                          Job Details{" "}
                        </h3>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <div className="">
                          <h1 className="text-black font-semibold mb-0 pb-0">
                            Kevin
                          </h1>
                          <p className="text-sm mt-0 pt-0">Location</p>
                        </div>
                        <div className="image z-[10]    sm:w-full w-fit rounded-full border-[2px] border-[#2E2E2E] p-1.5">
                          <Image
                            src={"/verified1.svg"}
                            height={30}
                            width={50}
                            className="rounded-full  "
                            alt="Bidder Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="boxBody ">
                      <div className="boxBodyTop text-[#666666] space-y-4 sm:px-5 px-2  pt-5 sm:pb-12 pb-8">
                        <div className="box  flex items-center ">
                          <p className="lable flex-1 font-[400] ">
                            Service Category
                          </p>
                          <p className="defaultValue flex-1 font-[500]">
                            Plumbring
                          </p>
                        </div>
                        <div className="box  flex items-center ">
                          <p className="lable flex-1 font-[400]">
                            Sub Category
                          </p>
                          <p className="defaultValue flex-1 font-[500]">
                            Pipe Installation
                          </p>
                        </div>
                        <div className="box  flex    ">
                          <p className="lable flex-1 font-[400]">Description</p>
                          <p className="defaultValue flex-1 font-[500]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="box  flex    ">
                          <p className="lable flex-1 font-[400]">
                            Material Discription
                          </p>
                          <p className="defaultValue flex-1 font-[500]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className="box  flex    ">
                          <p className="lable flex-1 font-[400]">Photo</p>
                          <button className="defaultValue flex-1   cursor-pointer  text-left font-[500] ">
                            View Photo
                          </button>
                        </div>

                        <div className="box  flex items-center  ">
                          <p className="lable flex-1 font-[400]">Date & Time</p>
                          <p className="defaultValue flex-1 font-[500] sm:flex-row flex-col flex-wrap flex sm:items-center gap-x-4">
                            <span>05/01/2025</span>
                            <span className="sm:text-left text-center">&</span>
                            <span>Morning 9 to 2</span>
                          </p>
                        </div>
                        <div className="box  flex items-center ">
                          <p className="lable flex-1 font-[400]">Location</p>
                          <p className="defaultValue flex-1 font-[500]">
                            123, Street Name, Landmark, City
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="job-details mt-20 mb-8 sm:px-5 px-2">
                  <h1 className="title text-black text-2xl font-bold">
                    Service Estimate Details
                  </h1>
                  <form className="form " onSubmit={handlePlaceBidSubmit}>
                    <div className="sm:px-10 px-2">
                      <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
                        >
                          {" "}
                          Select a Date
                        </label>
                        <div className="inputGroup   flex flex-col space-y-2 lg:w-[50%] w-full">
                          <div className="flex items-center justify-between w-full relative">
                            {/* Button to Open Date Picker */}
                            <label
                              htmlFor="date2"
                              className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow cursor-pointer"
                              onClick={() => {
                                console.log("Triggered");
                                document.getElementById("date2")?.showPicker();
                              }}
                            >
                              <p className="text-gray">Select a Date </p>
                              <FiCalendar size={24} className="text-green" />
                              <input
                                type="date"
                                id="date2"
                                defaultValue={""}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </label>

                            {/* Input ko label ke andar laaya taaki proper jagah pe open ho */}
                          </div>
                        </div>
                      </div>

                      <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
                        >
                          Description{" "}
                          <span className="text-sm text-[#666666] font-normal tracking-wide">
                            (Optionl)
                          </span>
                        </label>
                        <textarea
                          className="border rounded-lg border-black p-3 resize-none"
                          name=""
                          rows={8}
                          id=""
                          placeholder="Enter Description"
                        ></textarea>
                      </div>

                      <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1 lg:w-[50%] w-full">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[22px] text-[20px] font-semibold"
                        >
                          Place Your Bid
                        </label>
                        <input
                          className="border rounded-lg border-black p-3 resize-none"
                          name=""
                          id=""
                          type="text"
                          defaultValue={""}
                          placeholder="Enter Your Bid"
                        />
                      </div>
                    </div>

                    <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1 ">
                      <label
                        htmlFor="description"
                        className="text-gray sm:text-[22px] text-[20px] font-semibold"
                      >
                        Write Your Review
                      </label>
                      <div className="boxBodyBottom my-5 bg-[#F4F4F4] sm:px-5 px-2 py-4 shadow-lg  w-full">
                        <textarea
                          name=""
                          id=""
                          rows={4}
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

                    <div className="flex items-center justify-center my-20">
                      <button
                        ref={outsideClickSuccessRef}
                        className="rounded-lg cursor-pointer  mx-auto text-center self-center  tracking-wide sm:w-72 w-full   py-2 green text-white text-[1rem]"
                        type="submit"
                      >
                        Job Done & Submit Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isSuccess && (
        <section
          className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="flex items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
            <div
              ref={outsideClickSuccessRef}
              className="shadow sm:p-10 px-3 py-5 w-[400px] sm:m-0 m-2 rounded-lg bg-white flex items-center flex-col justify-center"
            >
              <h1 className="sm:text-4xl text-green text-2xl  font-bold my-3 text-center  ">
                Success!
              </h1>

              <div className="icon rounded-full  p-5 sm:p-8  green  ">
                <FaCheck size={50} color="white" />
              </div>
              <p className="text-[1rem] text-[#2E2E2E]  font-medium my-6 text-center  ">
              Your review has been submitted.
              </p>

              <Link
                href={"/jobs/active-job"}
                className=" rounded-lg text-center text-[#666666] border-2 w-full border-[#666666] py-3 px-5"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ExploreJobDetailsPage;
