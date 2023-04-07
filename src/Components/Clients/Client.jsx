import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./client.scss";
const cl1 = require("../../media/photos/fakecl1.PNG");
const cl2 = require("../../media/photos/fakecl2.jpg");
const Client = () => {
  const [resNav, setResNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 850) {
      setResNav(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
        setResNav(true);
      } else if (window.innerWidth >= 850) {
        setResNav(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1 className="text-center text-[40px] my-[10px]">
        What Says Our Customers
      </h1>
      <div className="client-container w-[75%] min-h-[300px] h-max  mx-auto my-5">
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
          slidesPerView={!resNav ? 2 : 1}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="w-full h-full relative">
            <div className="clinte-text flex max-md:flex-col gap-10 justify-center items-center">
              <div className="part w-[100%] p-[25px]">
                <div className="w-full bg-[#222831] rounded-lg min-h-[200px] p-4 text-white">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus earum voluptates soluta dignissimos mollitia
                    laborum quam, exercitationem pariatur quaerat aperiam.
                  </p>
                  <h1 className="my-[15px] text-[30px]">JAMAN MAHADI</h1>
                  <p>Dahaka</p>
                </div>
                <div
                  className="circle-drop w-[150px] h-[150px] mt-4"
                  style={{ borderRadius: "50%", border: "4px solid #ffbe33" }}
                >
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={cl1} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative">
            <div className="clinte-text flex max-md:flex-col gap-10 justify-center items-center">
              <div className="part w-[100%] p-[25px]">
                <div className="w-full bg-[#222831] rounded-lg min-h-[200px] p-4 text-white">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus earum voluptates soluta dignissimos mollitia
                    laborum quam, exercitationem pariatur quaerat aperiam.
                  </p>
                  <h1 className="my-[15px] text-[30px]">IQRA JAWARIA</h1>
                  <p>Dahaka</p>
                </div>
                <div
                  className="circle-drop w-[150px] h-[150px] mt-4"
                  style={{ borderRadius: "50%", border: "4px solid #ffbe33" }}
                >
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={cl2} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative">
            <div className="clinte-text flex max-md:flex-col gap-10 justify-center items-center">
              <div className="part w-[100%] p-[25px]">
                <div className="w-full bg-[#222831] rounded-lg min-h-[200px] p-4 text-white">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus earum voluptates soluta dignissimos mollitia
                    laborum quam, exercitationem pariatur quaerat aperiam.
                  </p>
                  <h1 className="my-[15px] text-[30px]">JAMAN MAHADI</h1>
                  <p>Dahaka</p>
                </div>
                <div
                  className="circle-drop w-[150px] h-[150px] mt-4"
                  style={{ borderRadius: "50%", border: "4px solid #ffbe33" }}
                >
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={cl1} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full relative">
            <div className="clinte-text flex max-md:flex-col gap-10 justify-center items-center">
              <div className="part w-[100%] p-[25px]">
                <div className="w-full bg-[#222831] rounded-lg min-h-[200px] p-4 text-white">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus earum voluptates soluta dignissimos mollitia
                    laborum quam, exercitationem pariatur quaerat aperiam.
                  </p>
                  <h1 className="my-[15px] text-[30px]">IQRA JAWARIA</h1>
                  <p>Dahaka</p>
                </div>
                <div
                  className="circle-drop w-[150px] h-[150px] mt-4"
                  style={{ borderRadius: "50%", border: "4px solid #ffbe33" }}
                >
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{ borderRadius: "50%" }}
                  >
                    <img src={cl2} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Client;
