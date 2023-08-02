import { Space, Table, Tag, Button, Modal, Card } from "antd";
import moment from "moment";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Constants";
import { BiRupee } from "react-icons/bi";

const Orders = () => {
  const id = localStorage.getItem("UserId");
  const [data, setData] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    getOrderData();
  }, []);

  const columns = [
    {
      title: "S. No",
      dataIndex: "SNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {getOrderDetail(record.orderNo)}}
            style={{ border: "none" }}
          >
            {record.orderNo}
          </Button>
        );
      },
    },

    {
      title: "Total",
      dataIndex: "orderTotal",
      render: (_, record) => (
        <>
          <BiRupee /> {record.orderTotal}
        </>
      ),
    },

    {
      title: "Status",
      dataIndex: "orderStatus",
      render: (_, record) => {
        let color;
        if (record.orderStatus == "Pending") {
          color = "warning";
        } else if (record.orderStatus == "Rejected") {
          color = "error";
        } else {
          color = "success";
        }
        return (
          <Tag key={record.id} color={color}>
            {record.orderStatus}
          </Tag>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      render: (_, record) => {
         return(
          <>
            { moment(record.orderDate).format("DD/MM/YYYY")}
          </>
         )
      }
    },
  ];

  const detailsColumn = [
    {
      title: "S. No",
      dataIndex: "SNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      render: (_, record) => (
        <>
          <BiRupee /> {record.unitPrice}
        </>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      render: (_, record) => (
        <>
          <BiRupee /> {record.totalPrice}
        </>
      ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (_, record) => (
        <>
           {record.discount} %
        </>
      ),
    },
  ];

  const getOrderDetail = (orderNo) => {
    const url = `${baseUrl}/Users/orderDetail?orderNo=${orderNo}`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.listItems);
        setOrderDetail(result.data.listItems);
      })
      .catch((err) => {
        console.log("err in fetch order detail", err);
      });
    showModal();
  };

  const showModal = () => {
    // console.log("data: ", orderDetail);
    setOpenDetails(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenDetails(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpenDetails(false);
  };

  const getOrderData = () => {
    const url = `${baseUrl}/Users/orderList?Id=${id}`;
    axios
      .get(url)
      .then((result) => {
        if (result.data.statusCode === 200) {
          setData(result.data.listOrders);
        }
      })
      .catch((err) => {
        console.log("error in get order: ", err);
      });
  };

  return (
    <>
      <div className="container h-100">
        <Table
          title={() => <h3>My Orders</h3>}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>

      <Modal
        open={openDetails}
        title="Order Details"
        width={850}
        style={{ top: 20 }}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Ok
          </Button>,
        ]}
      >
        <Card>
          <Table columns={detailsColumn} dataSource={orderDetail} pagination={false} />
        </Card>
      </Modal>
    </>
  );
};

export default Orders;
