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
    <div className="container">
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
        {/* <div className="row">
            {
              data && data.map((product) => {
                return(  
                    <div className="col-">
                       <div className="d-flex w-100 gap-3 h-25 mb-3">
                         <div className="w-25 border-1 border fd-hover-border-primary">
                          <Link to={'/product/' + product.id}>
                            <img src={product.imageUrl} alt={product.name} className="w-100 h-100"/>
                          </Link>
                         </div>
                         <div className="w-75">
                        <Link to={'/product/' + product.id}>
                          <span className="product-name my-2 fw-bold text-dark">{product.name}</span>
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <div className="d-flex mt-2 gap-2">
                                <span className="fd-color-primary fw-bold me-1">{product.unitPrice}</span>
                                <span><i className="bi bi-x"></i></span>
                                {/* <span>{product.quantity ?? 1}</span>
                            </div>
                            <div className="close-btn me-4 fd-bg-primary text-white text-center rounded-5 cursor-pointer" style={{width : '30px', height: '30px'}}
                              onClick={() => dispatch(deleteProductInCart(product))}
                              >
                                <span><i className="bi bi-x" style={{lineHeight: '30px'}}></i></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                )
              })
            }
        // </div> */}
    </div>
  );
};

export default Products;
