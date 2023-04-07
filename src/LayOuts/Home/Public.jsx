import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
const Public = () => {
  return (
    <>
      <div className="">
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Public;
