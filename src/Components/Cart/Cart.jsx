import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { DeleteFilled } from "@ant-design/icons/lib/icons";
const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const foods = JSON.parse(window.localStorage.getItem("foods"));
    if (foods) {
      setData([...foods]);
    } else {
      setData([...data]);
    }
  }, []);
  const columns = [
    {
      title: "SL",
      dataIndex: "sl",
      key: "sl",
      render: (_, record, idx) => {
        return idx + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record, idx) => {
        return (
          <>
            <DeleteFilled
              className="cursor-pointer"
              onClick={() => {
                const foods = JSON.parse(window.localStorage.getItem("foods"));
                let filterdData = foods.filter(
                  (itm) => itm?.id !== record?.id && itm
                );
                window.localStorage.setItem(
                  "foods",
                  JSON.stringify(filterdData)
                );
                const newData = JSON.parse(
                  window.localStorage.getItem("foods")
                );
                setData(newData);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div className="cart-container m-5">
        <Table dataSource={data || []} columns={columns} />;
      </div>
    </>
  );
};

export default Cart;
