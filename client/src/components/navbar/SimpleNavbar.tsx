
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiGlobe } from "react-icons/ci";

const SimpleNavbar = () => {
  return (
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

      <div
        className={` sm:space-x-10   flex space-x-2  items-center text-gray`}
      >
        <span className={`cursor-pointer flex items-center `}>
          <CiGlobe size={22} />
          <p className="p-0 m-0">EN</p>
        </span>
        <Link href={"/login"}>Log In</Link>
        <Link href={"/signup"} className="px-3 py-1 rounded text-white gray">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default SimpleNavbar;
