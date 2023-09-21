import { Col, Row, Space } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../Constants";
import "./../Styles/Medicine.css";
import ProductCard from "./ProductCard";
import { ToastContainer } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const Url = `${baseUrl}/Medicines/getMedicine`;
    axios
      .get(Url)
      .then((result) => {
        setData(result.data.listMedicines);
        // console.log(result.data.listMedicines);
      })
      .catch((err) => {
        console.log("error in medicines: ", err);
      });
  };

  return (
    <div className="container">
      <Space>
        <Row gutter={[16, 16]} justify="center">
          {data ? (
            data.map((val, index) => {
              return (
                <Col
                  lg={8}
                  md={8}
                  sm={12}
                  xs={20}
                  style={{ marginTop: "1rem" }}
                >
                  <ProductCard product={val} key={index}/>
                </Col>
              );
            })
          ) : (
            <p>No data found!!</p>
          )}
        </Row>
      </Space>
      <ToastContainer />
    </div>
  );
};

export default Products;
