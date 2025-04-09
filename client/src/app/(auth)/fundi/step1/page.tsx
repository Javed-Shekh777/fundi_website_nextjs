import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInfoCircle,
  FaMapMarkerAlt,
  FaRegEdit,
  FaUserCircle,
} from "react-icons/fa";

const Step1 = () => {
  return (
    <>
      <header
        style={{ padding: "0.875rem 10px" }}
        className={`container text-white flex-wrap  sm:py-4 py-2  sm:px-6 px-3 flex justify-between items-center`}
      >
        {/* Logo */}
        <div className={`flex items-center`}>
          <Image
            src="/logo.svg"
            className={`xl:w-[100px] sm:w-[75px]  ] w-[50px] h-[80px]`}
            alt="Logo"
            height={80}
            width={100}
          />
        </div>
      </header>
      <div className="  ">
        <div className="bg-[#F4F4F4] py-4">
          <div className="container  sm:px-14 px-3 flex items-center justify-between">
            <div className="green flex items-center sm:gap-x-2  text-white sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">Personal Details</p>
              <FaUserCircle size={24} className="sm:hidden " />
            </div>
            <div className="w-full h-[2px] green"></div>
            <div className=" flex items-center sm:gap-x-2 border-[#28A745] border  sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">Address</p>
              <FaMapMarkerAlt size={24} className="sm:hidden" />
            </div>
            <div className="w-full  h-[2px] green"></div>
            <div className="  flex items-center sm:gap-x-2  border-[#28A745] border  sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">About Us</p>
              <FaInfoCircle size={24} className="sm:hidden" />
            </div>
          </div>
        </div>

        <form
          action=""
          className="  flex flex-col items-center my-10 text-gray px-4"
        >
          <div className="relative w-44 h-44  rounded-full border-4 border-green-500 overflow-hidden">
            <Image
              height={100}
              width={200}
              src={"/verified1.svg"}
              alt="Profile"
              className="w-full h-full object-cover m-1"
            />
            <button className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full">
              <FaRegEdit />
            </button>
          </div>
          <button className="mt-4 px-4 py-2 green text-white rounded-lg flex items-center gap-2">
            Upload Avatar <FaRegEdit />
          </button>

          {/* Form Section */}
          <div className="mt-8 w-full max-w-[900px]">

            <h2 className="text-2xl font-bold text-gray mb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="inputGroup     flex flex-col space-y-2  ">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[20px] text-[18px] font-semibold"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="inputGroup     flex flex-col space-y-2  ">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[20px] text-[18px] font-semibold"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="inputGroup     flex flex-col space-y-2  ">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[20px] text-[18px] font-semibold"
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Already Entered"
                />
              </div>
              <div className="inputGroup     flex flex-col space-y-2  ">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[20px] text-[18px] font-semibold"
                >
                  Email id
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Enter Your Email ID"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Link
                href={"/fundi/step2"}
                className="mt-6 px-6 py-2 text-center sm:w-44 w-full green   text-white rounded-lg text-lg"
              >
                Next
              </Link>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default Step1;
