import { Button, Carousel, Col, Image, Row } from "antd";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { GiElectric } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TfiCrown } from "react-icons/tfi";
import "./Styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Row justify="start">
        <Col lg={10} md={12} sm={12} style={{}}>
          <div className="first-text">
            <h1>
              Welcome To <br /> e-Medicine
            </h1>
            <button className="shop-btn">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/products"
              >
                Shop Now{" "}
                <MdOutlineAddShoppingCart style={{ fontSize: "1.5rem" }} />
              </Link>
            </button>
          </div>
        </Col>
        <Col lg={14} md={12} sm={12}>
          <img
            src="https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={900}
            height={450}
          />
        </Col>
      </Row>
      
      {/* Services */}
      <section id="services">
        <div className="container">
          <h1>Our Services</h1>
          <div className="row mt-4 services">
            <div className="col-md-3 text-center">
              <div className="icon">
                <TbTruckDelivery />
              </div>
              <h3>Fast Shipping</h3>
              <p style={{ fontSize: "14px", color: "#ccc" }} className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae hic aliquam sed assumenda explicabo facilis sunt.
                Deleniti qui
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">
                <HiOutlineCurrencyRupee />
              </div>
              <h3>Free Delivery</h3>
              <p style={{ fontSize: "14px", color: "#ccc" }} className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae hic aliquam sed assumenda explicabo facilis sunt.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <div className="icon">
                <BiTimeFive />
              </div>
              <h3>24*7 Available </h3>
              <p style={{ fontSize: "14px", color: "#ccc" }} className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae hic aliquam sed assumenda explicabo facilis sunt.
              </p>
            </div>

            <div className="col-md-3 text-center">
              <div className="icon">
                <RiEmotionHappyLine />
              </div>
              <h3>7M+ Happy Customers </h3>
              <p style={{ fontSize: "14px", color: "#ccc" }} className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae hic aliquam sed assumenda explicabo facilis sunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div className="container-carousel mb-5">
        <Carousel autoplay>
          <div>
            <img
              width={1500}
              height={500}
              src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="image1"
            />
          </div>
          <div>
            <img
              width={1500}
              height={500}
              src="https://images.pexels.com/photos/2228550/pexels-photo-2228550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image2"
            />
          </div>
          <div>
            <img
              width={1500}
              height={500}
              src="https://images.unsplash.com/photo-1600091474842-83bb9c05a723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Image3"
            />
          </div>
          <div>
            <img
              width={1500}
              height={500}
              src="https://images.pexels.com/photos/4210615/pexels-photo-4210615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image4"
            />
          </div>
        </Carousel>
      </div>

      {/* Memebership section */}
      <div className="mem-ship" style={{ display: "block" }}>
        <div className="mShip">
          <div className="top">
            <TfiCrown style={{ fontSize: "5rem", color: "#ef4281" }} />
            </div>
              <div className="mainFrMemDiv">
                <div className="first-member">
                <h1>
                  e-meds First Membership
                </h1>
                <ul>
                  <li>Get special discounts and offers on e-medicine services.</li>
                  <li>Get 2% eMS Cash on all orders.</li>
                </ul>
                </div>

              <div className="pricingInfo">
                <div className="start-msg">
                  <GiElectric /> Starting at ₹149
                </div>
                <Button className="explore-plans">Explore Plans</Button>
              </div>
            </div>  
          </div>
      </div>
    </div>
  );
};

export default Home;
