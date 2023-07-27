import { Col, Row, Card, Button, Space } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../Constants";
import "./../Styles/Medicine.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const { Meta } = Card;

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    const Url = `${baseUrl}/Medicines/getMedicine`;
    axios
      .get(Url)
      .then((result) => {
        setData(result.data.listMedicines);
        console.log(result.data.listMedicines);
      })
      .catch((err) => {
        console.log("error in medicines: ", err);
      });
  };

  
  return (
    <div>
      <Space>
      <Row gutter={[16, 16]} justify="center">
        {data ? (
          data.map((val, index) => {
            return (
              <Col lg={6} md={8} sm={12} xs={20} style={{marginTop:"1rem", marginBottom:"4rem"}}>
                <Card
                  className="productCard"
                  actions={[
                    <p style={{fontSize:"1rem"}}><Link style={{textDecoration:"none"}} to={`/product/${val.id}`}>Know More <InfoCircleOutlined /></Link> </p>  
                  ]}  
                  key={index}
                  cover={<img alt="product-image" className="productImage" src={val.imageUrl} />}
                >
                  <Meta title={val.name} description={<h5>Price: Rs.{val.unitPrice}</h5>} />
                </Card>
              </Col>
            );
          })
        ) : (
          <p>No data found!!</p>
        )}
      </Row>
      </Space>
    </div>
  )
}

export default Products