"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import React, {  useRef, useState } from "react";
import {
  FaChalkboardTeacher,
  FaCheckCircle,
  FaChevronDown,
  FaLongArrowAltRight,
  FaPaperPlane,
  FaPlus,
  FaRegEdit,
  FaTools,
} from "react-icons/fa";
import { FaBarsStaggered, FaToggleOff } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import {
  MdCarRepair,
  MdElectricBolt,
  MdEngineering,
  MdOutlineAttachFile,
  MdOutlineCarpenter,
  MdOutlineCleaningServices,
  MdOutlineCurrencyRupee,
  MdOutlineDashboard,
  MdOutlineFormatPaint,
  MdOutlinePerson,
  MdOutlinePlumbing,
  MdOutlineSettings,
  MdOutlineSupportAgent,
} from "react-icons/md";
import styles from "./profile.module.css";
import { FiCalendar, FiCamera } from "react-icons/fi";
import SubcriptionPackage from "@/components/subscriptionPackage/SubcriptionPackage";
const categories: Category[] = [
  {
    label: "Plumbing",
    icon: <MdOutlinePlumbing size={20} />,
    subcategories: [
      { label: "Leak Fixing" },
      { label: "Pipe Installation" },
      { label: "Water Heater Repair" },
      { label: "Faucet Replacement" },
      { label: "Borehole Installation Other Services" },
    ],
  },
  {
    label: "Electrical Work",
    icon: <MdElectricBolt size={20} />,
    subcategories: [
      { label: "Wiring Installtion" },
      { label: "Appliance Repair" },
      { label: "Circuit Breaker" },
      { label: "Solar Panel Maintenance" },
      { label: "AC Installation or Repair" },
      { label: "Other Services" },
    ],
  },
  {
    label: "Carpentry",
    icon: <MdOutlineCarpenter size={20} />,
    subcategories: [
      { label: "Furniture Repair" },
      { label: "Custom Furniture production" },
      { label: "Door and Window Installtion" },
      { label: "Glass works" },
      { label: "Other Services" },
    ],
  },
  {
    label: "Cleaning Services",
    icon: <MdOutlineCarpenter size={20} />,
    subcategories: [
      { label: "Home Cleaning" },
      { label: "Deep Cleaning" },
      { label: "Office Cleaning" },
      { label: "Post-Construction Cleaning" },
      { label: "Other Serices" },
    ],
  },
  {
    label: "Painting",
    icon: <MdOutlineFormatPaint size={20} />,
    subcategories: [
      { label: "Interior Painting" },
      { label: "Exterior Painting" },
      { label: "Decorative Painting" },
      { label: "Paint shops" },
      { label: "Other Services" },
    ],
  },
  {
    label: "Gardening and Landscaping",
    icon: <MdOutlineCleaningServices size={20} />,
    subcategories: [],
  },
  {
    label: "Appliance Repair",
    icon: <MdOutlineFormatPaint size={20} />,
    subcategories: [],
  },
  {
    label: "Construction and Masonry",
    icon: <FaTools size={20} />,
    subcategories: [],
  },
  {
    label: "Vehicle Repair and Maintenance",
    icon: <MdEngineering size={20} />,
    subcategories: [],
  },
  {
    label: "Tutoring",
    icon: <FaChalkboardTeacher size={20} />,
    subcategories: [],
  },

  {
    label: "Lawyers",
    icon: <MdCarRepair size={20} />,
    subcategories: [],
  },
  {
    label: "Property Valuers",
    icon: <FaChalkboardTeacher size={20} />,
    subcategories: [],
  },
];

type SubCategory = {
  label: string;
};

type Category = {
  label: string;
  icon?: React.JSX.Element;
  subcategories?: SubCategory[]; // ✅ Ensure it's an array (or undefined)
};
type City = {
  label: string;
};
type TransactionType = {
  label: string;
};
type TransactionStatus = {
  label: string;
};

type ChooseReason = {
  label: string;
};

type ServiceExprience = {
  label: string;
};

