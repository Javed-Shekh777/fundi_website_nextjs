"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCheck, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

const ProfilePage = () => {
  const recentJobs = [1, 2, 3, 4, 5];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [sureHire, setSureHire] = useState(false);
  const [sure, setSure] = useState(false);
 

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 320;

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 

  return (
    <>
      <section className={`bidderProfile `}>
        <div className={`  container py-[60px]`}>
          <div
            className={`  lg:px-[60px] sm:px-[20px] px-[10px]  `}
          >
            <div className="bidderProfileTop flex sm:flex-row flex-col sm:gap-y-0 gap-y-10  justify-between">
              <div className="leftInfo flex sm:items-center    space-y-5  sm:p-0 px-3 items-start flex-wrap md:gap-x-[30px] gap-x-0 md:flex-[2] flex-1">
                <div className="imageBox flex items-center justify-center  relative ">
                  <div className="image z-[10]  sm:w-full w-fit rounded-full border-[2px] border-[#2E2E2E] p-2">
                    <Image
                      src={"./verified1.svg"}
                      height={100}
                      width={180}
                      className="rounded-full"
                      alt="Bidder Image"
                    />
                  </div>

                  <div className="batch absolute  top-0  right-[40px] z-[100]">
                    <MdVerified className="text-green text-3xl" />
                  </div>
                </div>
                <div className="bidderWork md:w-[50%] w-full">
                  <div className="flex items-center mb-3 gap-x-2   ">
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
                    Plubmbing, Cleaning, Appliance Repair, Installation,
                    Uninstallation, Repair
                  </p>
                  <p className="location text-gray my-3">
                    Location - City Name
                  </p>
                </div>
              </div>
              <div className="RightInfo bg-[#F4F4F4] rounded-2xl  md:flex-[0.8] flex-1 ">
                <div className="bidderFees w-full space-y-2 flex sm:p-20 p-10 flex-col items-center">
                  <h1 className="fees text-[24px] mb-4">$123</h1>

                  <div className="links text-[18px] flex flex-col space-y-5 w-full items-center gap-x-2">
                    <Link
                      href={"/"}
                      className="border-[#28A745] text-center w-full text-green border-[1.5px] sm:px-5 px-2 py-2 rounded hover:bg-green hover:text-white"
                    >
                      Chat
                    </Link>
                    <div
                      onClick={() => setSureHire(true)}
                      className="green text-white text-center w-full sm:px-5 px-2 py-2 rounded "
                    >
                      Hire
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bidderProfileBottom mt-8">
              <div className="content mb-6">
                <h3 className="abouttitle mb-3  text-[#2E2E2E] text-2xl font-[600]">
                  About Me
                </h3>
                <p className="desc text-gray leading-[36px] text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
              <div className="content mb-10">
                {" "}
                <h3 className="skilltitle mb-3 text-[#2E2E2E] text-2xl font-[600]">
                  Skills
                </h3>
                <p className="skill text-gray text-lg">
                  Plubmbing, Cleaning, Appliance Repair, Installation,
                  Uninstallation, Repair
                </p>
              </div>

              <div className="horizontal sm:mx-10 mx-2 h-[1.5px] bg-[#000000]"></div>

              <section className="recentJobs">
                <h1 className="recentTitle my-12 text-gray text-4xl font-bold">
                  Recent Jobs
                </h1>

                <div className="recentJobsContainer flex flex-col space-y-14">
                  {recentJobs?.map((item) => (
                    <div
                      key={item}
                      className="bid sm:px-4 px-2 rounded-lg border border-black "
                    >
                      <div className="boxHeader flex items-center justify-between  py-4 sm:px-5 px-2 border-b border-b-black">
                        <p className="text-[#2E2E2E] font-bold">08/11/2024</p>
                        <p className=" w-32 text-center py-2  rounded-lg  text-[#CEBC35] bg-yellow-100">
                          Past Job
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
                        </div>
                        <div className="boxBodyBottom  sm:px-5 px-2 py-4 mt-4   w-full">
                          <h1 className="text-2xl  text-[#2E2E2E] font-[600] ">
                            Customer Review
                          </h1>
                          <div className="bidderProfileTop flex sm:flex-row flex-col justify-between py-5 ">
                            <div className="leftInfo flex xl:flex-[1] sm:flex-nowrap flex-wrap sm:items-start md:items-center items-center  sm:gap-x-[30px] gap-x-[10px] sm:px-[30px] w-full  px-0 ">
                              <div className="imageBox w-fit relative ">
                                <div className="image   rounded-full border-[2px] border-[#2E2E2E] p-1">
                                  <Image
                                    src={"./verified1.svg"}
                                    height={100}
                                    width={150}
                                    className="rounded-full"
                                    alt="Bidder Image"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col justify-center items-center mb-3 gap-x-2   ">
                                <h1 className="username   text-[22px]">Alex</h1>
                                <p>Customer</p>
                              </div>
                            </div>
                            <div className="RightInfo  xl:flex-[2]     w-full  py-5 sm:px-[30px]   p-3  space-y-3 flex flex-col rounded-2xl  ">
                              <div className="stars  flex items-center gap-x-1">
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#FFDB12]" />
                                <FaStar size={20} className="text-[#D9D9D9]" />
                              </div>
                              <p className=" text-[1.125rem] leading-8">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="recentJobs">
                <h1 className="recentTitle my-12 text-gray text-4xl font-bold">
                  Customer Reviews
                </h1>

                <div className="relative w-full px-4 mb-12">
                  <div
                    ref={scrollRef}
                    className="flex overflow-x-auto [scrollbar-width:none] space-x-5 scrollbar-hiden snap-x snap-mandatory scroll-smooth w-full"
                  >
                    {recentJobs.map((item) => (
                      <div
                        key={item}
                        className="snap-center min-w-[300px] md:min-w-[350px] lg:min-w-[400px] px-3 py-5 border rounded-lg space-y-3 bg-white shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-16 h-16 rounded-full border-2 p-1 overflow-hidden">
                            <Image
                              src="/review.svg"
                              alt="Review"
                              height={70}
                              width={70}
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="flex items-center gap-x-1">
                            {[...Array(4)].map((_, i) => (
                              <FaStar
                                key={i}
                                size={24}
                                className="text-[#FFDB12]"
                              />
                            ))}
                            <FaStar size={24} className="text-[#D9D9D9]" />
                          </div>
                        </div>

                        <p className="text-[18px] text-gray font-[400] leading-7">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {sureHire && (
        <section
          className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="flex relative items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
            <div className="shadow  w-[500px]   rounded-2xl bg-white flex items-center flex-col justify-center">
              <p className=" green text-white py-4 px-3  text-xl w-full rounded-tl-2xl rounded-tr-2xl font-bold   text-center  ">
                Are Your sure?
              </p>

              <div className="bidders w-full">
                <div className="py-5">
                  <div className="imageBox flex  items-center justify-center  ">
                    <div className="image relative z-[10]  w-fit rounded-full border-[2px] border-[#2E2E2E] p-2">
                      <Image
                        src={"./verified1.svg"}
                        height={80}
                        width={100}
                        className="rounded-full"
                        alt="Bidder Image"
                      />
                      <div className="batch absolute top-0  right-0 z-[100]">
                        <MdVerified size={24} className="text-green" />
                      </div>
                    </div>
                  </div>
                  <p className="username text-center text-xl ">Alex</p>
                </div>
                <div className="horizontal sm:mx-10 mx-2 h-[1.5px] gray"></div>
                <div className="flex py-5 flex-col items-center justify-center">
                  <p className="text-gray text-[18px]">
                    You Hire Alex for your job?
                  </p>
                  <div className="links mt-3 text-[18px] flex flex-col space-y-5 w-full items-center gap-x-2">
                    <div
                      onClick={() => setSure(true)}
                      className=" text-center text-[#666666] border-2 border-[#666666] sm:px-5 px-2 py-2 rounded w-[60%]  "
                    >
                      Confirm
                    </div>
                    <div
                      onClick={() => setSureHire(false)}
                      className="green text-white text-center w-[60%]  sm:px-5 px-2 py-2 rounded "
                    >
                      Go Back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {sure && (
        <section
          className={`fixed top-0 left-0 h-screen z-[1000] w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="flex items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
            <div className="shadow sm:p-10 px-3 py-5 sm:m-0 m-2 rounded-lg bg-white flex items-center flex-col justify-center">
              <h1 className="text-4xl text-green    font-bold my-3 text-center  ">
                Success!
              </h1>

              <div className="icon rounded-full  p-5 sm:p-8  green  ">
                <FaCheck size={50} color="white" />
              </div>
              <p className=" text-[#2E2E2E]  font-bold my-3 text-center  ">
                You are Successfully hired Alex for your service.
              </p>

              <Link
                href={"/"}
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

export default ProfilePage;
