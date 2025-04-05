 import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import styles from "./group.module.css";

type DataItem = {
  img: string;
  id: number;
  title: string;
};

type GroupProps = {
  title: string;
  height: string;
  width: string;
  isArrow: boolean;
  bg: string;
  subTitleFont?: string;
  data: DataItem[];
  imgHeight: number;
  space:string
};

const Group: React.FC<GroupProps> = ({
  title,
  data,
  bg,
  height,
  width,
  isArrow,
  subTitleFont,
  imgHeight,
  space
}) => {
  return (
    <section
      className={`${styles.container} container   bg-${bg} py-4 sm:px-8 px-5 relative`}
    >
      <h1 className={` text-[#666666] font-semibold text-3xl mb-7`}>
        {title}
      </h1>

      <div className={`${styles.groupData} ${space} flex sm:px-12 px-0    items-center`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.groupDataItem}   flex flex-col items-center justify-center`}
            style={{ height, width, minHeight:height,minWidth:height}} // ✅ Fix: Using inline styles for height & width
          >
            <div className={`${styles.groupDataItemImage} p-1 border border-[#28A745] rounded-full w-fit`}>
              <Image
                src={item.img}
                height={imgHeight}
                width={imgHeight}
                className="rounded-full"  
                alt={item.title}
              />
            </div>
            <p
              className={`${styles.groupDataItemImage} text-center my-2 text-[#28A745]`}
              style={{ fontSize: subTitleFont }} // ✅ Fix: Using inline styles for font size
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {isArrow && (
        <div
          className={`  absolute z-10 flex items-center justify-between px-4 w-full top-[50%] left-0 translate-y-[-50%]`}
        >
          <div className="arrowLeft h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
            <FaArrowLeft />
          </div>
          <div className="arrowRight h-10 w-10 text-white cursor-pointer flex items-center justify-center rounded-full bg-[#28A745]">
            <FaArrowRight />
          </div>
        </div>
      )}
    </section>
  );
};

export default Group;
