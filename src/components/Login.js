import React from "react";
import "./Styles/Login.css";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Row, Col } from "antd";
import { baseUrl } from "./Constants";
import axios from "axios";
import MainImage from "./assets/eMedicine-Image.svg"
import {Link} from "react-router-dom"

const Login = () => {
  const [loginForm] = Form.useForm();

  const onFormSubmit = (values) => {
    const data = {
      Email: values.Email,
      Password: values.Password,
    };
    console.log(data);

    const url = `${baseUrl}/Users/login`;
    axios.
    post(url,data)
    .then((result) => {
      const dt = result.data;
      console.log(dt)
      if(dt.statusCode === 200){
        if(data.Email == "admin123@gmail.com" && data.Password=="admin"){
            localStorage.setItem("Admin", values.Email);
            window.location.href = "/admindashboard";
        }else{
          localStorage.setItem("Email",values.Email);
          localStorage.setItem("UserId",dt.user.id)
          window.location.href = "/products";
        }
        console.log("good")
      } 
      else{
        console.log("something went wrong");
      }
    }).catch((err) => console.log("error in login: ",err));
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <Row className="row d-flex justify-content-center align-items-center h-100">
          <Col lg={8} md={9} sm={12}>
            <img
              src={MainImage}
              className="img-fluid"
              alt="Sample image"
            />
          </Col>
          <Col lg={8} md={9} sm={12}>
            <Form form={loginForm} name="loginForm" onFinish={onFormSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-color btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-color btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-color btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-4">
                <Form.Item
                  id="form3Example3"
                  name="Email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="Email" prefix={<MailOutlined className="site-form-item-icon" />}/>
                </Form.Item>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <Form.Item
                  name="Password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" prefix={<LockOutlined className="site-form-item-icon" />} />
                </Form.Item>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Form.Item className="btn-primary btn-lg">
                  <Button className="btn-color" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  {/* <a href="#!" className="link-danger">
                    Register
                  </a> */}
                  <Link to="/register" className="link-danger">Register</Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

    </section>
  );
};

export default Login;
