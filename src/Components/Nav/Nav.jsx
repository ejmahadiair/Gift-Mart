import { UserOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { navData } from "../../Helper/data";
import "./Nav.scss";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const [resNav, setResNav] = useState(false);
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);
  const [countFood, setCountFood] = useState(0);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const foods = JSON.parse(window.localStorage.getItem("foods"));
    if (foods) {
      setCountFood(foods?.length);
    } else {
      setCountFood(foods?.length);
    }
  }, [window.localStorage.getItem("foods")]);

  useEffect(() => {
    if (window.innerWidth < 850) {
      setResNav(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 850) {
        setResNav(true);
      } else if (window.innerWidth >= 850) {
        setResNav(false);
        setOpen(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 


  return (
    <>
      <div className="nav-container w-full flex justify-around items-center">
        <div className="nav-left flex items-center">Gift Mart</div>
        {!resNav && (
          <>
            <div className="nav-center">
              <ul className="nav-bar flex items-center gap-10">
                {navData.map((itm, idx) => {
                  return (
                    <li key={idx} onClick={() => setActive(itm.name)}>
                      <Link
                        className={`${
                          active.toString() === itm.name.toString()
                            ? "active"
                            : ""
                        }`}
                        to={`/gift-mart/${itm.name}`}
                      >
                        {itm.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav-right flex items-center gap-5">
              <UserOutlined className="item" />
              <div className="relative">
                <p className="text-[#e69c00] absolute top-[-10px] left-[-10px]">
                  {countFood}
                </p>
                <ShoppingCartOutlined
                  onClick={() => {
                    navigate("/gift-mart/CART");
                  }}
                  className="item"
                />
              </div>

              <SearchOutlined className="item" />
              <a onClick={()=>navigate("/gift-mart/Book")} className="ej-btn-round">
                Book Online
              </a>
            </div>
          </>
        )}

        {resNav && (
          <>
            <div
              className="toggle-btn w-[40px] h-[25px] flex justify-between items-center flex-col cursor-pointer"
              onClick={showDrawer}
            >
              <div className="w-full h-[3px] rounded-sm bg-white "></div>
              <div className="w-full h-[3px] rounded-sm bg-white "></div>
              <div className="w-full h-[3px] rounded-sm bg-white"></div>
            </div>
          </>
        )}
      </div>
      <Drawer
        title={<p className="text-center">Switch Kitchen</p>}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="nav-center">
          <ul className="nav-bar flex flex-col items-center gap-10">
            {navData.map((itm, idx) => {
              return (
                <li key={idx} onClick={() => setActive(itm.name)}>
                  <Link
                    href="#"
                    className={`${
                      active.toString() === itm.name.toString() ? "active" : ""
                    }`}
                    to={`/gift-mart/${itm.name}`}
                    onClick={onClose}
                  >
                    {itm.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-right flex flex-col justify-center items-center gap-5 mt-5">
          <div className="flex items-center gap-5">
            <UserOutlined className="item cursor-pointer" onClick={onClose} />
            <div className="relative">
              <p className="text-[#e69c00] absolute top-[-10px] left-[-10px]">
                {countFood}
              </p>
              <div
                onClick={() => {
                  navigate("/gift-mart/CART");
                }}
              >
                <ShoppingCartOutlined className="item cursor-pointer" onClick={onClose}/>
              </div>
            </div>

            <SearchOutlined className="item cursor-pointer" onClick={onClose} />
          </div>

          <a
            href="tel:+8801642167361"
            className="ej-btn-round"
            onClick={onClose}
          >
            Book Online
          </a>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
