import React from "react";
import "./about.scss";
const aboutImg = require("../../media/photos/giftAbout.png");
const About = () => {
  return (
    <>
      <div className="about-container bg-[#222831] w-full min-h-[100vh] h-max text-white p-10">
        <div className="flex max-md:flex-col-reverse w-[75%] mx-auto h-full justify-center items-center gap-10">
          <div className="left w-[49%] max-md:w-[100%]">
            <img src={aboutImg} alt="about image" className="w-[80%] h-[80%]" />
          </div>
          <div className="right w-[49%] max-md:w-[100%]">
            <h1 className="text-[30px]">We Gift Mart</h1>
            <p className="my-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <a href="https://www.facebook.com/ej.mahadi"
                  target="_blank" className="ej-btn-round"> Read More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
