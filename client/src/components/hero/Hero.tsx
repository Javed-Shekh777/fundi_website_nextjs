"use client";
import React from "react";

type Props = {
  image:string;
  height:string
};

const Hero = ({image,height}:Props) => {
  return (
    <section
    style={{
      backgroundImage: `url(${image})`,  
      backgroundSize: "cover",  
      backgroundPosition: "center center",  
      backgroundRepeat:"no-repeat",
      height:height
    }}
      className={` flex items-start flex-col justify-center`}
    >
      <div className="container px-4">
        <div className="sm:max-w-[75%] md:max-w-[50%] w-full">
          <h1
            className={`heroSectionTitle sm:text-5xl text-3xl mb-3 text-[#28A745]`}
          >
            Lorem ipsum dolor sit amet
          </h1>
          <p className={`heroSectionDesc text-[20px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