const profileLinks = [
  {
    id: 1,
    icon: <MdOutlineDashboard size={24} />,
    title: "Dahboard",
  },
  {
    id: 2,
    icon: <LuWallet size={24} />,
    title: "Wallet",
  },
  {
    id: 3,
    icon: <MdOutlinePerson size={24} />,
    title: "Profile Setting",
  },
  {
    id: 4,
    icon: <MdOutlineSettings size={24} />,
    title: "Account Setting",
  },
  {
    id: 5,
    icon: <MdOutlineCurrencyRupee size={24} />,
    title: "Payment Setting",
  },
  {
    id: 6,
    icon: <MdOutlineSupportAgent size={24} />,
    title: "Dispute & Support",
  },
  {
    id: 7,
    icon: <MdOutlineSupportAgent size={24} />,
    title: "Subscription Package",
  },
  {
    id: 8,
    icon: <MdOutlineSupportAgent size={24} />,
    title: "Identity Verification",
  },
];

const dashBoxs = [
  {
    id: 1,
    imgUrl: "/dashIcon1.svg",
    amount: "225.61",
    title: "Total Spen",
  },
  {
    id: 2,
    imgUrl: "/dashIcon2.svg",
    amount: "305.61",
    title: "Amoutnt Withdraw",
  },
  {
    id: 3,
    imgUrl: "/dashIcon3.svg",
    amount: "100.61",
    title: "Pending Amount",
  },
  {
    id: 4,
    imgUrl: "/dashIcon4.svg",
    amount: "1,000.61",
    title: "Available in Account",
  },
  {
    id: 5,
    imgUrl: "/dashIcon5.svg",
    amount: "2,225.61",
    title: "Escrow Hold Amount",
  },
];

const cities: City[] = [
  { label: "Delhi" },
  { label: "Mumbai" },
  { label: "Kolkata" },
  { label: "Chennai" },
  { label: "Bangalore" },
];

const chooseReasons: ChooseReason[] = [
  {
    label: "Deposit",
  },
  {
    label: "Withdraw",
  },
  {
    label: "Refund",
  },
  {
    label: "Subscribe",
  },
];
const transectionTypes: TransactionType[] = [
  {
    label: "Deposit",
  },
  {
    label: "Withdraw",
  },
  {
    label: "Refund",
  },
  {
    label: "Subscribe",
  },
];
const transectionStatuses: TransactionStatus[] = [
  {
    label: "Completed",
  },
  {
    label: "Cancelled",
  },
  {
    label: "Pending",
  },
];

const ServiceExpriences: ServiceExprience[] = [
  {
    label: "Fresher",
  },
  {
    label: "1 Year",
  },
  {
    label: "2 Year",
  },
  {
    label: "3 Year",
  },
  {
    label: "5 Year",
  },
  {
    label: "7 Year",
  },
  {
    label: "10 Year",
  },
];

