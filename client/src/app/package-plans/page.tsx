"use client";
import React  from "react";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import SubcriptionPackage from "@/components/subscriptionPackage/SubcriptionPackage";
const PackagePlansPage = () => {
  return (
    <>
      <section className={`profileSection `}>
        <div className="profileWrapper">
          <BreadCrumb />

          <div
            className=" container   xl:mx-auto lg:mx-10 sm:mx-4 mx-2 
        "
          >
            <section className="package-plans  sm:mr-8 mr-2 mt-14 sm:mb-32 mb-20">
              <div className="plansWrapper">
                <h1 className="text-center text-2xl font-semibold text-gray ">
                  We Offer
                </h1>
                <h3 className="text-center text-4xl my-1 font-bold text-green">
                  Affordable price plans
                </h3>
                <div className="plans gap-x-4 gap-y-12 grid lg:grid-cols-3 md:grid-cols-2 mt-14 grid-cols-1">
                  <SubcriptionPackage
                    key={1}
                    isButton={true}
                    isFlexRow=""
                    data={{
                      title: "Economy Plan",
                      price: "10.99",
                      packageDuration: "1 Mongth",
                      noOfBid: "5",
                      featuredTask: "2",
                      featuredTaskDuration: "5 Days",
                      taskAllowed: true,
                    }}
                  />

                  <SubcriptionPackage
                    key={2}
                    isButton={true}
                    isFlexRow=""
                    data={{
                      title: "Economy Plan",
                      price: "55.30",
                      packageDuration: "3 Mongth",
                      noOfBid: "10",
                      featuredTask: "3",
                      featuredTaskDuration: "10 Days",
                      taskAllowed: true,
                    }}
                  />
                  <SubcriptionPackage
                    key={3}
                    isButton={true}
                    isFlexRow=""
                    data={{
                      title: "Extended Plan",
                      price: "99.99",
                      packageDuration: "1 Year",
                      noOfBid: "50",
                      featuredTask: "20",
                      featuredTaskDuration: "30 Days",
                      taskAllowed: true,
                    }}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagePlansPage;
