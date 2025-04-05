import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const BidderProfile = () => {
    return (
      <>
        <section className="bidderBox px-2">
          <div className="bidderBoxWrapper py-3   border-b-2 border-b-black space-x-2 flex items-center justify-between">
            <div className="imageBox  relative ">
              <div className="image z-[10] rounded-full border-[2px] border-[#2E2E2E] p-2">
                <Image
                  src={"/verified1.svg"}
                  height={100}
                  width={180}
                  className="rounded-full"
                  alt="Bidder Image"
                />
              </div>
  
              <div className="batch absolute top-0  right-0 z-[100]">
                <MdVerified size={24} className="text-green" />
              </div>
            </div>
            <div className="bidderWork">
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
              <p className="sm:text-base text-sm">
                Plubmbing, Cleaning, Appliance Repair, Installation,
                Uninstallation, Repair
              </p>
            </div>
            <div className="bidderFees space-y-2 flex flex-col items-center">
              <h1 className="fees text-[24px]">$123</h1>
              <div className="links flex items-center gap-x-2">
                <Link
                  href={"/"}
                  className="border-[#28A745] text-green border-[1px] sm:px-5 px-2 py-1 rounded"
                >
                  Chat
                </Link>
                <Link
                  href={"/jobs/active-job/bidders/profile"}
                  className="green text-white sm:px-5 px-2 py-1 rounded "
                >
                  Hire
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  

export default BidderProfile;
