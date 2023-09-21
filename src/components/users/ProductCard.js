import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./../Styles/Medicine.css";
import { Tooltip, Button } from 'antd';
import {ShoppingCartOutlined} from "@ant-design/icons"
import { baseUrl } from '../Constants';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


const ProductCard = ({product}) => {

    const userId = localStorage.getItem("UserId");
    const {discount, manufacturer, imageUrl, name, id, details, unitPrice } = product
    const [quantityState, setQuantityState] = React.useState(1);
    const [getCartData, setCartData] = useState([]);

    useEffect(
        () => {
            getProductData();    
        },
     [])

    //  console.log("cart item: ", getCartData);

    const productAddtoCart = (item) => {
        const cartData = {
            userId: localStorage.getItem("UserId"),
            medicineId: item.id,
            name: item.name,
            imageUrl: item.imageUrl,
            unitPrice: item.unitPrice,
            discount: item.discount,
            totalPrice: item.unitPrice,
            quantity: quantityState,
          };
          const Url = `${baseUrl}/Users/addToCart`;
          axios
            .post(Url, cartData)
            .then((result) => {
              const dt = result.data;
              if (dt.statusCode === 200) {
                toast.success(dt.statusMessage);
              }
            })
            .catch((err) => {
              console.log(err);
            });
    }

    const getProductData = () => {
        const Url = `${baseUrl}/Users/getCartItem?Id=${userId}`;
        axios
          .get(Url)
          .then((result) => {
            console.log("result: ", result.data.listCart);
            if (result.data.statusCode === 200) {
              setCartData(result.data.listCart);
            } else {
              console.log(result.statusMessage);
            }
          })
          .catch((err) => {
            console.log("error in get cart item: ", err);
          });
      };

  return (
    <div className="product-card">
    <div className="badge">{discount} % off</div>
    <div className="product-tumb">
      <img src={imageUrl} alt="" />
    </div>
    <div className="product-details">
      <span className="product-catagory">
        By: {manufacturer}
      </span>
      <h4>
        <Link to={`/product/${id}`}>{name}</Link>
      </h4>
      <p>
        {details
          ? `${details
              .split(" ")
              .slice(0, 10)
              .join(" ")
              .replace(/<.+?>/g, "")}...`
          : "No description"}
      </p>
      <div className="product-bottom-details">
        <div className="product-price">
          <small>
            Rs.{" "}
            {parseFloat(
              unitPrice / (1 - discount / 100)
            ).toFixed(2)}
          </small>
          Rs. {unitPrice}
        </div>
        <div className="product-links">
          <Tooltip title="Know More">
                <Link to={`/product/${id}`}>
                    <i className="fa-solid fa-circle-info" style={{fontSize:"1.5rem"}}></i>
                </Link>
          </Tooltip>
          <Tooltip title="Add to Cart">
                {
                    userId && <Button className='addToCart' onClick={() => {productAddtoCart(product)}} icon={<ShoppingCartOutlined 
                        style={{fontSize:"1.5rem", color:"#fbb72c", fontWeight:"bolder"}}/>}>
                    </Button>
                }
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard