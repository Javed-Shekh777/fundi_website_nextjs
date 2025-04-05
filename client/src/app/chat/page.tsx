"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaPaperPlane, FaSearch } from "react-icons/fa";
import {
  MdOutlineAttachFile,
  MdOutlineKeyboardDoubleArrowRight,
  MdVerified,
} from "react-icons/md";
import {  FiCamera } from "react-icons/fi";
import { RiCheckDoubleLine } from "react-icons/ri";

const charUsers = [
  {
    id: 1,
    imgUrl: "/recent1.svg",
    username: "Leon",
    isNoty: true,
    isBatch: false,
    time:"12.34am"
  },
  {
    id: 2,
    imgUrl: "/recent2.svg",
    username: "Mike",
    isNoty: false,
    isBatch: true,
    time:"05.00pm"

  },
  {
    id: 3,
    imgUrl: "/recent3.svg",
    username: "John",
    isNoty: true,
    isBatch: false,
    time:"12.34am"

  },
  {
    id: 4,
    imgUrl: "/recent4.svg",
    username: "John",
    isNoty: false,
    isBatch: false,
    time:"04.30pm"

  },
  {
    id: 5,
    imgUrl: "/recent1.svg",
    username: "Leon",
    isNoty: true,
    isBatch: false,
    time:"12.34am"
  },
  {
    id: 6,
    imgUrl: "/recent2.svg",
    username: "Mike",
    isNoty: false,
    isBatch: true,
    time:"05.00pm"

  },
  {
    id:7,
    imgUrl: "/recent3.svg",
    username: "John",
    isNoty: true,
    isBatch: true,
    time:"12.34am"

  },
  {
    id: 8,
    imgUrl: "/recent4.svg",
    username: "John",
    isNoty: false,
    isBatch: false,
    time:"04.30pm"

  },
];

