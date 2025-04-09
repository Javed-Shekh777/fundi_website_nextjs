"use client";
import React  from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
const ExploreJobDetailsPage = () => {

  


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
                          <p className="lable flex-1 font-[400]">Description</p>
                          <p className="value flex-1 font-[500]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="box  flex    ">
                          <p className="lable flex-1 font-[400]">
                            Material Discription
                          </p>
                          <p className="value flex-1 font-[500]  ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                        <div className="box  flex    ">
                          <p className="lable flex-1 font-[400]">Photo</p>
                          <button className="value flex-1   cursor-pointer  text-left font-[500] ">
                            View Photo
                          </button>
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
                    </div>
                  </div>
                </div>

                <div className="job-details mt-20 mb-8 sm:px-5 px-2">
                  <h1 className="title text-black text-2xl font-bold">
                    Service Estimate Details
                  </h1>
                  <form
                    className="form sm:px-10 px-2"
                    onSubmit={handlePlaceBidSubmit}
                  >
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
                            
                          >
                            <p className="text-gray">Select a Date </p>
                            <FiCalendar size={24} className="text-green" />
                   
                   
                            <input
                              type="date"
                              id="date2"
                              value={'12-34-1029'}
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
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </textarea>
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
                        value={"123 "}
                        placeholder="Enter Your Bid"
                      />
                    </div>
                    <div className="flex items-center justify-center my-20">
                      <Link
                        href={"/jobs/applied-job"}
                        className="rounded-lg cursor-pointer  mx-auto text-center self-center  tracking-wide sm:w-72 w-full   py-2 green text-white text-[1rem]"
                        type="submit"
                      >
                        Back To Home
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreJobDetailsPage;
