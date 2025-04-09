"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaChevronDown,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPlus,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";
import {
  MdCarRepair,
  MdElectricBolt,
  MdEngineering,
  MdOutlineCarpenter,
  MdOutlineCleaningServices,
  MdOutlineFormatPaint,
  MdOutlinePlumbing,
} from "react-icons/md";

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
  subcategories?: SubCategory[];  
};
 

type ServiceExprience = {
  label: string;
};

 
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

const Step3 = () => {
  const [serviceExperience, setServiceExperience] =
    useState<ServiceExprience | null>(null);


  const [serviceExperienceIsOpen, setServiceExperienceIsOpen] = useState(false);



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
    <>
      <header
        className={`container text-white flex-wrap  sm:py-4 py-2  sm:px-6 px-3 flex justify-between items-center`}
      >
        {/* Logo */}
        <div className={`flex items-center`}>
          <Image
            src="/logo.svg"
            className={`xl:w-[100px] sm:w-[100px]  ] w-[50px] h-[80px]`}
            alt="Logo"
            height={100}
            width={100}
          />
        </div>
      </header>
      <div className="">
        <div className="bg-[#F4F4F4] py-4">
          <div className="container  sm:px-14 px-3 flex items-center justify-between">
            <div className="green flex items-center sm:gap-x-2  text-white sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">Personal Details</p>
              <FaUserCircle size={24} className="sm:hidden " />
            </div>
            <div className="w-full h-[2px] green"></div>
            <div className="green flex items-center sm:gap-x-2  text-white sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">Address</p>
              <FaMapMarkerAlt size={24} className="sm:hidden" />
            </div>
            <div className="w-full  h-[2px] green"></div>
            <div className="green flex items-center sm:gap-x-2  text-white sm:px-10 px-3.5 sm:rounded rounded-full sm:w-auto sm:h-auto w-[50px] h-[50px] py-2 whitespace-nowrap">
              <p className="sm:block hidden">About Us</p>
              <FaInfoCircle size={24} className="sm:hidden" />
            </div>
          </div>
        </div>

        <form
          action=""
          className=" flex flex-col items-center my-10  text-gray px-2"
        >
          {/* Form Section */}
          <div className="mt-8 w-full max-w-[900px]">
          <div className="inputGroup relative flex flex-col space-y-2 flex-1">
                      <label
                        htmlFor="description"
                        className="text-gray sm:text-[24px] text-[20px] font-semibold"
                      >
                        {" "}
                        About me
                      </label>
                      <textarea
                        className="border rounded-lg border-black p-3 resize-none"
                        name=""
                        rows={8}
                        id=""
                        placeholder="Enter about me"
                      ></textarea>
                    </div>
            <label className="text-gray mb-4  mt-10 flex justify-between sm:text-[22px] text-[18px] font-semibold">
              <p>Services Category</p>
              <button className="px-3 w-fit text-sm font-normal sm:px-5 text-gray justify-center    flex m-0 items-center gap-x-1 py-1.5 text-[1rem]">
                <FaPlus size={10} className="font-normal" /> Add
              </button>
            </label>
            <div className="choosingcategories  flex items-center flex-col sm:flex-row flex-wrap gap-y-4 gap-x-10">
              {/* CATEGORY DROPDOWN MENU */}
              <div className="inputGroup relative flex flex-col  space-y-2 sm:flex-1 w-full">
                <label className="text-gray whitespace-nowrap sm:text-[20px] text-[18px] font-semibold">
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
                  <FaChevronDown size={20} className="text-green" />
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
                <label className="text-gray whitespace-nowrap sm:text-[20px] text-[18px] font-semibold">
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
                  disabled={!(selectedCategory?.subcategories ?? []).length}
                >
                  <div className="flex items-center gap-2">
                    {selectedSubCategory
                      ? selectedSubCategory.label
                      : "Select a Sub Category"}
                  </div>
                  <FaChevronDown size={20} className="text-green" />
                </button>
                {isSubCategoryOpen &&
                  (selectedCategory?.subcategories ?? []).length > 0 && (
                    <ul className="absolute w-full border bg-white shadow-lg h-52 overflow-y-auto [scrollbar-width:thin] z-10  mt-1 left-0  top-full rounded">
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

            <div className="inputGroup mt-10 relative flex flex-col  space-y-2 sm:flex-1 w-full">
              <label className="text-gray whitespace-nowrap sm:text-[20px] text-[18px] font-semibold">
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
                <FaChevronDown size={20} className="text-green" />
              </button>
              {serviceExperienceIsOpen && (
                <ul className="absolute w-full border h-52 overflow-y-auto [scrollbar-width:thin]  bg-white z-10 shadow-lg  mt-1 left-0 top-full transition-all duration-300 rounded">
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




            <div className="flex items-center justify-end ">
              <div className="flex items-center gap-x-3 gap-y-3">
                <Link
                  href={"/fundi/step2"}
                  className="mt-6 px-6 py-2 sm:w-44 w-full   text-center border-[#28A745] border rounded-lg text-lg"
                >
                  Previous
                </Link>
                <button
                type="submit"
                  className="mt-6 px-6 py-2 sm:w-44 w-full green text-center  text-white rounded-lg text-lg"
                >
                  Create
                </button>
              </div>
            </div>
          </div>

          {/* Next Button */}
        </form>
      </div>
    </>
  );
};

export default Step3;
