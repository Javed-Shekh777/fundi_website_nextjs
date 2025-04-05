import React from "react";
import styles from "./notification.module.css";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import { FaRegBell } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NotificationPage = () => {
   

  const notifications = [
    {
      label: "INFO",
      id:1,
    },
    {
      label: "DANGER",
      id:2,
    },
    {
      label: "SUCCESS",
      id:3,

    },
    {
      label: "INFO",
      id:4,
    },
    {
      label: "DANGER",
      id:5,
    },
    {
      label: "SUCCESS",
      id:6,

    },
  ];
  return (
    <>
      <section className={` `}>
        <BreadCrumb />

        <div className={`${styles.container} container`}>
          <div
            className={`  lg:px-[150px] sm:px-[20px] px-[10px]`}
          >
            <h1 className="title text-4xl">Notifications</h1>
            <div className="notifications my-16">
              {notifications.map((noty) => (
                <div
                  key={noty.id}
                  className={`${styles.notification} py-3 border-b border-b-gray-300 flex sm:items-center justify-between`}
                >
                  <div className="notyLeft flex   gap-x-3">
                    <div 
                    style={{background:noty.label==="SUCCESS" ? "var(--green)": noty.label==="DANGER"? "var(--red)":"var(--yellow)"}}
                    className="icon  text-white green w-[50px] h-[50px] flex shrink-0 items-center justify-center rounded-full  ">
                      <FaRegBell size={25} className="" />
                    </div>
                    <div className=""
                    style={{color:noty.label==="SUCCESS" ? "black":"#666666",fontWeight:noty.label==="SUCCESS" ? "bold":"400"}}
                    >
                    <p className="desc"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                    <p className="date text-gray text-sm">March 1, 2024</p>
                    </div>
                  </div>
                  <div className="notyRight w-[40px] h-[40px] flex shrink-0 items-center justify-center"
                    style={{color:noty.label==="SUCCESS" ? "black":"#666666"}}
                  >
                    <RxCross2 size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotificationPage;