const Profile = () => {
  const [isDashbarActive, setIsDashbarActive] = useState(false);

  const dashbarRef = useRef<HTMLDivElement>(null);

  useClickOutside(dashbarRef as React.RefObject<HTMLElement> , () => setIsDashbarActive(false));

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you?",
      sender: "support",
      type: "text",
    },
    {
      id: 2,
      fileUrl: "/verified1.svg",
      sender: "user",
      type: "file",
      fileName: "Hello.jpeg",
    },
    {
      id: 3,
      text: "Hello! How can I help you?",
      sender: "support",
      type: "text",
    },
    {
      id: 4,
      fileUrl: "/verified1.svg",
      sender: "support",
      type: "file",
      fileName: "prem.jpeg",
    },
    { id: 5, text: "Hello! How can I help you?", sender: "user", type: "text" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <section className={`profileSection `}>
      <div className="profileWrapper">
        <BreadCrumb />

        <div
          className=" container   xl:mx-auto lg:mx-10 sm:mx-4 mx-2 
        "
        >
          <h1 className="sectionTitle  sm:py-12 py-8 sm:text-4xl text-2xl font-bold text-gray ">
            Start a Conversation
          </h1>
          <div className="mobileIconBox sm:hidden bg-amber-50 my-0 ">
            <div
              className="icon bg-red-500 h-[40px] w-[40px] flex items-center justify-center"
              ref={dashbarRef}
              onClick={() => setIsDashbarActive(!isDashbarActive)}
            >
              <MdOutlineKeyboardDoubleArrowRight size={24} />
            </div>
          </div>
          <div className="mainDashboardPage sm:py-10 py-8 flex  ">
            <div className="mainDashboardPageWrapper flex   xl:gap-x-7 sm:gap-x-4 gap-x-0 w-full ">
              {/* Dashboard Left Aside  */}
              <aside
                className={`dashLeft hidden   xl:flex-[1.4] md:flex[1.2] shrink-0  text-[18px] sm:flex flex-col space-y-7`}
              >
                <div className="dashTop border-2 flex items-center gap-x-2 h-[55px] px-4 py-3  border-[#28A745] rounded-2xl ">
                  <FaSearch size={20} className="text-gray" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-0 border-0 rounded-lg placeholder:text-[#7C7C7C]"
                  />
                </div>
                <div className="dashBottom px-3 py-5 text-gray rounded-2xl border-[#28A745] border-2 ">
                  <h1 className="text-black font-bold text-xl mb-3">People</h1>

                  <ul className="dashList list-none p-0 overflow-x-auto max-h-[58.5vh] scroll-smooth [scrollbar-width:none]">
                    {charUsers.map((cht) => (
                      <li
                        key={cht.id}
                        className={`  text-gray flex cursor-pointer xl:px-4  py-2 px-2 justify-between items-center   border-b border-b-[#D9D9D9] relative`}
                      >
                        <div className="chatUserLeft flex items-center gap-x-2.5">
                          <div className="image z-10 relative w-fit rounded-full border-[2px] border-[#2E2E2E] p-[2px]">
                            <Image
                              src={cht.imgUrl}
                              height={45}
                              width={45}
                              className="rounded-full"
                              alt="Bidder Image"
                            />
                            {cht.isBatch && (
                              <div className="batch absolute top-[-4px] bg-transparent right-0 z-[100]">
                                <MdVerified className="text-green" />
                              </div>
                            )}
                          </div>
                          <div className="text-[#303030]">
                            <h3 className="username font-semibold">Leon</h3>
                            <p className="lastMessage text-sm font-light p-0 m-0">
                              Lorem ipsum dolor sit amet,
                            </p>
                          </div>
                        </div>
                        <div className="chatUserRight">
                          <h3 className="time text-xs p-0 m-0 text-[#7C7C7C] whitespace-nowrap">
                            Today, {cht.time}
                          </h3>
                          <div className="relative m-0 flex items-center justify-center p-1">
                            {cht.isNoty ? (
                              <p className="  h-[18px] w-[18px] text-white  rounded-full flex bg-[#F24E1E] items-center justify-center ">
                                <span className="text-xs">1</span>
                              </p>
                            ) : (
                              <RiCheckDoubleLine
                                className="text-green"
                                size={16}
                              />
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
              {/* RightBox Dynamic Content */}
              <section className="dashRight flex-[2]  ">
                <div className="dashRightWrapper text-gray mr-3">
                  <div className="chatSection border-2 rounded-2xl sm:px-5 px-2 py-3 border-[#28A745] w-full  mx-auto">
                    {/* Header */}
                    <div className="chatBoxHeader border-b border-gray-300  pb-2.5 flex items-center gap-x-2.5">
                      <div className="image z-[10]   w-fit rounded-full border-[2px] border-[#2E2E2E] p-1">
                        <Image
                          src={"/profileMan.svg"}
                          height={45}
                          width={45}
                          className="rounded-full"
                          alt="Bidder Image"
                        />
                      </div>
                      <h1 className="sm:text-2xl text-xl text-[#303030] font-semibold">
                        Support Team
                      </h1>
                    </div>

                    {/* Chat Messages */}
                    <div className="chatBoxMid py-3  max-h-[60vh]   overflow-y-auto [scrollbar-width:none] scroll-m-0">
                      <div className="chatBoxMidWrapper">
                        {messages.map((msg) => (
                          <>
                            <div key={msg.id}>
                              <div
                                className={`chatMessage mb-4 relative rounded-lg w-fit ${
                                  msg.sender === "user"
                                    ? "  self-end ml-auto"
                                    : ""
                                }`}
                              >
                                {msg.type === "file" && (
                                  <div className="rounded-md p-1 border border-gray-300">
                                    <Image
                                      src={msg?.fileUrl}
                                      alt="Uploaded File"
                                      width={200}
                                      height={200}
                                      className="rounded-md"
                                    />
                                  </div>
                                )}
                              </div>
                              {msg.type == "text" && (
                                <div
                                  className={`chatMessage mb-4 relative rounded-lg w-fit ${
                                    msg.sender === "user"
                                      ? "  self-end ml-auto"
                                      : ""
                                  }`}
                                >
                                  <p
                                    className={`px-4 py-2   rounded-lg ${
                                      msg.sender === "user"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 text-black"
                                    }`}
                                  >
                                    {" "}
                                    {msg.text}
                                  </p>
                                  <span
                                    className={`text-xs text-[#707070] inline-block p-0 m-0 ${
                                      msg.sender === "user"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                                  >
                                    Today, 8.36PM
                                  </span>
                                </div>
                              )}
                            </div>
                          </>
                        ))}
                      </div>
                    </div>

                    {/* Input Box */}
                    <div className="chatBoxBottom flex items-center justify-between gap-2 border-t pt-3">
                      <div className="flex items-center gap-x-3 bg-[#EFF6FCDE] rounded-2xl sm:px-4 w-full px-2.5 py-1 ">
                        <label htmlFor="attchFile" className="p-0 m-0">
                          <MdOutlineAttachFile className="h-[30px] cursor-pointer w-[25px] rotate-[-135deg] text-black" />
                          <input
                            type="file"
                            name="attchFile"
                            id="attchFile"
                            className="hidden"
                            accept="application/pdf"
                          />
                        </label>

                        <input
                          type="text"
                          className="w-full text-[1rem] rounded-lg p-2 outline-0 border-0 placeholder:text-[#303030]"
                          placeholder="Type your message here..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <label htmlFor="attchPhoto" className="p-0 m-0">
                          <FiCamera
                            size={24}
                            className="h-[30px] w-[25px] cursor-pointer text-black"
                          />
                          <input
                            type="file"
                            name="attchPhoto"
                            id="attchPhoto"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      </div>

                      <button
                        type="button"
                        className="bg-white cursor-pointer hover:text-white hover:text-4xl hover:bg-green h-[45px] w-[45px] border-2 border-[#28A745 ] flex items-center justify-center text-green  rounded-full p-2 "
                      >
                        <FaPaperPlane className="rotate-45" size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
