import Group from "../group/Group";
import Hero from "../hero/Hero";

function CustomerHomePage() {
  const servicesArray = [
    {
      img: "./plumbring.svg",
      id: 1,
      title: "Plumbring",
    },
    {
      img: "./electric.svg",
      id: 2,
      title: "Electric Work",
    },
    {
      img: "./carpentry.svg",
      id: 3,
      title: "Carpentry",
    },
    {
      img: "./cleaning.svg",
      id: 4,
      title: "Cleaning Services",
    },
  ];

  const carftsManArray = [
    {
      img: "./verified1.svg",
      id: 1,
      title: "Alex",
    },
    {
      img: "./verified2.svg",
      id: 2,
      title: "John",
    },
    {
      img: "./verified3.svg",
      id: 3,
      title: "Mike",
    },
    {
      img: "./verified4.svg",
      id: 4,
      title: "Leon",
    },
    {
      img: "./verified5.svg",
      id: 5,
      title: "Robert",
    },
    {
      img: "./verified6.svg",
      id: 6,
      title: "Bob",
    },
  ];

  const recentServicesArray = [
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
  ];

  return (
    <>
      <Hero height="70vh" image="/slider1.svg" key={1} />

      <Group
        bg="#fff"
        space={" space-x-8 sm:space-x-6"}
        height="320px"
        imgHeight={230}
        width="250px"
        key={2}
        subTitleFont="24px"
        isArrow={true}
        data={servicesArray}
        title="Services"
      />
      <Group
        bg="#eee"
        space={"  sm:space-x-7 space-x-0"}
        key={3}
        isArrow={false}
        imgHeight={120}
        subTitleFont="16px"
        height="180px"
        width="130px"
        data={carftsManArray}
        title="Verified Carftsman"
      />
      <Group
        bg="#fff"
        space={" space-x-8 sm:space-x-6"}
        height="320px"
        imgHeight={230}
        width="250px"
        key={4}
        subTitleFont="24px"
        isArrow={false}
        data={recentServicesArray}
        title="Recent Services"
      />
    </>
  );
}

export default CustomerHomePage;
