import { MdOutlineEngineering } from "react-icons/md";
import Hero from "../hero/Hero";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

function PublicHomePage() {
  const popularCategoryArray = [
    {
      box: 1,
      items: [
        {
          img: "./recent1.svg",
          id: 1,
          title: "Plumbing",
        },
        {
          img: "./recent2.svg",
          id: 2,
          title: "Electric Work",
        },
        {
          img: "./recent3.svg",
          id: 3,
          title: "Carpentry",
        },
        {
          img: "./recent4.svg",
          id: 4,
          title: "Cleaning Services",
        },
      ],
    },
    {
      box: 2,
      items: [
        {
          img: "./recent1.svg",
          id: 1,
          title: "Painting",
        },
        {
          img: "./recent2.svg",
          id: 2,
          title: "Gardening & Landscaping",
        },
        {
          img: "./recent2.svg",
          id: 3,
          title: "Appliance Repair",
        },
      ],
    },

    {
      box: 3,
      items: [
        {
          img: "./recent1.svg",
          id: 1,
          title: "Construction & Masonry",
        },
        {
          img: "./recent2.svg",
          id: 2,
          title: "Vehicle Repair & Maintenance",
        },
        {
          img: "./recent3.svg",
          id: 3,
          title: "Tutoring",
        },
        {
          img: "./recent4.svg",
          id: 4,
          title: "Lawyers",
        },
      ],
    },
  ];
  return (
    <>
      <Hero height="60vh" image="/slider2.svg" key={2} />

      <section className="container py-10 ">
        <h1 className="sm:text-4xl font-bold text-2xl text-center text-green my-4">
          What you looking for?
        </h1>
        <div className="w-full mt-10 ">
          <div className="boxs sm:space-y-0 space-y-10   flex items-center  flex-col sm:flex-row justify-between  xxl:mx-[200px] xl:mx-[100px] lg:px-[30px]   sm:mx-5 mx-2.5   lg:gap-x-[30px] gap-x-0">
            <div className="box    sm:w-auto w-full border rounded-2xl flex-col flex items-center justify-center xl:px-28 lg:px-24 sm:px-[64px]  px-5">
              <h1 className="text-2xl  text-center text-green my-4 whitespace-nowrap">
                You are a fundi
              </h1>
              <div className="icon h-[60px] w-[60px] flex items-center justify-center text-3xl green text-white rounded-full">
                <MdOutlineEngineering size={34} />
              </div>
              <Link
                href={"/signup"}
                className="text-lg px-5 py-1 mt-3 mb-1 rounded-md text-[#2E2E2E] bg-[#F4F4F4] whitespace-nowrap"
              >
                Get Started
              </Link>
              <p className="text-gray text-sm mb-5">advertise your skills!</p>
            </div>

            <div className="box  sm:w-auto w-full border rounded-2xl flex-col flex items-center justify-center  xl:px-24 lg:px-16 sm:px-10 px-5 ">
              <h1 className="text-2xl text-center text-green my-4 whitespace-nowrap">
                Find a Fundi
              </h1>
              <div className="icon h-[60px] w-[60px] flex items-center justify-center text-3xl green text-white rounded-full">
                <MdOutlineEngineering size={34} />
              </div>
              <Link
                href={"/signup"}
                className="text-lg px-5 py-1 mt-3 mb-1 rounded-md text-[#2E2E2E] bg-[#F4F4F4] whitespace-nowrap"
              >
                Find Now
              </Link>
              <p className="text-gray text-sm mb-5">
                You are looking for a reliable Fundi?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container  ">
        <h1 className="sm:text-4xl mb-4 text-2xl flex-wrap flex font-bold items-center justify-center gap-x-2 text-center text-green my-4">
          Home <FaStar /> Office <FaStar />
          Apartment
        </h1>
        <p className="text-center sm:px-10 px-3 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="py-14 xl:px-0 px-3 relative">
        <h1 className="text-4xl sm:mb-4 my-0   font-bold   text-center text-green ">
          Popular Category
        </h1>
        <div className="container py-10">
          {popularCategoryArray.map((cat) => (
            <div
              key={cat.box}
              className={`w-full space-y-14  ${
                cat.items.length === 3
                  ? "flex flex-wrap  justify-evenly"  
                  : "grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 place-items-center" 
              }`}
            >
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center p-3 rounded-lg w-full max-w-[250px] "
                >
                  <div className="p-1 border border-[#28A745] rounded-full">
                    <Image
                      src={"/verified1.svg"}
                      height={90}
                      width={200}
                      className="rounded-full"
                      alt={item.title}
                    />
                  </div>
                  <p className="text-center text-green mt-2 text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PublicHomePage;
