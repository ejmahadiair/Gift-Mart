import React, { useEffect, useState } from "react";
import "./item.scss";
import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
import { foodData, menuNavData } from "../../Helper/data";
const Item = () => {
  const [active, setActive] = useState("All");
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const darr = [];
  //   for (let i = 0; i < data.length; i++) {
  //     if (
  //       data[i].category.toLowerCase().toString() ===
  //       active.toLowerCase().toString()
  //     ) {
  //       darr.push(data[i]);
  //     } else if (
  //       active.toLowerCase().toString() === "All".toLowerCase().toString()
  //     ) {
  //       darr.push(data[i]);
  //     }
  //   }
  //   setData(darr);
  // }, [active]);
  console.log(data);
  useEffect(() => {
    const apiUri = "https://fakestoreapi.com/products";
    if (active === "All") {
      fetch(apiUri)
        .then((res) => res.json())
        .then((res) => setData(res));
    } else {
      fetch(`${apiUri}/category/${active}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [active]);
  return (
    <>
      <div className="ej-scroll-none menu-nav my-[20px]">
        <h1 className="text-center text-[30px] mb-5 mt-20">Our Menu</h1>
        <ul className="nav-bar flex justify-center items-center gap-6 flex-wrap">
          {menuNavData.map((itm, idx) => {
            return (
              <li key={idx} onClick={() => setActive(itm.name)}>
                <a
                  className={`${
                    active.toString() === itm.name.toString()
                      ? "ej-btn-round-active"
                      : "ej-btn-round"
                  }`}
                  to={`/switch-kitchen/${itm.name}`}
                >
                  {itm.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="item-container w-full h-max flex justify-center items-center my-5 p-2 flex-wrap gap-8">
        {data.map((itm, idx) => {
          return (
            <div
              key={idx}
              className={
                active.toString().toLowerCase() ===
                itm.category.toString().toLowerCase()
                  ? `ej-zoomin-show item-box w-[350px] max-md:w-[300px] h-[500px] bg-[#222831] overflow-hidden`
                  : active.toString().toLowerCase() ===
                    "All".toString().toLowerCase()
                  ? `ej-zoomin-show item-box w-[350px] max-md:w-[300px] h-[500px] bg-[#222831] overflow-hidden`
                  : `ej-zoomout-show item-box w-[350px] max-md:w-[300px] h-[500px] bg-[#222831] overflow-hidden`
              }
              style={{ borderRadius: "15px" }}
            >
              <div className="top bg-[#F1F2F3] min-h-[220px] flex justify-center items-center rounded-bl-[45px]">
                <img src={itm.image} alt="" className="w-[130px] h-[130px]" />
              </div>
              <div className="bottom h-max  p-6">
                <h1 className="text-[18px] text-white">{itm.title}</h1>
                <div className="dsc my-[20px] h-10 overflow-hidden">
                  <p className=" text-white">{itm.description}</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <p className="text-white">${itm.price}</p>
                  <div className="bg-[#FFBE33] w-[45px] h-[45px] rounded-full text-white flex justify-center items-center cursor-pointer">
                    <ShoppingCartOutlined
                      className="item"
                      onClick={() => {
                        const foods = JSON.parse(
                          window.localStorage.getItem("foods")
                        );

                        if (foods) {
                          const data = [
                            ...foods,
                            {
                              id: itm?.id,
                              name: itm?.title,
                              price: itm?.price,
                            },
                          ];

                          window.localStorage.setItem(
                            "foods",
                            JSON.stringify(data)
                          );
                        } else {
                          window.localStorage.setItem(
                            "foods",
                            JSON.stringify([
                              {
                                id: itm?.id,
                                name: itm?.title,
                                price: itm?.price,
                              },
                            ])
                          );
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Item;
