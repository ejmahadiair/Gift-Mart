import React from "react";
import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  TwitterCircleFilled,
} from "@ant-design/icons/lib/icons";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer-conatiner w-full min-h-[400px] h-max bg-[#222831] text-white">
        <div className="w-full h-1"></div>
        <div className="w-[80%] h-max flex max-md:flex-col justify-between items-center mx-auto mt-[50px]">
          <div className="w-[350px] text-center mt-2">
            <h2 className="mb-4 text-[30px]">Contact Us</h2>
            <div className="">
              <p>
                <EnvironmentFilled /> Location
              </p>
              <p>
                <PhoneFilled /> Call+8801642167361{" "}
              </p>
              <p>
                <MailFilled /> ejmahadi@gmail.com
              </p>
            </div>
          </div>
          <div className="w-[350px] text-center mt-2">
            <h2 className=" mb-4 text-[30px]">Gift Mart</h2>
            <div>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://www.facebook.com/ej.mahadi"
                  target="_blank"
                >
                  <FacebookFilled />
                </a>
                <a
                  href="https://www.facebook.com/ej.mahadi"
                  target="_blank"
                >
                  <TwitterCircleFilled />
                </a>
                <a
                  href="https://www.linkedin.com/in/eftakhar-jaman/"
                  target="_blank"
                >
                  <LinkedinFilled />
                </a>
                <a
                  href="https://www.instagram.com/ej.mahadi/"
                  target="_blank"
                >
                  <InstagramFilled />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[350px] text-center mt-2">
            <h2 className=" mb-4 text-[30px]">Opening Hours</h2>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <div className="text-center mt-10 flex flex-col justify-center items-center gap-5">
        <p>© 2023 All Rights Reserved By Gift Mart</p>
        <p>© Distributed By EJSOFTAI (Eftakhar Jaman)</p>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
