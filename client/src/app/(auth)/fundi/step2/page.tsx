"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaChevronDown,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";
 
 
type City = {
  label: string;
};

const cities: City[] = [
  { label: "Delhi" },
  { label: "Mumbai" },
  { label: "Kolkata" },
  { label: "Chennai" },
  { label: "Bangalore" },
];
 
 
 

const Step2 = () => {
  const [city, setCity] = useState<City | null>(null);
  
  const [cityIsOpen, setCityIsOpen] = useState(false);
  

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
            <div className="green flex items-center sm:gap-x-2  text-white sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
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
          className=" flex flex-col items-center my-10 text-gray px-4"
          
        >
          

          {/* Form Section */}
          <div className="mt-8 w-full max-w-[900px]">

            <h2 className="text-2xl font-bold text-gray mb-4">
              Location
            </h2>
              <div className="inputGroup mt-5 relative flex flex-col space-y-2 ">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="text-gray sm:text-[20px] text-[18px] font-semibold"
                  >
                    Address Line 1
                  </label>
                  <button className="text-sm cursor-pointer">
                    Choose on Map
                  </button>
                </div>

                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Enter your address"
                />
              </div>
              <div className="  flex items-start w-full md:flex-row flex-col mt-10 gap-y-4 gap-x-10">
                {/* City Dropdown */}
                <div className="inputGroup relative flex flex-col space-y-2 lg:w-[50%] w-full">
                  <label className="text-gray whitespace-nowrap sm:text-[20px] text-[18px] font-semibold">
                    City
                  </label>
                  <button
                    onClick={() => setCityIsOpen(!cityIsOpen)}
                    type="button"
                    className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow  "
                  >
                    <div className="flex items-center gap-2">
                      {city ? <>{city.label}</> : "Select a City"}
                    </div>
                    <FaChevronDown size={20} className="text-green" />
                  </button>

                  {cityIsOpen && (
                    <ul className="absolute w-full  border h-52 overflow-y-auto bg-white z-20 shadow-lg mt-1 left-0 top-full rounded transition-all duration-200">
                      {cities.map((ct) => (
                        <li
                          key={ct.label}
                          onClick={() => {
                            setCity(ct);
                            setCityIsOpen(false);
                          }}
                          className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                        >
                          {ct.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Zip Code Input */}
                <div className="inputGroup flex flex-col space-y-2 lg:w-[50%] w-full">
                  <label
                    htmlFor="description"
                    className="text-gray sm:text-[20px] text-[18px] font-semibold"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="border rounded-lg border-black p-3   "
                    placeholder="Enter Your Zip Code"
                  />
                </div>
              </div>
            <div className="flex items-center justify-end ">
              <div className="flex items-center gap-x-3 gap-y-3">
                <Link
                  href={"/fundi/step1"}
                  className="mt-6 px-6 py-2 sm:w-44 w-full   text-center border-[#28A745] border rounded-lg text-lg"
                >
                  Previous
                </Link>
                <Link
                  href={"/fundi/step3"}
                  className="mt-6 px-6 py-2 sm:w-44 w-full green text-center  text-white rounded-lg text-lg"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>

          {/* Next Button */}
        </form>
      </div>
    </>
  );
};

export default Step2;
