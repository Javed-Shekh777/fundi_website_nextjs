"use client";
import AlertBox from "@/components/alert/AlertBox";
import Link from "next/link";
import React, { useState } from "react";
 
const VerifyOTP = () => {
  const [showPhoneAlert, setShowPhoneAlert] = useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPhoneAlert(false);
  };
  return (
    <>
      {showPhoneAlert ? (
        <div className="login min-h-screen flex items-center justify-center sm:px-4  px-2">
          <div className="loginWrapper w-full max-w-md bg-white sm:p-6 px-2 py-6 rounded-lg shadow-md">
            <p className=" mb-6 text-center">
              Enter the 4-digit code that you received via SMS at
              +91-999-999-9999.
            </p>
            <form
              action="#"
              onSubmit={onSubmit}
              className="form w-full text-gray"
            >
              <div className="flex  gap-3 my-4">
                <CustomBox />
                <CustomBox />
                <CustomBox />
                <CustomBox />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full p-3 cursor-pointer rounded-lg text-white bg-green-500     hover:bg-green-600 transition"
                >
                  Submit
                </button>
                <Link href={"/login"}>
                  <p className="text-right text-sm mt-2">
                    Changed your mobile number?
                  </p>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full p-3 my-4 rounded-lg  text-black border border-gray-400 hover:text-white cursor-pointer  hover:bg-green-600 transition"
              >
                Resend OTP?
              </button>
            </form>
          </div>
        </div>
      ) : (
        <AlertBox />
      )}
    </>
  );
};

const CustomBox = () => {
  return (
    <>
      <button
        type="button"
        className={`h-[50px] w-[50px] border border-gray-400 rounded-md  cursor-pointer text-center`}
      ></button>
    </>
  );
};

export default VerifyOTP;
