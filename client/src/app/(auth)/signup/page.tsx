import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "./login.module.css";

import { IoLogoWhatsapp } from "react-icons/io";

type CustumBrnPtops = {
  title: string;
  icon?: React.ReactElement;
  func?: () => void;
};

const SignUpPage = () => {
  return (
    <div className="login min-h-screen flex items-center justify-center sm:px-4  px-2">
      <div className="loginWrapper w-full max-w-md bg-white sm:p-6 px-2 py-6 rounded-lg shadow-md">
        <h1 className="loginTitle text-center text-2xl sm:text-4xl mb-6 text-green font-bold">
          Login / Sign Up
        </h1>
        <form action="#" className="form w-full text-gray">
          <div className={`${styles.inputGroup} flex flex-col mb-4`}>
            <label htmlFor="phone" className="mb-2  text-[1rem]">
              Enter your Phone Number
            </label>
            <input
              type="text"
              className="h-10 px-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <div className={`${styles.inputGroup} flex items-center gap-x-2`}>
              <input type="radio" name="role" id="nonfundi" />
              <label htmlFor="nonfundi">Looking for a fundi?</label>
            </div>
            <div className={`${styles.inputGroup} flex items-center gap-x-2`}>
              <input type="radio" name="role" id="fundi" />
              <label htmlFor="fundi">Are you a fundi?</label>
            </div>
          </div>

          <div className="or flex items-center justify-between my-6 text-black">
            <div className="h-[2px] bg-black w-full"></div>
            <p className="mx-2 text-sm sm:text-base">Or</p>
            <div className="h-[2px] bg-black w-full"></div>
          </div>

          <button
            type="submit"
            className="w-full p-3 cursor-pointer mb-4 rounded-lg text-white bg-green-500 text-lg sm:text-xl hover:bg-green-600 transition"
          >
            Continue
          </button>

          <div className="flex flex-col gap-3 mt-4">
            <CustomBtn
              icon={<FaFacebook size={24} className="text-[#0C82EE]" />}
              title={"Continue with Facebook"}
            />
            <CustomBtn
              icon={<FcGoogle size={24} className="text-[#00D95F]" />}
              title={"Continue with Google"}
            />
            <CustomBtn
              icon={<IoLogoWhatsapp size={24} className="text-[#00D95F]" />}
              title={"Continue with WhatsApp"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const CustomBtn = ({ title, icon }: CustumBrnPtops) => {
  return (
    <>
      <div
        className={`btn mb-6 w-full p-3 hover:bg-slate-200/20 cursor-pointer flex items-center border-2 border-gray-300 justify-center rounded-lg text-[18px] text-white  ${
          icon ? "bg-white" : "bg-green-500"
        } text-center`}
      >
        <button
          type="button"
          className={` cursor-pointer flex flex-wrap items-center sm:gap-x-3 gap-x-1 text-center ${
            icon && "text-[#333333]"
          }`}
        >
          {icon}
          <p className="text-left">{title}</p>
          
        </button>
      </div>
    </>
  );
};
export default SignUpPage;
