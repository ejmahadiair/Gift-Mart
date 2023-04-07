import { ShoppingCartOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { foodData, menuNavData } from "../../Helper/data";
const Menu = () => {
  const [active, setActive] = useState("All");
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const darr = [];
  //   for (let i = 0; i < foodData.length; i++) {
  //     if (
  //       foodData[i].type.toLowerCase().toString() ===
  //       active.toLowerCase().toString()
  //     ) {
  //       darr.push(foodData[i]);
  //     } else if (
  //       active.toLowerCase().toString() === "All".toLowerCase().toString()
  //     ) {
  //       darr.push(foodData[i]);
  //     }
  //   }
  //   setData(darr);
  // }, [active]);
  useEffect(()=>{
    const apiUri =  'https://fakestoreapi.com/products';
    if(active==="All"){
      fetch(apiUri)
    .then(res=>res.json()).then(res=>setData(res))
    }else{
      fetch(`${apiUri}/category/${active}`)
    .then(res=>res.json()).then(res=>setData(res))
    }
    
  },[active])
  return (
    <>
      <div className="menu-container w-full">
        <div className="ej-scroll-none menu-nav my-[20px] sticky top-[-1px] z-[1] bg-[#012E44] opacity-[0.8] text-white p-5">
          <h1 className="text-center text-[30px] mb-5 ">All Products</h1>
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
        <div className="menu-item-box w-[80%] mx-auto">
          {data.map((itm, idx) => {
            return (
              <div
                key={idx}
                className={
                  active.toString().toLowerCase() ===
                  itm.category.toString().toLowerCase()
                    ? `ej-zoomin-show   ${
                        idx % 2 == 0
                          ? " my-4 W-[80%]  h-[90vh] gap-5  flex flex-row-reverse max-lg:flex-col-reverse"
                          : "W-[80%] flex h-[90vh] max-lg:flex-col-reverse"
                      }`
                    : active.toString().toLowerCase() ===
                      "All".toString().toLowerCase()
                    ? `ej-zoomin-show   ${
                        idx % 2 == 0
                          ? " my-4 W-[80%] h-[90vh] gap-5  flex flex-row-reverse max-lg:flex-col-reverse"
                          : "W-[80%] flex h-[90vh] max-lg:flex-col-reverse"
                      }`
                    : `ej-zoomout-show   ${
                        idx % 2 == 0
                          ? " my-4 W-[80%] h-[90vh] gap-5  flex flex-row-reverse max-lg:flex-col-reverse"
                          : "W-[80%] flex h-[90vh] max-lg:flex-col-reverse"
                      }`
                }
              >
                <div className="left w-[49%] p-4 max-lg:w-[100%] h-full overflow-auto">
                  <h1 className="text-[gray] text-[20px]">{idx + 1}</h1>
                  <h1 className="text-[#012E44] text-[40px] ">{itm?.title}</h1>
                  <p className="text-[gray] text-[21px]">{itm?.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-white">${itm.price}</p>
                    <div className="bg-[#FFBE33] w-[45px] h-[45px] rounded-full text-white flex justify-center items-center">
                      <ShoppingCartOutlined
                        className="item cursor-pointer"
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
                  <a href="tel:+8801642167361" className="ej-btn-round">
                    Buy Now
                  </a>
                </div>
                <div className="right w-[49%] max-lg:w-[100%] bg-[#012E44] h-full flex justify-center items-center rounded-lg">
                  <img src={itm.image} alt="" className="w-[230px] h-[230px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
