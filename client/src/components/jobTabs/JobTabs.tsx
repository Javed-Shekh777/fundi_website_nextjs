"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import useClickOutside from "@/hooks/useClickOutside";

const JobTabs = () => {
  const pathname = usePathname();
  const filterRef = useRef<HTMLButtonElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);

  const [showFilter, setShowFilter] = useState(false);
  const [showTabs, setShowTabs] = useState(false);

  useClickOutside(filterRef as React.RefObject<HTMLElement>, () => setShowFilter(false));

  useClickOutside(tabRef as React.RefObject<HTMLElement>, () => setShowTabs(false));

  const tabs = [
    {
      name: "Explore Job",
      path: "/jobs/explore-job",
      activeColor: "bg-purple-500",
      textColor: "text-white",
    },
    {
      name: "Applied Job",
      path: "/jobs/applied-job",
      activeColor: "bg-slate-100",
      textColor: "text-green",
    },
    {
      name: "Bid",
      path: "/jobs/bid",
      activeColor: "green",
      textColor: "text-white",
    },
    {
      name: "Active Job",
      path: "/jobs/active-job",
      activeColor: "yellow",
      textColor: "text-black",
    },
    {
      name: "Past Job",
      path: "/jobs/past-job",
      activeColor: "bg-purple-500",
      textColor: "text-white",
    },
  ];

  const filterOptions = {
    "/jobs/bid": [
      { id: 1, label: "Sort By Date" },
      { id: 2, label: "Sort By Morning Shift" },
      { id: 3, label: "Sort By Afternoon Shift" },
    ],
    "/jobs/applied-job": [
      { id: 1, label: "Sort By Price" },
      { id: 2, label: "Sort By Date" },
      { id: 3, label: "Sort By Morning Shift" },
      { id: 4, label: "Sort By Afternoon Shift" },
    ],
    "/jobs/active-job": [
      { id: 1, label: "Sort By Price" },
      { id: 2, label: "Sort By Date" },
      { id: 3, label: "Sort By Morning Shift" },
      { id: 4, label: "Sort By Afternoon Shift" },
    ],
    "/jobs/past-job": [
      { id: 1, label: "Sort By Price" },
      { id: 2, label: "Sort By Date" },
      { id: 3, label: "Sort By Morning Shift" },
      { id: 4, label: "Sort By Afternoon Shift" },
      { id: 5, label: "Sort By Ratings" },
    ],
  };

  return (
    <>
      <div className="filters text-[18px] px-2 py-2 my-2 flex items-center justify-between">
        <div className="relative">
          <button
            ref={tabRef}
            onClick={() => setShowTabs(!showTabs)}
            className="sm:hidden block"
          >
            <FaBarsStaggered size={30} />
          </button>

          {showTabs && (
            <div className="tabs flex flex-col text-[1rem] w-44 z-[150] bg-white shadow-lg px-3 py-4 rounded-lg absolute left-0 top-[35px]">
              {tabs.map((tab) => (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className={`cursor-pointer px-2 mt-2 rounded ${
                    pathname === tab.path ? tab.activeColor : "bg-gray-100"
                  }`}
                >
                  <button
                    type="button"
                    className={`tab py-2 px-4 cursor-pointer whitespace-nowrap ${
                      pathname === tab.path ? tab.textColor : "text-gray-500"
                    }`}
                  >
                    {tab.name}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="tabs sm:flex hidden w-full items-center justify-around">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className={`cursor-pointer px-2 mt-2 rounded ${
                pathname === tab.path ? tab.activeColor : "bg-gray-100"
              }`}
            >
              <button
                type="button"
                className={`tab py-2 px-4 cursor-pointer ${
                  pathname === tab.path ? tab.textColor : "text-gray-500"
                }`}
              >
                {tab.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button
            ref={filterRef}
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center cursor-pointer"
          >
            <p>Filter</p>
            <MdOutlineFilterAlt size={30} />
          </button>

          {/* Filter Dropdown */}
          {showFilter && (
            <ul className="filterOptions text-[1rem] z-[150] bg-white shadow-lg list-none py-3 px-2 rounded-lg absolute right-0 top-[35px]">
              {(
                filterOptions[pathname as keyof typeof filterOptions] || []
              ).map((item) => (
                <li
                  key={item.id}
                  className="py-2 cursor-pointer px-2 whitespace-nowrap hover:bg-slate-200 rounded-lg"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default JobTabs;

// <div className="tabs sm:flex    hidden  w-full items-center justify-around ">
// {tabs.map((tab) => (
//   <Link
//     key={tab.path}
//     href={tab.path}
//     className={`${
//       pathname === tab.path
//         ? tab.path === "/jobs/bid"
//           ? "green "
//           : tab.path === "/jobs/active-job"
//           ? "yellow"
//           : tab.path === "/jobs/past-job"
//           ? "bg-purple-500"
//           : "text-black"
//         : "bg-gray-100"
//     } cursor-pointer px-2 mt-2 rounded `}
//   >
//     <button
//       type="button"
//       className={`${
//         pathname === tab.path
//           ? tab.path === "/jobs/bid"
//             ? "text-white"
//             : tab.path === "/jobs/active-job"
//             ? "text-black"
//             : tab.path === "/jobs/past-job"
//             ? "text-white"
//             : "text-black"
//           : "text-gray-500"
//       } tab py-2 px-4 cursor-pointer`}
//     >
//       {tab.name}
//     </button>
//   </Link>
// ))}
// </div>
