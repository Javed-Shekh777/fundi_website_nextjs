import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`   bg-black text-white  `}>
      <div
        className={`${styles.footerWrapper} container  flex    justify-between sm:flex-nowrap flex-wrap`}
      >
        <div className={`flex  `}>
          <Image
            src="/logo.svg"
            className={`xl:w-[100px] sm:w-[75px]  ] w-[60px] h-[80px]`}
            alt="Logo"
            height={100}
            width={100}
          />
        </div>
        <div className="">
          <div className="icons flex items-center sm:justify-end justify-start sm:mr-5 gap-x-3">
            <div className="icon flex items-center justify-center h-[40px] w-[40px]  green rounded-full">
              <FaFacebook size={24} />
            </div>
            <div className="icon flex items-center justify-center h-[40px] w-[40px]  green rounded-full">
              <FaTwitter size={24} />
            </div>
            <div className="icon flex items-center justify-center h-[40px] w-[40px]  green rounded-full">
              <FaInstagram size={24} />
            </div>
          </div>
          <div className={`flex items-center gap-x-3 flex-wrap `}>
            <Image
              src="/App_Store.svg"
              className={`w-[130px] sm:w-[200px] sm:h-[100px] h-[70px]  `}
              alt="Logo"
              height={200}
              width={100}
            />
            <Image
              src="/Google_Play.svg"
              className={`w-[130px] sm:w-[200px] sm:h-[100px] h-[70px]`}
              alt="Logo"
              height={200}
              width={100}
            />
          </div>
          <div className="flex items-center sm:justify-end justify-start  sm:mr-5 flex-wrap sm:gap-x-5 gap-x-3  ">
            <p className="">Privacy Policy</p>
            <p>Terms Of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
