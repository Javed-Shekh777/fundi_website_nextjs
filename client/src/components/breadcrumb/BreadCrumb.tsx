"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames);

  const capitalize = (str: string) => {
    return str
      .replace(/-/g, " ")  
      .split(" ")  
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" ");  
  };

  return (
    <section className="breaducurms sm:px-6 p-2 bg-[#F4F4F4]">
      <nav className="p-3 bg-[#F4F4F4]   sm:ml-12">
      <ul className="flex space-x-2 text-[15px]">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        </li>

        {pathnames.map((value, index) => {
          const href = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="p-0 ml-[-8px] inline-block"><FaChevronRight /></span>
              {!isLast ? (
                <Link href={href} className="text-blue-500 hover:underline">
                  {capitalize(decodeURIComponent(value))}
                </Link>
              ) : (
                <span className="text-gray-700 font-semibold">{capitalize(decodeURIComponent(value))}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
    </section>
  );
};

export default BreadCrumb;
