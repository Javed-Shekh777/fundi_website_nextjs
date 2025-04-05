import React from "react";
import styles from "./login.module.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="login min-h-screen flex sm:flex-row flex-col bg-[#D9D9D9] items-center justify-center sm:px-4  px-2">
      <div className="loginWrapper  relative z-20 sm:order-1 order-2 w-full max-w-md bg-white  sm:px-5 px-2 xl:py-20 sm:py-14 py-5 rounded-xl  shadow">
        <h1 className="loginTitle text-center text-2xl sm:text-4xl mb-1  text-green font-bold">
          Sign in to Account
        </h1>
        <p className="text-center mb-6">Enter your email & password to login</p>
        <form action="#" className="form w-full text-gray">
          <div className={`${styles.inputGroup} flex flex-col mb-4`}>
            <label htmlFor="phone" className="mb-2  text-[1rem]">
              Email Address
            </label>
            <input
              type="text"
              className="h-10 px-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className={`${styles.inputGroup} flex flex-col mb-4`}>
            <label htmlFor="phone" className="mb-2  text-[1rem]">
              Password
            </label>
            <input
              type="text"
              className="h-10 px-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 cursor-pointer mb-4 rounded-lg text-white bg-green-500 text-lg sm:text-xl hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="image   flex flex-col sm:order-2 order-1 items-center justify-center green pt-5 rounded-tr-xl rounded-br-xl sm:rounded-tl-0 sm:rounded-bl-0 rounded-tl-xl rounded-bl-xl relative sm:left-0 sm:top-0 top-30 z-10 ">
        <Image
          src="/logo.svg"
          className={``}
          alt="Logo"
          height={80}
          width={100}
        />

        <Image
          src={"/loginBg.svg"}
          width={400}
          height={200}
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default LoginPage;
