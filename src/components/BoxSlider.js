// import React, {useEffect} from "react";
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomePageLogo from "../Images/Home_Page_Logo.svg"
import "../CSS/BoxSlider.css"



export const data = [
  {
    cover: "Maqure has integrated the entire system with safe & secure blockchain technology. This integration will help in making supply chain more robust by increased transparency and traceability. We are working on making the supply chain network and documentation process more optimized by the use of smart contract technology.",
    title: "Interstaller",
  },
  {
    cover: "In chemical industry, quality has always been an issue, If you're a buyer, it is your utmost priority. Maqure understands your concerns. Thereby, we ensure the quality of material 'agreed' while finalizing the deal.",
    title: "Inception",
  },
  {
    cover: "Sending materials offshore has always been a headache. Maqure helps in timely end-to-end delivery as well. Maqure provides transparent, real time optimized freight service.",
    title: "Blade Runner 2049",
  },
  {
    cover: "Do you not have money to procure? Don't worry, Maqure helps you with this as well! We provide instant financing cum credit facilities by tying up with financial institutions",
    title: "Icon man 3",
  },
  {
    cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
    title: "Venom",
  },
  {
    cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
    title: "Steins Gate",
  },
];


export default function BoxSlider() {

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //   document.getElementById("arrow_forward").click();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" , height: "30rem"}} id="main_div_carousal">
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 3;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 60 : 650}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor={false}
              className="stackedcarousal"
            />
          );
        }}
      />
      <>
        <Fab
          style={{ position: "absolute", top: "40%", left: 25, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
          id="arrow_back"
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 25, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
          id="arrow_forward"
        >
          <ArrowForwardIcon />
        </Fab>
      </>
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below 
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "80%",
        height: "18rem",
        userSelect: "none",
        margin: "5rem 0",
        borderRadius: "5rem"
      }}
      className="my-slide-component"
    >
      <div className="home_page_section_2_card_1 home_page_section_2_card" style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
        }}>
          <h2><img src={HomePageLogo} alt=""/> Buying</h2>
          <p>{cover}</p>
      </div>

      
    </div>
  );
});