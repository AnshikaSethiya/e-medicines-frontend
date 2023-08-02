import { Button, Card, Carousel, Col, Image, Row } from "antd";
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
  const { Meta } = Card;
  const testimonial = [
    {
        "Name":"Jayant Neema",
        "Image":"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "Rating":4
    },
    {
      "Name":"Ayush Khare",
      "Image":"https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      "Rating":4
    }
  ]
  return (
    <div>
      {/* <Row justify="start">
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
      </Row> */}
      <div className="landing__container">
        <div className="landing__header__container">
          <div className="landing__header">
            <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
            <h1 className="landing__header__main">
              Checkout The Best Price Medicine
            </h1>
            <Link to="/products">
              <Button
                variant="outlined"
                sx={[
                  {
                    width: "190px",
                    height: "50px",
                    borderRadius: "20px",
                    fontWeight: "700",
                    backgroundColor: "none",
                    borderColor: "black",
                    color: "black",
                  },
                  {
                    "&:hover": {
                      backgroundColor: "black",
                      color: "#FFE26E",
                      borderColor: "black",
                    },
                  },
                ]}
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </div>
        <div className="landing__image__container">
          <img
            className="landing__image"
            src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459650_1280.png"
            alt=""
          />
        </div>
      </div>

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

      {/* Our team */}
      <div className="">
        <div className="bg-color pb-4">
          <div className="mx-auto px-5 font-md text-3xl py-2 my-5 ">
            <h2 className="text-color">Meet Our Expert Team </h2>
            <h3 className="text-color">
              We are committed to ensure you the best service
            </h3>
          </div>
          <Row gutter={[16, 16]} justify="center">
            <Col lg={6} md={8} sm={12} xs={20}>
              {" "}
              <Card
                hoverable
                style={{ width: 320, padding: "4%" }}
                cover={
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    style={{ borderRadius: "50%", height: "50%" }}
                  />
                }
              >
                <Meta
                  title="Dr. Abdul Hannan"
                  description="Speciality- Haematology"
                />
              </Card>
            </Col>
            <Col lg={6} md={8} sm={12} xs={20}>
              <Card
                style={{ width: 320, padding: "4%" }}
                hoverable
                cover={
                  <img
                    src="https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnMlMjBwcmFjdGljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    style={{ borderRadius: "50%", height: "50%" }}
                  />
                }
              >
                <Meta
                  title="Dr. Saima Mazhar"
                  description="Speciality- Gynaecology"
                />
              </Card>
            </Col>
            <Col lg={6} md={8} sm={12} xs={20}>
              <Card
                hoverable
                style={{ width: 320, padding: "4%" }}
                cover={
                  <img
                    src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"
                    alt=""
                    style={{ borderRadius: "50%", height: "50%" }}
                  />
                }
              >
                <Meta
                  title="Dr. Kazi Maruf"
                  description="Speciality- Neuro Surgery"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Memebership section */}
      <div className="mem-ship" style={{ display: "block" }}>
        <div className="mShip">
          <div className="top">
            <TfiCrown style={{ fontSize: "5rem", color: "#eea676" }} />
          </div>
          <div className="mainFrMemDiv">
            <div className="first-member">
              <h1>e-meds First Membership</h1>
              <ul>
                <li>
                  Get special discounts and offers on e-medicine services.
                </li>
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

      {/*Testimonial */}

      <div className="container mb-5">
        <div class="row justify-content-evenly">
         {
          testimonial.map((item) => {
            return(
              <div class="col-6">
              <div className="testimonial shadow bg-white py-3 px-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap gap-2">
                    <div>
                      <img
                        src={item.Image}
                        className="rounded-5"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="authorNames align-self-center">
                      <h5>{item.Name}</h5>
                      {/* <Reviews rating={5}/> */}
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://friedshop.vercel.app/img/qoute.png"
                      alt=""
                      className="w-75"
                    />
                  </div>
                </div>
                <p className="my-3 opacity-75 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam velit, amet consequatur illum culpa a ut dolorum cum.
                  Debitis molestias tempora ut nostrum dicta mollitia officia
                  illum, eos nobis eligendi!
                </p>
              </div>
            </div>
            )
          })
         }
        </div>
      </div>

      {/*----News letter----- */}
      <div className="fd-bg-secondary container-fluid">
        <div className="row justify-content-between px-3 px-lg-5 py-5">
          <div className="col-12 col-lg-6 d-lg-flex gap-lg-2 text-center text-lg-start align-self-center">
            <div>
              <img
                src="https://friedshop.vercel.app/img/subscribe.png"
                alt="subscribe img"
              />
            </div>
            <div className="mt-3 mt-lg-0">
              <h5 className="fw-bold">Newsletter</h5>
              <p className="opacity-75">
                Subscribe here to get every single updates
              </p>
            </div>
          </div>
          <form action="" className="col-12 col-lg-6 d-flex flex-wrap">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL ADDRESS"
              className="d-block p-3 col-12 col-lg-9 fw-bold bg-btn border-0 text-white opacity-50"
            />
            <a
              href="#"
              className="fd-btn col-12 col-lg-3 mt-3 mt-lg-0 text-center"
              style={{ lineHeight: "65px" }}
            >
              SUBSCRIBE
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
