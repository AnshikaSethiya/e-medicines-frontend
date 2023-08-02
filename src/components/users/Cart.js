import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsBagPlus } from "react-icons/bs";
import { Space, Table, Button, Row, Tooltip, Modal, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { baseUrl } from "../Constants";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const id = localStorage.getItem("UserId");
  const [data, setData] = useState([]);
  const [itemContainer, SetItemContainer] = useState([]);
  const [total, setTotal] = useState(0);
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (record) => {
        return (
          <img
            src={record}
            key={record.id}
            alt="medicine image"
            style={{ width: "4rem" }}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "TotalPrice in Rs",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* {console.log("id: ", record)} */}
          <Tooltip title="Remove Item">
            <DeleteOutlined
              key={record.id}
              onClick={() => {
                onClickRemoveItem(record.medicineId);
              }}
              style={{ fontSize: "2rem", color: "red", cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const ConfirmOrderColumn = [
    {
      title: "S.No",
      dataIndex: "s.no",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price in Rs",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  //Function to get cart data
  const getData = () => {
    const Url = `${baseUrl}/Users/getCartItem?Id=${id}`;
    axios
      .get(Url)
      .then((result) => {
        // console.log("result: ", result.data.listCart);
        if (result.data.statusCode === 200) {
          setData(result.data.listCart);
        } else {
          console.log(result.statusMessage);
        }
      })
      .catch((err) => {
        console.log("error in get cart item: ", err);
      });
  };

  // show modal on click of place order button
  const showModal = () => {
    console.log("data of items in cart: ", data);
    let CartValue = 0;
    data &&
      data.forEach((item) => {
        CartValue += item.totalPrice;
        setTotal(CartValue);
        console.log("item", CartValue);
      });
    setIsModalConfirm(true);
  };

  //confirm order on click of "confirm" button
  const handleOk = () => {
    const orderNo = uuidv4();
    const UrlPlaceOrder = `${baseUrl}/Users/placeOrder?Id=${id}`;
    const UrlOderItem = `${baseUrl}/Users/orderListItem`;
    const Orderdata = {
      orderNo: orderNo,
      userID: id,
      orderTotal: total,
      orderStatus: "Pending",
    };
    data && data.forEach((item) => {
      itemContainer.push({
        orderNo: orderNo,
        name: item.name,
        medicineID: item.medicineId,
        unitPrice: item.unitPrice,
        discount: item.discount,
        quantity: item.quantity,
        totalPrice: item.totalPrice
      })
    })
    console.log("data  received: ", itemContainer)
    axios
    .post(UrlOderItem, itemContainer)
    .then((result) => {
      if (result.data.statusCode === 200) {
        axios
        .post(UrlPlaceOrder, Orderdata)
          .then((result) => {
            console.log("data posted: ", result)
               toast.success(result.data.statusMessage);
               window.location.reload();
            })
            .catch((err) => {
              console.log("error in order item: ", err);
            });
        }
      })
      .catch((err) => {
        console.log("err in order place: ", err);
      });
    setIsModalConfirm(false);
    getData();
  };

  // close/cancel the order on click of cancel button on modal
  const handleCancel = () => {
    setIsModalConfirm(false);
  };

  // remove item on click of button
  const onClickRemoveItem = (medId) => {
    const Url = `${baseUrl}/Users/removeCartItem?UserId=${id}&MedicineId=${medId}`;
    axios
      .delete(Url)
      .then((result) => {
        console.log("result:", result);
        toast.success(result.data.statusMessage);
        window.location.reload();
        getData();
      })
      .catch((err) => {
        console.log("Err in remove item:", err);
        toast.error(err.message);
      });
  };

  
  return (
    <>
      <div className="container h-100">
        {id ? (
          data && data.length > 0 ? (
            <Table
              className="mb-5"
              pagination={false}
              columns={columns}
              dataSource={data}
              title={() => <h3>Cart Item</h3>}
              footer={() => (
                <div>
                  <Button
                    style={{ width: "7rem" }}
                    type="primary"
                    onClick={showModal}
                  >
                    Place Order
                  </Button>
                </div>
              )}
            />
          ) : (
            <div className="container h-100">
                <div>
                  <BsBagPlus style={{fontSize:"12rem", paddingTop:"2rem"}}/>
                  <h4>Add Item to Cart </h4>
                  <Link to="/products">
                     <Button style={{ color: "#f5b921" }}>Start Shopping</Button>
                  </Link>
                </div>
            </div>
            // <div className="position-absolute top-50 start-50 traslate-middle  d-flex flex-column align-item-center justify-content-center">
            //   <BsBagPlus
            //     style={{
            //       fontSize: "12rem",
            //       color: "#D30000",
            //       // marginBottom: "5px",
            //     }}
            //   />
            //   <h4>Add Items to Cart</h4>
            //   <Link to="/products">
            //     <Button style={{ color: "#f5b921" }}>Start Shopping</Button>
            //   </Link>
            // </div>
          )
        ) : (
          <h2>User not logged in!!</h2>
        )}
      </div>

      <Modal
        title={<h4>Are you sure, you want to place this order?</h4>}
        width={650}
        okText="Confirm"
        open={isModalConfirm}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card type="inner">
          <Table
            columns={ConfirmOrderColumn}
            dataSource={data}
            pagination={false}
          />
          <h4
            style={{ fontSize: "20px", textAlign: "right", marginTop: "10px" }}
          >
            Cart Total - <LiaRupeeSignSolid />
            {total}
          </h4>
        </Card>
      </Modal>
      <ToastContainer position="top-right" closeOnClick autoClose={5000} />
    </>
  );
};

export default Cart;
