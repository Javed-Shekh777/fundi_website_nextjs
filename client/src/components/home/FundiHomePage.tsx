import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaEdit, FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee, MdVerified } from "react-icons/md";
import Group from "../group/Group";
import Link from "next/link";

function FundiHomePage() {
  const servicesArray = [
    {
      img: "./plumbring.svg",
      id: 1,
      title: "Plumbring",
    },
    {
      img: "./electric.svg",
      id: 2,
      title: "Electric Work",
    },
    {
      img: "./carpentry.svg",
      id: 3,
      title: "Carpentry",
    },
    {
      img: "./cleaning.svg",
      id: 4,
      title: "Cleaning Services",
    },
    {
      img: "./electric.svg",
      id: 5,
      title: "Electric Work",
    },
    {
      img: "./carpentry.svg",
      id: 6,
      title: "Carpentry",
    },
    {
      img: "./cleaning.svg",
      id: 7,
      title: "Cleaning Services",
    },
  ];

  return (
    <>
      <section className={`   `}>
        <div className="bg-gray-50">
          <section className="fundiProfile container xl:px-0 px-3">
            <div className="profileInfoTop py-10  sm:flex-row flex-col sm:gap-y-0 gap-y-4 flex items-center justify-between">
              <div className="sm:order-1 order-2">
                <div className="flex sm:flex-row flex-col  sm:gap-y-0 gap-y-4 justify-between">
                  <div className="names ">
                    <div className="bidderWork md:w-[70%] w-full  ">
                      <div className="flex items-center mb-2  gap-x-20   ">
                        <h1 className="username text-gray font-semibold    text-[22px]">
                          Alex
                        </h1>
                        <div className="stars  flex items-center gap-x-1">
                          <FaStar size={20} className="text-[#FFDB12]" />
                          <FaStar size={20} className="text-[#FFDB12]" />
                          <FaStar size={20} className="text-[#FFDB12]" />
                          <FaStar size={20} className="text-[#FFDB12]" />
                          <FaStar size={20} className="text-[#D9D9D9]" />
                        </div>
                      </div>
                      <p className="text-gray font-normal ">
                        Plubmbing, Cleaning, Appliance Repair, Installation,
                        Uninstallation, Repair
                      </p>
                    </div>
                  </div>
                  <div className="locations">
                    <h1 className="username text-gray font-semibold  text-[22px]">
                      Location
                    </h1>
                    <p className="text-gray font-normal">
                      City Name, Country Name
                    </p>
                  </div>
                </div>
                <div className="boxBodyBottom  gap-x-2.5 sm:flex-row flex-col sm:gap-y-0 gap-y-3   py-4 mt-4  flex items-center  ">
                  <Link
                    href={"/jobs/active-job/job-details"}
                    className="rounded-lg text-center  sm:w-fit w-full tracking-wide  sm:px-10 px-4  py-2 green text-white text-[1rem]"
                    type="button"
                  >
                    View Profile
                  </Link>
                  <button
                    className="rounded-lg cursor-pointer sm:w-fit w-full   tracking-wide  sm:px-10 px-4  py-2 green text-white text-[1rem]"
                    type="button"
                  >
                    Subscription Package
                  </button>
                </div>
              </div>
              <div className="sm:order-2 order-1">
                <div className="image relative z-[10]  w-fit rounded-full border-[2px] border-[#2E2E2E] p-2">
                  <Image
                    src={"./verified1.svg"}
                    height={150}
                    width={150}
                    className="rounded-full"
                    alt="Bidder Image"
                  />
                  <div className="batch absolute top-1  right-5 z-[100]">
                    <MdVerified size={28} className="text-green" />
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfoBottom sm:px-6 px-2 pb-5">
              <h1 className="title mb-3 text-2xl text-gray font-bold flex items-center gap-x-2.5">
                About me <FaEdit size={20} />
              </h1>
              <p className="sm:px-6 px-4 py-3 bg-[#D9D9D9] text-gray font-normal text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>
        </div>

        <Group
          bg="#fff"
          space={" space-x-2 sm:space-x-3"}
          height="220px"
          imgHeight={150}
          width="200px"
          key={2}
          subTitleFont="20px"
          isArrow={true}
          data={servicesArray}
          title="Categrory By Job"
        />

        <div className={`  xl:px-0 px-3  bg-gray-50 py-14  relative`}>
          <div className="container">
            <h1 className={` text-[#666666] font-semibold text-3xl mb-7`}>
              Explore New Job
            </h1>

            <div
              className={`overflow-x-auto scroll-smooth sm:space-x-6 [scrollbar-width:none] space-x-3 flex sm:px-12 px-0    items-center`}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={` px-6 py-4 border shadow rounded-2xl  border-slate-300  flex flex-col items-center justify-center`}
                >
                  <div className="border-b-2 flex text-gray  items-center gap-x-10 border-b-[#28A745] pb-3">
                    <div className="left font-semibold text-[15px]">
                      <h3>Job - </h3>
                      <p className="whitespace-nowrap">
                        Plumbring (Leak Fixing)
                      </p>
                    </div>
                    <div className="right font-normal text-[14px]">
                      <h3>Date & Time - </h3>
                      <p className="whitespace-nowrap ">
                        12/01/2025 & Evening 2 to 7
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-16 pt-3">
                    <div className="flex items-center gap-x-1.5">
                      <div className="image relative z-[10]  w-fit rounded-full border-[2px] border-[#2E2E2E] p-1">
                        <Image
                          src={"./verified1.svg"}
                          height={40}
                          width={40}
                          className="rounded-full"
                          alt="Bidder Image"
                        />
                      </div>
                      <div className="text-gray flex flex-col ">
                        <h3 className="font-semibold">Kevin</h3>
                        <p className="font-normal whitespace-nowrap text-sm">
                          City Name,Country Name
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end ">
                      <button
                        className="rounded-lg cursor-pointer mt-5 sm:w-fit w-full   tracking-wide  px-3 py-[2px] green text-white text-[1rem]"
                        type="button"
                      >
                        Post a Bid
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={` absolute z-10 flex items-center justify-between px-4 w-full top-[50%] left-0 translate-y-[-50%]`}
            >
              <div className="arrowLeft h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
                <FaArrowLeft />
              </div>
              <div className="arrowRight h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className={`py-14 xl:px-0 px-3 relative`}>
          <div className="container">
            <h1 className={` text-[#666666] font-semibold text-3xl mb-7`}>
              Active Jobs
            </h1>

            <div
              className={`overflow-x-auto scroll-smooth sm:px-5 px-3 sm:space-x-6 [scrollbar-width:none] space-x-3 flex    items-center`}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={` px-6 py-4 border shadow rounded-2xl  border-slate-300  flex flex-col  `}
                >
                  <button
                    className="rounded-lg cursor-pointer  mb-2 w-fit   tracking-wide  px-3 py-[2px] bg-[#CEBC35] text-white text-[1rem]"
                    type="button"
                  >
                    Job ID - 247TU4FU29
                  </button>
                  <div className="border-b-2 flex text-gray  items-center gap-x-10 border-b-[#28A745] pb-3">
                    <div className="left font-semibold text-[15px]">
                      <h3>Job - </h3>
                      <p className="whitespace-nowrap">
                        Plumbring (Leak Fixing)
                      </p>
                    </div>
                    <div className="right font-normal text-[14px]">
                      <h3>Date & Time - </h3>
                      <p className="whitespace-nowrap">
                        12/01/2025 & Evening 2 to 7
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-16 pt-3">
                    <div className="flex items-center gap-x-1.5">
                      <div className="image relative z-[10]  w-fit rounded-full border-[2px] border-[#2E2E2E] p-1">
                        <Image
                          src={"./verified1.svg"}
                          height={40}
                          width={40}
                          className="rounded-full"
                          alt="Bidder Image"
                        />
                      </div>
                      <div className="text-gray flex flex-col ">
                        <h3 className="font-semibold">Kevin</h3>
                        <p className="font-normal  text-sm">
                          City Name,Country Name
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end ">
                      <button
                        className="rounded-lg cursor-pointer mt-5 sm:w-fit w-full   tracking-wide  px-3 py-[2px] green text-white text-[1rem]"
                        type="button"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div
                className={`${styles.arrows} absolute z-10 flex items-center justify-between px-4 w-full top-[50%] left-0 translate-y-[-50%]`}
              >
                <div className="arrowLeft h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
                  <FaArrowLeft />
                </div>
                <div className="arrowRight h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
                  <FaArrowRight />
                </div>
              </div> */}
          </div>
        </div>

        <div className={`py-14 xl:px-0 px-3  relative`}>
          <div className="container">
            <h1 className={` text-[#666666] font-semibold text-3xl mb-7`}>
              Past Jobs
            </h1>

            <div className={`flex flex-col space-y-10 sm:px-6 px-0`}>
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={`  sm:px-6 px-4 py-4 border shadow rounded-2xl  border-slate-300  flex flex-col  `}
                >
                  <div className="boxHeader flex items-center justify-between sm:gap-y-0 gap-y-3 sm:flex-row flex-col py-4 sm:px-5 px-0 border-b border-b-black">
                    <button
                      className="rounded-lg cursor-pointer sm:w-fit w-full    tracking-wide  px-3 py-2 bg-blue-400 text-blue-100  text-[1rem]"
                      type="button"
                    >
                      Job ID - 247TU4FU29
                    </button>
                    <p className=" sm:w-fit w-full text-center py-2 px-3  bg-gray-400 rounded-lg  text-gray-100 font-semibold">
                      Payment Done
                    </p>
                  </div>
                  <div className="border-b-2 flex text-gray pb-4 pt-8 sm:items-center items-start justify-between border-b-[#28A745] ">
                    <div className="left font-semibold text-[15px] flex-1">
                      <h3>Job - </h3>
                      <p className="">Plumbring (Leak Fixing)</p>
                    </div>
                    <div className="right font-normal text-[14px] justify-between flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 flex-1 sm:items-center items-start">
                      <div className="">
                        <h3>Date & Time - </h3>
                        <p className=" ">12/01/2025 & Evening 2 to 7</p>
                      </div>
                      <div className="flex items-center">
                        <p>Payment - </p>
                        <p className="flex items-center">
                          <MdOutlineCurrencyRupee size={20} />
                          120
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:items-center items-start justify-between sm:flex-row flex-col sm:gap-y-0 gap-y-3 pt-7 gap-x-2">
                    <div className="flex items-center sm:gap-x-1.5 gap-x-3 ">
                      <div className="image relative z-[10] whitespace-nowrap shrink-0 w-fit rounded-full border-[2px] border-[#2E2E2E] p-1">
                        <Image
                          src={"./verified1.svg"}
                          height={40}
                          width={40}
                          className="rounded-full"
                          alt="Bidder Image"
                        />
                      </div>
                      <div className="text-gray flex flex-col  ">
                        <h3 className="font-semibold">Kevin</h3>
                        <p className="font-normal  text-sm">
                          City Name,Country Name
                        </p>
                      </div>
                    </div>
                    <div className="flex items-end justify-end ">
                      <div className="bidderWork md:w-[70%] w-full  ">
                        <div className="flex items-center mb-2 flex-wrap  gap-x-20   ">
                          <h1 className="username text-gray font-semibold    text-[22px]">
                            Review
                          </h1>
                          <div className="stars  flex items-center gap-x-1">
                            <FaStar size={20} className="text-[#FFDB12]" />
                            <FaStar size={20} className="text-[#FFDB12]" />
                            <FaStar size={20} className="text-[#FFDB12]" />
                            <FaStar size={20} className="text-[#FFDB12]" />
                            <FaStar size={20} className="text-[#D9D9D9]" />
                          </div>
                        </div>
                        <p className="text-gray font-normal ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FundiHomePage;
