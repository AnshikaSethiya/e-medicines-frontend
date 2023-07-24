import { Col, Space, Typography, Row } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../Constants";
import moment from "moment";
import "./../Styles/Medicine.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MedicineDisplay = () => {
  const { id } = useParams();
  const  userId = localStorage.getItem("UserId");
  const [data, setData] = useState([]);
  const [productQuantity, setProductQuantuty] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const handleDecrement = () => {
    productQuantity === 1
      ? setProductQuantuty(1)
      : setProductQuantuty(productQuantity - 1);
  };

  const handleIncrement = () => {
    setProductQuantuty(productQuantity + 1);
  };

  const getData = () => {
    const Url = `${baseUrl}/Medicines/getSingleMedicine?Id=${id}`;
    axios
      .get(Url)
      .then((result) => {
        setData(result.data.medicine);
      })
      .catch((err) => {
        console.log("error in medicines: ", err);
      });
  };

  const handleAddToCart = () => {
    var total = data && data.unitPrice * productQuantity;
    const cartData = {
      userId: localStorage.getItem("UserId"),
      medicineId: id,
      name: data && data.name,
      imageUrl: data && data.imageUrl,
      unitPrice: data && data.unitPrice,
      discount: data && data.discount,
      totalPrice: total,
      quantity: productQuantity,
    };
    const Url = `${baseUrl}/Users/addToCart`;
    axios
      .post(Url, cartData)
      .then((result) => {
        const dt = result.data;
        if (dt.statusCode === 200) {
          getData();
          toast.success(dt.statusMessage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log("data: ", userId);
  return (
    <div>
      <Space>
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: "4rem"}}>
          <Col lg={12} md={10} sm={10} xs={24} style={{ backgroundColor: "" }}>
            <img
              className="img-fluid singleProductImage"
              src={data && data.imageUrl}
              alt="product-img"
            />
          </Col>
          <Col lg={12} md={14} sm={14} xs={24} style={{ backgroundColor: "" }}>
            <div className="detail-box w-75 mx-4">
              <div className="product-description">
                <h5>By: {data && data.manufacturer}</h5>
                <h2>{data && data.name}</h2>
                <p>{data && data.details}</p>
                <p>
                  Expiry Date :{" "}
                  {moment(data && data.expDate).format("DD/MM/YYYY")}
                </p>
              </div>

              {/* <!-- Quantity --> */}
              <div className="cable-config">
                <p>Quantity: </p>
                <div className="cable-choose">
                  <button onClick={handleDecrement}> - </button>
                  <button>{productQuantity}</button>
                  <button onClick={handleIncrement}> + </button>
                </div>
              </div>

              {/* <!-- Product Pricing --> */}
              <div className="product-price">
                <span>
                  Rs.{" "}
                  {productQuantity === 1
                    ? data && data.unitPrice
                    : productQuantity * data.unitPrice}
                </span>
                {userId ? (
                  <button className="btn cart-btn" onClick={handleAddToCart}>
                    Add to cart{" "}
                    <ShoppingCartOutlined style={{ color: "white" }} />
                  </button>
                ) : (
                  <h6 style={{ backgroundColor: "#ff6666", padding: "0.5rem" }}>
                    Login/Register to add item in cart
                  </h6>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Space>
      <ToastContainer position="top-right" closeOnClick autoClose={5000} />
    </div>
  );
};

export default MedicineDisplay;