const Profile = () => {
  const [isDashbarActive, setIsDashbarActive] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const [city, setCity] = useState<City | null>(null);
  const [chooseReason, setChooseReason] = useState<ChooseReason | null>(null);
  const [serviceExperience, setServiceExperience] =
    useState<ServiceExprience | null>(null);

  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);
  const [transactionStatus, setTransactionStatus] =
    useState<TransactionStatus | null>(null);

  const [cityIsOpen, setCityIsOpen] = useState(false);
  

  const [serviceExperienceIsOpen, setServiceExperienceIsOpen] = useState(false);

  const [transactionTypeIsOpen, setTransactionTypeIsOpen] = useState(false);
  const [reasonIsOpen, setReasonIsOpen] = useState(false);

  const [transactionStausIsOpen, setTransactionStausIsOpen] = useState(false);

  const dashbarRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLLIElement>(null);
 
  const resonRef = useRef<HTMLButtonElement>(null);
  const transactionTypeRef = useRef<HTMLButtonElement>(null);
  const transactionStatusRef = useRef<HTMLButtonElement>(null);

  useClickOutside(dashbarRef as React.RefObject<HTMLElement>, () => setIsDashbarActive(false));
  useClickOutside(cityRef as React.RefObject<HTMLElement>, () => setCityIsOpen(false));
  useClickOutside(resonRef as React.RefObject<HTMLElement>, () => setCityIsOpen(false));

  useClickOutside(transactionTypeRef as React.RefObject<HTMLElement>, () => setCityIsOpen(false));
  useClickOutside(transactionStatusRef as React.RefObject<HTMLElement>, () => setCityIsOpen(false));

  const [messages] = useState([
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

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);


  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setIsCategoryOpen(false);
  };

  const handleSubCategorySelect = (subcategory: SubCategory) => {
    setSelectedSubCategory(subcategory);
    setIsSubCategoryOpen(false);
  };

  return (
    <section className={`profileSection `}>
      <div className="profileWrapper">
        <BreadCrumb />

        <div
          className=" container   xl:mx-auto lg:mx-10 sm:mx-4 mx-2 
        "
        >
          <div className="profileInfo  sm:py-12 py-8   flex items-center sm:flex-row flex-col xxl:gap-x-10 md:gap-x-5 gap-x-0  sm:space-y-0 space-y-5 text-gray">
            <div className="profileInfoLeft md:w-[60%] sm:w-[50%] w-full sm:p-0 px-4  ">
              <div className="flex items-center sm:space-y-0 space-y-4 sm:flex-row flex-col  gap-x-10">
                <div className="image z-[10]   w-fit rounded-full border-[2px] border-[#2E2E2E] p-2">
                  <Image
                    src={"/profileMan.svg"}
                    height={100}
                    width={200}
                    className="rounded-full"
                    alt="Bidder Image"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h2 className="username font-semibold text-[22px]">Kevin</h2>
                  <p className="font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. 
                  </p>
                  <div className="flex flex-col items-start ">
                    {/* Button to Open File Picker */}
                    <label
                      htmlFor="fileInput"
                      className=" px-3 w-fit sm:px-5 justify-center green text-white   flex items-center gap-x-1 py-1.5 text-[1rem] rounded-lg bg-white shadow cursor-pointer"
                    >
                      Change Avatar <FaRegEdit />
                    </label>

                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfoRight sm:w-auto w-full    justify-center flex flex-col">
              <div className=" sm:mx-0 mx-5">
                <h3 className="location font-semibold text-[22px]">Location</h3>
                <p className="font-normal">City Name, Country Name</p>
              </div>
            </div>
          </div>
          <div className="mobileIconBox sm:hidden bg-amber-50 my-0 ">
            <div
              className="icon bg-red-500 h-[40px] w-[40px] flex items-center justify-center"
              ref={dashbarRef}
              onClick={() => setIsDashbarActive(!isDashbarActive)}
            >
              <FaBarsStaggered size={24} />
            </div>
          </div>
          <div className="mainDashboardPage sm:py-10 py-8 flex  ">
            <div className="mainDashboardPageWrapper flex xl:gap-x-20 sm:gap-x-10 gap-x-0 w-full ">
              {/* Dashboard Left Aside  */}
              <aside
                className={`dashLeft hidden  xl:flex-1 md:flex-[1.6] shrink-0  text-[18px] sm:flex flex-col space-y-10`}
              >
                <div className="dashTop border border-[#28A745]">
                  <ul className="dashList list-none p-0 ">
                    {profileLinks.map((link) => (
                      <li
                        onClick={() => setActiveItem(link.id)}
                        key={link.id}
                        className={`${styles.dashListItem} ${
                          activeItem == link.id ? styles.activeLink : ""
                        } text-gray flex cursor-pointer activeLink items-center bg-[#F4F4F4] justify-between py-2 px-3 border-b border-b-[#D9D9D9] relative`}
                      >
                        <p className="itemTitle ml-5">{link.title}</p>
                        {link.icon}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dashBottom px-5 py-5 text-gray border-green-300 border ">
                  <h3 className="title mb-7  font-semibold">Payment Method</h3>
                  <div className="payMethods flex flex-col gap-y-4 my-2 ">
                    <div className="payMethod flex items-center gap-x-2.5">
                      <FaCheckCircle size={20} className="text-green" />
                      <p>Setup Paypal Account</p>
                    </div>
                    <div className="payMethod flex items-center gap-x-2.5">
                      <FaCheckCircle size={20} className="text-green" />
                      <p>Setup Bank Account</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-5">
                    <button className="mx-auto text-center w-[75%] px-3 py-1 green text-white rounded">
                      Confirm
                    </button>
                  </div>
                </div>
              </aside>
              {/* RightBox Dynamic Content */}
              <section className="dashRight  flex-[3]  ">
                {activeItem == 1 && (
                  <div className="dashRightWrapper mr-3">
                    <div className="boxes flex items-center sm:flex-row flex-col flex-wrap  xxl:gap-x-32 xl:gap-x-28 lg:gap-x-16 sm:gap-x-10 gap-x-0 sm:space-y-0 space-y-10 ">
                      {dashBoxs.map((box) => (
                        <div
                          key={box.id}
                          className={`${styles.box} active border shrink-0   md:w-[40%] sm:w-[100%] sm:mr-4  w-full mb-10 border-[#28A745]  py-5   flex items-center flex-col justify-center `}
                        >
                          <div className="icon mb-3">
                            <Image
                              src={box.imgUrl}
                              height={50}
                              width={50}
                              alt={box.title}
                            />
                          </div>
                          <h1 className="boxTitle flex items-center text-[22px] text-[#2E2E2E] font-bold">
                            <MdOutlineCurrencyRupee
                              size={20}
                              className="font-bold"
                            />
                            <p>{box.amount}</p>
                          </h1>
                          <h3 className="text-gray whitespace-nowrap  text-lg font-semibold">
                            {box.title}
                          </h3>
                          <span className="text-xs text-gray">Refresh</span>
                        </div>
                      ))}
                    </div>
                    <hr className="gray" />

                    <div className="bxs flex items-center my-10 mr-4 flex-wrap sm:flex-row flex-col gap-x-10 sm:space-y-0 space-y-5">
                      <div className="b  py-5 px-4 flex flex-col items-center  justify-center border boder-[#666666] flex-1 sm:w-auto w-full">
                        <h3 className="text-gray font-semibold text-[18px] whitespace-nowrap">
                          Total Bid
                        </h3>
                        <h1 className="text-[22px] text-[#2E2E2E] font-bold">
                          12
                        </h1>
                      </div>
                      <div className="b py-5 px-4 flex flex-col items-center justify-center border boder-[#666666] flex-1 sm:w-auto w-full">
                        <h3 className="text-gray font-semibold text-[18px]">
                          Total Bid
                        </h3>
                        <h1 className="text-[22px] text-[#2E2E2E] font-bold">
                          12
                        </h1>
                      </div>
                      <div className="b py-5 px-4 flex flex-col items-center justify-center border boder-[#666666] flex-1 sm:w-auto w-full">
                        <h3 className="text-gray font-semibold text-[18px]">
                          Total Bid
                        </h3>
                        <h1 className="text-[22px] text-[#2E2E2E] font-bold">
                          12
                        </h1>
                      </div>
                    </div>
                  </div>
                )}

                {activeItem == 2 && (
                  <div className="dashRightWrapper mr-3">
                    <div className="button mb-5 mt-0 flex items-center justify-end  md:mr-14">
                      <button className="px-3 w-fit text-lg sm:px-5 justify-center green text-white rounded flex m-0 items-center gap-x-1 py-1.5 text-[1rem]">
                        <FaPlus size={14} /> Add Amount
                      </button>
                    </div>
                    <div className="boxes flex items-center sm:flex-row flex-col flex-wrap  xxl:gap-x-32 xl:gap-x-28 lg:gap-x-16 sm:gap-x-10 gap-x-0 sm:space-y-0 space-y-10 ">
                      {dashBoxs.map((box) => (
                        <div
                          key={box.id}
                          className={`${styles.box} active border shrink-0   md:w-[40%] sm:w-[100%] sm:mr-4  w-full mb-10 border-[#28A745]  py-5   flex items-center flex-col justify-center `}
                        >
                          <div className="icon mb-3">
                            <Image
                              src={box.imgUrl}
                              height={50}
                              width={50}
                              alt={box.title}
                            />
                          </div>
                          <h1 className="boxTitle flex items-center text-[22px] text-[#2E2E2E] font-bold">
                            <MdOutlineCurrencyRupee
                              size={20}
                              className="font-bold"
                            />
                            <p>{box.amount}</p>
                          </h1>
                          <h3 className="text-gray whitespace-nowrap  text-lg font-semibold">
                            {box.title}
                          </h3>
                          <span className="text-xs text-gray">Refresh</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem == 3 && (
                  <div className="dashRightWrapper text-gray mr-3">
                    <div className=" flex items-center w-full   md:flex-row flex-col  gap-y-4 gap-x-10">
                      <div className="inputGroup   relative flex flex-col space-y-2 lg:w-[50%] w-full">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="border rounded-lg border-black p-3 resize-none"
                          placeholder="Enter Your First Name"
                        />
                      </div>
                      <div className="inputGroup   relative flex flex-col space-y-2 lg:w-[50%] w-full">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="border rounded-lg border-black p-3 resize-none"
                          placeholder="Enter Your Last Name"
                        />
                      </div>
                    </div>

                    <label className="text-gray mb-4  mt-10 flex justify-between sm:text-[22px] text-[18px] font-semibold">
                      <p>Services Category</p>
                      <button className="px-3 w-fit text-sm font-normal sm:px-5 text-gray justify-center    flex m-0 items-center gap-x-1 py-1.5 text-[1rem]">
                        <FaPlus size={10} className="font-normal" /> Add
                      </button>
                    </label>

                    {/* Fundi Fields  */}
                    <div className="choosingcategories  flex items-center flex-col sm:flex-row flex-wrap gap-y-4 gap-x-10">
                      {/* CATEGORY DROPDOWN MENU */}
                      <div className="inputGroup relative flex flex-col  space-y-2 sm:flex-1 w-full">
                        <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                          Services
                        </label>
                        <button
                          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                          type="button"
                          className="w-full p-4 flex items-center justify-between border rounded-lg bg-white shadow"
                        >
                          <div className="flex items-center gap-2">
                            {selectedCategory ? (
                              <>
                                {selectedCategory.icon} {selectedCategory.label}
                              </>
                            ) : (
                              "Select Service"
                            )}
                          </div>
                          <FaChevronDown size={20} />
                        </button>
                        {isCategoryOpen && (
                          <ul className="absolute w-full border h-52 overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-full rounded">
                            {categories.map((category) => (
                              <li
                                key={category.label}
                                onClick={() => handleCategorySelect(category)}
                                className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                              >
                                {category.icon} {category.label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* SUBCATEGORY DROPDOWN  MENU*/}
                      <div className="inputGroup relative flex flex-col space-y-2 sm:flex-1 w-full">
                        <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                          Specializations
                        </label>
                        <button
                          onClick={() =>
                            (selectedCategory?.subcategories ?? []).length &&
                            setIsSubCategoryOpen(!isSubCategoryOpen)
                          }
                          type="button"
                          className={`w-full p-4 flex items-center justify-between border rounded-lg bg-white shadow 
            ${
              !(selectedCategory?.subcategories ?? []).length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
                          disabled={
                            !(selectedCategory?.subcategories ?? []).length
                          }
                        >
                          <div className="flex items-center gap-2">
                            {selectedSubCategory
                              ? selectedSubCategory.label
                              : "Select a Sub Category"}
                          </div>
                          <FaChevronDown size={20} />
                        </button>
                        {isSubCategoryOpen &&
                          (selectedCategory?.subcategories ?? []).length >
                            0 && (
                            <ul className="absolute w-full border bg-white shadow-lg h-52 overflow-y-auto [scrollbar-width:thin] z-10  mt-1 left-0  top-full rounded">
                              {selectedCategory?.subcategories?.map(
                                (subcategory) => (
                                  <li
                                    key={subcategory.label}
                                    onClick={() =>
                                      handleSubCategorySelect(subcategory)
                                    }
                                    className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                                  >
                                    {subcategory.label}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </div>
                    </div>

                    {/* Fundi Fields  */}
                    <div className="inputGroup mt-10 relative flex flex-col  space-y-2 sm:flex-1 w-full">
                      <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                        Service Experience
                      </label>
                      <button
                        onClick={() =>
                          setServiceExperienceIsOpen(!serviceExperienceIsOpen)
                        }
                        type="button"
                        className="w-full p-4 flex items-center justify-between border rounded-lg bg-white shadow"
                      >
                        <div className="flex items-center gap-2">
                          {serviceExperience ? (
                            <>{serviceExperience.label}</>
                          ) : (
                            "Select Service"
                          )}
                        </div>
                        <FaChevronDown size={20} />
                      </button>
                      {serviceExperienceIsOpen && (
                        <ul className="absolute w-full border h-52 overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-full rounded">
                          {ServiceExpriences.map((exp) => (
                            <li
                              key={exp.label}
                              onClick={() => {
                                setServiceExperience(exp);
                                setServiceExperienceIsOpen(false);
                              }}
                              className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                            >
                              {exp.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <h3 className="text-gray sm:text-[24px] text-[20px] font-semibold my-5">
                      Location
                    </h3>
                    <div className="inputGroup mt-5 relative flex flex-col space-y-2 ">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="description"
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
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
                        placeholder="Select a Category"
                      />
                    </div>
                    <div className="  flex items-start w-full md:flex-row flex-col mt-10 gap-y-4 gap-x-10">
                      {/* City Dropdown */}
                      <div className="inputGroup relative flex flex-col space-y-2 lg:w-[50%] w-full">
                        <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
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
                          className="text-gray sm:text-[24px] text-[20px] font-semibold"
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

                    <div className="flex items-center justify-end mt-10">
                      <button className="  text-center   px-10 py-2 green text-white rounded">
                        Save & Update
                      </button>
                    </div>
                  </div>
                )}

                {activeItem == 4 && (
                  <div className="dashRightWrapper text-gray mr-3">
                    <div className="inputGroup mb-10 relative flex flex-col space-y-2 sm:flex-1 w-full">
                      <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                        Privacy & Notification
                      </label>
                      <button
                        type="button"
                        className={`w-full cursor-pointer p-4 flex items-center justify-between border rounded-lg bg-white   
                                `}
                      >
                        <div className="flex items-center gap-2">
                          Make your profile photo visible to all craftsman.
                        </div>
                        <FaToggleOff size={30} className="text-gray " />
                      </button>
                    </div>

                    <h3 className="text-gray  sm:text-[24px] text-[20px] font-semibold mb-10">
                      Deactivate Account
                    </h3>
                    <div className="inputGroup relative flex flex-col  space-y-2 ">
                      <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                        Choose Reason
                      </label>
                      <button
                        onClick={() => setReasonIsOpen(!reasonIsOpen)}
                        type="button"
                        className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white  "
                      >
                        <div className="flex items-center gap-2">
                          {chooseReason ? (
                            <>{chooseReason.label}</>
                          ) : (
                            "Why you want to leave?"
                          )}
                        </div>
                        <FaChevronDown size={20} className="text-green" />
                      </button>
                      {reasonIsOpen && (
                        <ul className="absolute w-full border min-h-40 overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-full rounded transition-all duration-200">
                          {chooseReasons.map((re) => (
                            <li
                              key={re.label}
                              onClick={() => {
                                setChooseReason(re);
                                setReasonIsOpen(false);
                              }}
                              className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                            >
                              {re.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1">
                      <label
                        htmlFor="description"
                        className="text-gray sm:text-[24px] text-[20px] font-semibold"
                      >
                        {" "}
                        Description
                      </label>
                      <textarea
                        className="border rounded-lg border-black p-3 resize-none"
                        name=""
                        rows={8}
                        id=""
                        placeholder="Enter your description"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-end mt-10">
                      <button className="  text-center   px-10 py-2 green text-white rounded">
                        Deactivate Now
                      </button>
                    </div>
                  </div>
                )}

                {activeItem == 5 && (
                  <div className="dashRightWrapper text-gray mr-3">
                    <div className="relative flex items-start w-full md:flex-row flex-col mt-10 gap-y-4 gap-x-10">
                      <div className="relative inputGroup flex flex-col space-y-2 lg:w-[50%] w-full">
                        <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                          Transaction Type
                        </label>
                        <button
                          onClick={() =>
                            setTransactionTypeIsOpen(!transactionTypeIsOpen)
                          }
                          type="button"
                          className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow min-h-[55px]"
                        >
                          <div className="flex items-center gap-2">
                            {transactionType ? (
                              <>{transactionType.label}</>
                            ) : (
                              "All"
                            )}
                          </div>
                          <FaChevronDown size={20} className="text-green" />
                        </button>

                        {transactionTypeIsOpen && (
                          <ul className="absolute w-full border min-h-40 overflow-y-auto bg-white z-20 shadow-lg mt-1 left-0 top-full rounded transition-all duration-200">
                            {transectionTypes.map((tns) => (
                              <li
                                key={tns.label}
                                onClick={() => {
                                  setTransactionType(tns);
                                  setTransactionTypeIsOpen(false);
                                }}
                                className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                              >
                                {tns.label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="inputGroup relative flex flex-col space-y-2 lg:w-[50%] w-full">
                        <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                          Status
                        </label>
                        <button
                          onClick={() =>
                            setTransactionStausIsOpen(!transactionStausIsOpen)
                          }
                          type="button"
                          className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow min-h-[55px]"
                        >
                          <div className="flex items-center gap-2">
                            {transactionStatus ? (
                              <>{transactionStatus.label}</>
                            ) : (
                              "All"
                            )}
                          </div>
                          <FaChevronDown size={20} className="text-green" />
                        </button>

                        {transactionStausIsOpen && (
                          <ul className="absolute w-full border  overflow-y-auto bg-white z-20 shadow-lg mt-1 left-0 top-full rounded transition-all duration-200">
                            {transectionStatuses.map((st) => (
                              <li
                                key={st.label}
                                onClick={() => {
                                  setTransactionStatus(st);
                                  setTransactionStausIsOpen(false);
                                }}
                                className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                              >
                                {st.label}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* <div className="   mt-10 gap-y-4  ">
                      <label className="text-gray whitespace-nowrap sm:text-[22px] text-[18px] font-semibold space-x-5">
                        Period
                      </label>
                      <div className=" flex items-center w-full  md:flex-row flex-col     gap-y-4   ">
                        <div className="inputGroup relative flex flex-col  space-y-2 lg:w-[50%] w-full">
                          <button
                            type="button"
                            className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white  "
                          >
                            <div className="flex items-center gap-2">From</div>
                            <FiCalendar size={20} className="text-green" />
                          </button>
                        </div>
                        <span className="inline-block mx-4">
                          <FaLongArrowAltRight
                            className="lg:rotate-0 rotate-90 text-green "
                            size={24}
                          />
                        </span>
                        <div className="inputGroup relative flex flex-col  space-y-2 lg:w-[50%] w-full">
                          <button
                            type="button"
                            className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow"
                          >
                            <div className="flex items-center gap-2">To</div>
                            <FiCalendar size={20} className="text-green" />
                          </button>
                        </div>
                      </div>
                    </div> */}

                    <div className="   mt-10 gap-y-4  ">
                      <label className="text-gray whitespace-nowrap sm:text-[22px] text-[18px] font-semibold space-x-5">
                        Period
                      </label>
                      <div className=" flex items-center w-full  md:flex-row flex-col     gap-y-4   ">
                        <div className="inputGroup   flex flex-col space-y-2 lg:w-[50%] w-full">
                          <div className="flex items-center justify-between w-full relative">
                            {/* Button to Open Date Picker */}
                            <label
                              htmlFor="date1"
                              className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow cursor-pointer"
                              onClick={() => {
                                console.log("Triggered");
                                document.getElementById("date1")?.showPicker();
                              }}
                            >
                              <p>From</p>
                              <FiCalendar size={24} className="text-green" />
                              <input
                                type="date"
                                id="date1"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </label>

                            {/* Input ko label ke andar laaya taaki proper jagah pe open ho */}
                          </div>
                        </div>

                        <span className="inline-block mx-4">
                          <FaLongArrowAltRight
                            className="lg:rotate-0 rotate-90 text-green "
                            size={24}
                          />
                        </span>
                        <div className="inputGroup   flex flex-col space-y-2 lg:w-[50%] w-full">
                          <div className="flex items-center justify-between w-full relative">
                            {/* Button to Open Date Picker */}
                            <label
                              htmlFor="date2"
                              className="w-full px-3 py-3 flex items-center justify-between border rounded-lg bg-white shadow cursor-pointer"
                              onClick={() => {
                                console.log("Triggered");
                                document.getElementById("date2")?.showPicker();
                              }}
                            >
                              <p>To</p>
                              <FiCalendar size={24} className="text-green" />
                              <input
                                type="date"
                                id="date2"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </label>

                            {/* Input ko label ke andar laaya taaki proper jagah pe open ho */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end ">
                      <button className="  text-center  py-2 cursor-pointer  text-green rounded">
                        Clear All Filters
                      </button>
                    </div>
                    <div className="inputGroup sm:text-[20px] text-[17px] items-center text-gray font-semibold mt-10 relative flex justify-around   border rounded-lg bg-white py-3  w-full ">
                      <button className="">Type</button>
                      <button className="">Amount</button>
                      <button className="">Status</button>
                      <button className="">Time</button>
                    </div>
                  </div>
                )}

                {activeItem == 6 && (
                  <div className="dashRightWrapper text-gray mr-3">
                    {/* <div className="chatSection border-2 rounded-2xl px-5  border-[#28A745]">
                      <div className="chatBoxHeader border-b border-b-gray-300 py-3">
                        <div className="user flex items-center gap-x-2.5">
                          <div className="image rounded-full border p-2 border-gray-300 w-fit">
                            <Image
                              src={"/verified1.svg"}
                              width={50}
                              height={50}
                              alt="User Profile"
                            />
                          </div>
                          <h1 className="sm:text-2xl text-xl">Support Team </h1>
                        </div>
                        <div className="user hidden"></div>
                      </div>
                      <div className="chatBoxMid">
                        <div className="chatBoxMidWrapper py-3">
                          <div className="chatContent">

                          </div>
                        </div>
                      </div>
                      <div className="chatBoxBottom">
                        <div className="chatBoxBottomWrapper py-3">
                          <div className="inputContainer"></div>
                          <button className="sendBtn">

                          </button>

                        </div>

                      </div>
                    </div> */}
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
                                        src={`${msg?.fileUrl}`}
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
                )}

                {activeItem == 7 && (
                  <div className="dashRightWrapper mr-3">
                    <div className="button mb-5 mt-0 flex items-center justify-end  md:mr-14">
                      <button className="px-3 w-fit text-lg sm:px-5 justify-center green text-white rounded flex m-0 items-center gap-x-1 py-1.5 text-[1rem]">
                        Upgrade Plan
                      </button>
                    </div>
                    <div className="boxes flex items-center sm:flex-row flex-col flex-wrap  xxl:gap-x-32 xl:gap-x-28 lg:gap-x-16 sm:gap-x-10 gap-x-0 sm:space-y-0 space-y-10 ">
                      <SubcriptionPackage
                        isButton={false}
                        isFlexRow="flex-row items-center justify-between"
                        data={{
                          title: "Extended Plan",
                          price: "324",
                          packageDuration: "1 Year",
                          noOfBid: "50",
                          featuredTask: "20",
                          featuredTaskDuration: "30 Days",
                          taskAllowed: true,
                        }}
                      />
                    </div>
                  </div>
                )}

                {activeItem == 8 && (
                  <div className="dashRightWrapper text-gray mr-3">
                    <div className="inputGroup relative flex flex-col space-y-2  ">
                      <label className="text-gray whitespace-nowrap sm:text-[22px] text-[18px] font-semibold">
                        ID Proof
                      </label>

                      <div className="flex flex-col items-start ">
                        <label
                          htmlFor="fileInput"
                          className=" px-3  sm:px-5 border rounded-lg bg-white justify-between    flex items-center gap-x-1 py-4 text-[1rem] w-full shadow cursor-pointer"
                        >
                          Upload Your ID Proof{" "}
                          <MdOutlineAttachFile
                            size={24}
                            className="rotate-[-135deg]"
                          />
                        </label>

                        <input
                          type="file"
                          id="fileInput"
                          className="hidden"
                          accept="image/*"
                        />
                      </div>

                      <button className="ms-auto green text-white px-5 sm:w-32 w-full mt-2 py-1.5 rounded-lg">
                        Upload{" "}
                      </button>
                    </div>

                    <div className="inputGroup relative flex flex-col space-y-2  mt-10 ">
                      <label className="text-gray flex justify-between sm:text-[22px] text-[18px] font-semibold">
                        <p>Certification</p>
                        <button className="px-3 w-fit text-lg sm:px-5 text-gray justify-center    flex m-0 items-center gap-x-1 py-1.5 text-[1rem]">
                          <FaPlus size={14} /> Add New
                        </button>
                      </label>

                      <div className="flex flex-col items-start ">
                        <label
                          htmlFor="fileInput"
                          className=" px-3  sm:px-5 border rounded-lg bg-white justify-between    flex items-center gap-x-1 py-4 text-[1rem] w-full shadow cursor-pointer"
                        >
                          Upload Your Certificate{" "}
                          <MdOutlineAttachFile
                            size={24}
                            className="rotate-[-135deg]"
                          />
                        </label>

                        <input
                          type="file"
                          id="fileInput"
                          className="hidden"
                          accept="image/*"
                        />
                      </div>

                      <button className="ms-auto green text-white px-5 sm:w-32 w-full mt-2 py-1.5 rounded-lg">
                        Upload{" "}
                      </button>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
