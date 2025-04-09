"use client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import React, { useRef, useState } from "react";
import {
  MdCarRepair,
  MdElectricBolt,
  MdEngineering,
  MdOutlineCarpenter,
  MdOutlineCleaningServices,
  MdOutlineFormatPaint,
  MdOutlinePlumbing,
} from "react-icons/md";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCheck,
  FaChevronDown,
  FaPlus,
  FaTools,
} from "react-icons/fa";
import Link from "next/link";

const categories: Category[] = [
  {
    value: "plumbing",
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
    value: "electrical",
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
    value: "carpentry",
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
    value: "cleaning",
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
    value: "painting",
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
    value: "gardening and landscaping",
    label: "Gardening and Landscaping",
    icon: <MdOutlineCleaningServices size={20} />,
    subcategories: [],
  },
  {
    value: "applicance repair",
    label: "Appliance Repair",
    icon: <MdOutlineFormatPaint size={20} />,
    subcategories: [],
  },
  {
    value: "construction and masonry",
    label: "Construction and Masonry",
    icon: <FaTools size={20} />,
    subcategories: [],
  },
  {
    value: "vehicle repair",
    label: "Vehicle Repair and Maintenance",
    icon: <MdEngineering size={20} />,
    subcategories: [],
  },
  {
    value: "tutoring",
    label: "Tutoring",
    icon: <FaChalkboardTeacher size={20} />,
    subcategories: [],
  },

  {
    value: "lawyer",
    label: "Lawyers",
    icon: <MdCarRepair size={20} />,
    subcategories: [],
  },
  {
    value: "property valuers",
    label: "Property Valuers",
    icon: <FaChalkboardTeacher size={20} />,
    subcategories: [],
  },
];

const prefferedTimes = [
  {
    label: "Morning 9 to 2",
    id: 1,
  },
  {
    label: "Evening 2 to 7",
    id: 2,
  },
  {
    label: "After Hours",
    id: 3,
  },
];

type SubCategory = {
  label: string;
};

type PrefferedTime = {
  label: string;
};

type Category = {
  label: string;
  value:string;
  icon?: React.JSX.Element;
  subcategories?: SubCategory[]; // ✅ Ensure it's an array (or undefined)
};

