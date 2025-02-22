import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Feature from  "../Feature/Feature"; // Import Feature component

// Feature Data
const featureData = [
  {
    title: "Global Networking",
    description:
      "Dive into thriving communities tailored to your interests. Share ideas, seek advice, and spark innovation by connecting with like-minded individuals.",
    img: "/Images/img1.png",
  },
  {
    title: "Seamless Applications",
    description:
      "Easily apply for jobs and events or manage applications for roles in your startup—all from one intuitive dashboard.",
    img: "/Images/img2.png",
  },
  {
    title: "Industry Highlights",
    description: "Never miss out on industry happenings. From tech summits to business workshops, explore events that expand your knowledge and network.",
    img: "/Images/img3.png",
  },
  {
    title: "Startup Showcase",
    description:
      "Founders can spotlight their startups to attract collaborators, investors, and talent, building visibility within a targeted audience.",
    img: "/Images/img4.png",
  },
];

// Responsive settings
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Slider = () => {
  return (
    <Carousel responsive={responsive} autoPlay={true} infinite={true}>
      {featureData.map((item, index) => (
        <Feature
          key={index}
          title={item.title}
          description={item.description}
          img={item.img}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
