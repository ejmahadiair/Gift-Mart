import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.scss";
const herobg = require("../../media/photos/banner.jpg");
const b2 = require("../../media/photos/summersell.webp");
const Banner = () => {
  return (
    <>
      <div className="banner-container w-full h-[90vh] max-md:h-[40vh]">
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="w-full h-full relative">
            <img className="w-full h-full" src={herobg} alt="" />
            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.67)]">
              <div className="banner-content absolute top-[200px] max-md:top-[50px] left-[200px] max-md:left-[100px] w-[50%]">
                <h1 className="text-white text-[40px] max-md:text-[20px]">Gift Shop</h1>
                <p className="text-white my-5 max-md:text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio illum at numquam sit laudantium fuga provident
                  incidunt, praesentium atque aliquid delectus odio doloribus,
                  doloremque repellendus explicabo omnis mollitia, nulla
                  voluptates
                </p>
                <a href="tel:+8801642167361" className="ej-btn-round">Take Out</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative">
            <img className="w-full h-full" src={b2} alt="" />
            <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.67)]">
              <div className="banner-content absolute top-[200px] max-md:top-[50px] left-[200px] max-md:left-[100px] w-[50%]">
                <h1 className="text-white text-[40px] max-md:text-[20px] ">Gift Shop</h1>
                <p className="text-white my-5 max-md:text-[12px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio illum at numquam sit laudantium fuga provident
                  incidunt, praesentium atque aliquid delectus odio doloribus,
                  doloremque repellendus explicabo omnis mollitia, nulla
                  voluptates
                </p>
                <a href="tel:+8801642167361" className="ej-btn-round">Take Out</a>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