const PostJob = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);

  const [selectedPreffreredTime, setSelectedPreffreredTime] =
    useState<PrefferedTime | null>(null);

  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [isSpecificDate, setIsSpecificDate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

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

  const handleDateAndTime = (name: string) => {
    setSelectedDate("");
    if (!name) {
      setIsSpecificDate(true);
    } else {
      setIsSpecificDate(false);
      const t = new Date();
      const date = t.toISOString().split("T")[0];
      // let time = t.toTimeString().split(" ")[0];
      setSelectedDate(date);
    }
  };

  const onHandleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      <section className={`postJob `}>
        <BreadCrumb />
        <div className={`  py-0`}>
          <div
            className={`  lg:px-[150px] sm:px-[30px] px-[20px]`}
          >
            <div className="pageTitle text-green sm:text-4xl text-2xl my-6">
              Job Details
            </div>
            <form
              action=""
              onSubmit={onHandleSubmit}
              className={`form lg:my-20 my-10`}
            >
              <div className="choosingcategories mb-5 flex items-center flex-col sm:flex-row flex-wrap gap-y-4 gap-x-10">
                {/* CATEGORY DROPDOWN MENU */}
                <div className="inputGroup relative flex flex-col  space-y-2 sm:flex-1 w-full">
                  <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                    Service Category
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
                        "Select a Category"
                      )}
                    </div>
                    <FaChevronDown size={20} />
                  </button>
                  {isCategoryOpen && (
                    <ul className="absolute w-full border h-52 overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-[105px] rounded">
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
                    Sub Category
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
                    disabled={!(selectedCategory?.subcategories ?? []).length}
                  >
                    <div className="flex items-center gap-2">
                      {selectedSubCategory
                        ? selectedSubCategory.label
                        : "Select a Sub Category"}
                    </div>
                    <FaChevronDown size={20} />
                  </button>
                  {isSubCategoryOpen &&
                    (selectedCategory?.subcategories ?? []).length > 0 && (
                      <ul className="absolute w-full border bg-white shadow-lg h-52 overflow-y-auto [scrollbar-width:thin] z-10  mt-1 left-0 top-[100px] rounded">
                        {selectedCategory?.subcategories?.map((subcategory) => (
                          <li
                            key={subcategory.label}
                            onClick={() => handleSubCategorySelect(subcategory)}
                            className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                          >
                            {subcategory.label}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </div>

              <div className="inputGroup mt-10 relative flex flex-col space-y-2 flex-1">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[24px] text-[20px] font-semibold"
                >
                  Description{" "}
                  <span className="text-sm text-[#666666] font-normal tracking-wide">
                    (Optionl)
                  </span>
                </label>
                <textarea
                  className="border rounded-lg border-black p-3 resize-none"
                  name=""
                  rows={8}
                  id=""
                  placeholder="Enter Description"
                ></textarea>
              </div>

              <div className="inputGroup mt-10 relative flex flex-col space-y-2 sm:w-[50%]">
                <label
                  htmlFor="description"
                  className="text-gray sm:text-[24px] text-[20px] font-semibold"
                >
                  Location
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                  placeholder="Enter your Location"
                />
              </div>
              <div className="inputGroup mt-10 relative flex flex-col space-y-2 sm:w-[50%]">
                <div className="flex flex-col items-start gap-2">
                  {/* Button to Open File Picker */}
                  <label
                    htmlFor="fileInput"
                    className="flex items-center gap-2  p-3 rounded-lg bg-white shadow cursor-pointer"
                  >
                    Attach a Photo <FaPlus size={12} />
                  </label>

                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>
              <button
                type="button"
                className="green cursor-pointer text-white my-4 px-8 py-3 text-[1rem] tracking-wide  rounded-lg"
              >
                View Photo
              </button>

              <div className="inputGroup mt-10  relative flex flex-col space-y-2 sm:w-[50%]">
                <label
                  htmlFor="material"
                  className="text-gray sm:text-[24px] text-[20px] font-semibold"
                >
                  Material{" "}
                  <span className="text-sm text-[#666666] font-normal tracking-wide">
                    (Optionl)
                  </span>
                </label>
                <input
                  type="text"
                  className="border rounded-lg border-black p-3 resize-none"
                />
              </div>

              <div className="mb-5 mt-10 flex flex-col space-y-2">
                <label
                  htmlFor="material"
                  className="text-gray sm:text-[24px] text-[20px] font-semibold"
                >
                  Select Date & Time
                </label>
                <div className=" flex items-center   sm:flex-row flex-wrap gap-y-4 gap-x-10">
                  <div className="inputGroup  relative flex  items-center sm:space-x-5 space-x-5 flex-1">
                    <div
                      onClick={() => handleDateAndTime("Immediate")}
                      className="checkbox cursor-pointer h-5 w-5 p-1 border flex items-center justify-center  rounded-full"
                    >
                      <div
                        style={{
                          background: isSpecificDate
                            ? "transparent"
                            : "var(--green)",
                        }}
                        className="   rounded-full h-[10px] w-[10px]"
                      ></div>
                    </div>
                    <p className="text-[#2E2E2E]">Immediate</p>
                  </div>
                  <div className="inputGroup  relative flex  items-center sm:space-x-5 space-x-5 flex-1">
                    <div
                      onClick={() => handleDateAndTime("")}
                      className="checkbox cursor-pointer h-5 w-5 p-1 border flex items-center justify-center  rounded-full"
                    >
                      <div
                        className="  rounded-full h-[10px] w-[10px]"
                        style={{
                          background: isSpecificDate
                            ? "var(--green)"
                            : "transparent",
                        }}
                      ></div>
                    </div>
                    <p className="text-[#2E2E2E] whitespace-nowrap">
                      Specific Date
                    </p>
                  </div>
                </div>
              </div>

              {isSpecificDate && (
                <div className="choosingdateandtime my-6 flex items-center flex-col sm:flex-row flex-wrap gap-y-4 gap-x-10">
                  <div className="inputGroup relative flex flex-col space-y-2 sm:flex-1 w-full">
                    <label
                      htmlFor="dateInput"
                      className="text-gray sm:text-[24px] text-[20px] font-semibold"
                    >
                      Select a Date
                    </label>

                    <input
                      ref={dateInputRef}
                      type="date"
                      id="dateInput"
                      value={selectedDate}
                      className="absolute inset-0 opacity-0 w-full cursor-pointer"
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />

                    <div
                      className="flex items-center justify-between p-3 border rounded-lg bg-white shadow cursor-pointer"
                      onClick={() => dateInputRef.current?.click()}
                    >
                      <span>{selectedDate || "Select a Date"}</span>
                      <FaCalendarAlt className="text-gray-500" />
                    </div>
                  </div>

                  <div className="inputGroup relative flex flex-col  space-y-2 sm:flex-1 w-full">
                    <label className="text-gray whitespace-nowrap sm:text-[24px] text-[20px] font-semibold">
                      Select Time
                    </label>
                    <button
                      onClick={() => setIsTimeOpen(!isTimeOpen)}
                      type="button"
                      className="w-full p-4 flex items-center justify-between border rounded-lg bg-white shadow"
                    >
                      <div className="flex items-center gap-2">
                        {selectedPreffreredTime ? (
                          <>{selectedPreffreredTime.label}</>
                        ) : (
                          "Select Preffered Time"
                        )}
                      </div>
                      <FaChevronDown size={20} />
                    </button>
                    {isTimeOpen && (
                      <ul className="absolute w-full border  overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-[105px] rounded">
                        {prefferedTimes.map((time) => (
                          <li
                            key={time.id}
                            onClick={() => {
                              setSelectedPreffreredTime(time);
                              setIsTimeOpen(false);
                            }}
                            className="flex items-center sm:gap-x-4 gap-x-2 py-2 px-5 hover:bg-gray-100 cursor-pointer"
                          >
                            {time.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="green cursor-pointer mt-10 rounded-lg relative left-[50%] translate-x-[-50%]   text-center text-white p-4 w-full  md:w-[50%]"
              >
                Post Job
              </button>
            </form>
          </div>
        </div>
      </section>

      {isSuccess && (
        <section
          className={`fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="flex items-center justify-center h-full w-full bg-[rgba(0,0,0,0.1)]">
            <div className="shadow sm:p-10 px-3 py-5 sm:m-0 m-2 rounded-lg bg-white flex items-center flex-col justify-center">
              <h1 className="sm:text-4xl text-green text-2xl  font-bold my-3 text-center  ">
                Success!
              </h1>

              <div className="icon rounded-full  p-5 sm:p-8  green  ">
                <FaCheck size={50} color="white" />
              </div>
              <p className="text-[24px] text-[#2E2E2E]  font-bold my-3 text-center  ">
                Thank you for your request
              </p>
              <p className="text-center ">
                <span className="font-bold ">2RTO782U13</span> is your job
                number.
              </p>
              <div className="buttons flex flex-col items-center   space-y-4 w-full mt-5 ">
                <Link
                  href={"/"}
                  className="green text-center rounded-lg w-full text-white py-3 px-5"
                >
                  Show Your Request
                </Link>
                <Link
                  href={"/"}
                  className=" rounded-lg text-center text-[#666666] border-2 w-full border-[#666666] py-3 px-5"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostJob;
