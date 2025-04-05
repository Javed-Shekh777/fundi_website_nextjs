"use client";
import useClickOutside from '@/hooks/useClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { CiGlobe, CiSearch } from 'react-icons/ci';
import { FaBars, FaPowerOff, FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineCurrencyRupee, MdOutlineDashboard, MdOutlineMessage, MdOutlinePerson, MdOutlineSettings } from 'react-icons/md';

const navLinks = [
  {
    id: 1,
    path: "/",
    title: "Home",
  },
  {
    id: 2,
    path: "/jobs",
    title: "Jobs",
  },
  {
    id: 3,
    path: "/notification",
    title: "Notification",
  },
];

const profileLinks = [
  {
    id: 1,
    icon: <MdOutlineDashboard size={24} />,
    title: "Dahboard",
  },
  {
    id: 2,
    icon: <MdOutlineCurrencyRupee size={24} />,
    title: "Subscription Packages",
  },
  {
    id: 3,
    icon: <MdOutlineCurrencyRupee size={24} />,
    title: "Identity Verification",
  },
  {
    id: 4,
    icon: <MdOutlinePerson size={24} />,
    title: "Profile Setting",
  },
  {
    id: 5,
    icon: <MdOutlineSettings size={24} />,
    title: "Account Setting",
  },
  {
    id: 6,
    icon: <MdOutlineCurrencyRupee size={24} />,
    title: "Payment Setting",
  },
];

const FundiNavbar = () => {
  const [showWallet, setShowWallet] = useState(false);
  const walletRef = useRef<HTMLSpanElement>(null);

  useClickOutside(walletRef as React.RefObject<HTMLElement>, () => setShowWallet(false));

  return (
   
    <>
     <header
        className={` container text-white flex-wrap  sm:py-4 xl:px-0 px-3  py-2  flex justify-between items-center`}
      >
        {/* Logo */}
        <div className={`flex items-center`}>
          <Image
            src="/logo.svg"
            className={`xl:w-[100px] sm:w-[75px]  ] w-[60px] h-[80px]`}
            alt="Logo"
            height={100}
            width={100}
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`hidden sm:items-center text-[#666666] sm:flex lg:space-x-20  md:space-x-12  sm:space-x-5 `}
        >
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className={`hover:text-text-[#28A745] font-semibold`}
            >
              {link.title}
            </Link>
          ))}
          <Link
            href={"/post-a-job"}
            className={`bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600`}
          >
            Package Plans
          </Link>
        </nav>

        {/* Actions */}
        <div className={`flex items-center   space-x-4 `}>
          <div
            className={`border  focus-within:border-green-400 border-slate-400 rounded-md px-3 py-2 flex items-center`}
          >
            <input
              type="text"
              placeholder="Enter Your Bid No."
              className={` hidden    placeholder:text-slate-400 text-[14px] lg:block outline-0 border-0 focus:outline-0 focus:border-0 `}
            />
            <span className={`cursor-pointer   h-full text-slate-400 `}>
              <CiSearch size={22} />
            </span>
          </div>

          {/* Icons */}
          <div
            className={` sm:space-x-3   flex space-x-2   sm:items-center flex-row   text-[#28A745]`}
          >
            <span className={`cursor-pointer `}>
              <CiGlobe size={22} />
            </span>
            <span className={`cursor-pointer`}>
              <MdOutlineMessage size={22} />
            </span>
          </div>
          <div className="relative">
            <span
              ref={walletRef}
              onClick={() => setShowWallet(!showWallet)}
              className={`cursor-pointer text-[#28A745]`}
            >
              <FaRegUserCircle size={30} />
            </span>
            {showWallet && (
              <ul className="list-none  text-black absolute top-[60px] shadow-xl  w-64 px-2 bg-white z-[100] right-0">
                <li className="  flex  justify-between w-full hover:bg-[#F4F4F4] items-center gap-x-2 px-2 py-2  border-b-2  border-b-gray-300 cursor-pointer">
                  <div className="flex items-center gap-x-2 ">
                    <div className="icon">
                      <MdOutlineSettings size={24} />
                    </div>
                    <p className="text-[1.1rem]">Wallet</p>
                  </div>
                  <p className="flex items-center text-green font-bold ">
                    <MdOutlineCurrencyRupee />
                    2345
                  </p>
                </li>
                {profileLinks.map((link) => (
                  <li
                    key={link.id}
                    className="flex hover:bg-[#F4F4F4] items-center gap-x-2 px-2 py-3   border-b border-b-gray-300 cursor-pointer"
                  >
                    <div className="icon">{link.icon}</div>
                    <p>{link.title}</p>
                  </li>
                ))}
                <li className="flex items-center gap-x-2 px-2 py-4 hover:bg-[#F4F4F4]  border-b border-b-gray-300 cursor-pointer">
                  <div className="icon">
                    <FaPowerOff />
                  </div>
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>

          <FaBars className="sm:hidden block text-gray-400" size={22} />

          {/* <div className="mobile-icons flex items-center gap-x-1 text-gray-400">
           <FaEllipsisV className="sm:hidden block " size={22} />
         </div> */}
        </div>
      </header>
    </>
  )
}

export default FundiNavbar