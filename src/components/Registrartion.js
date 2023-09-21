import React from "react";
import "./Styles/Login&Register.css";
import axios from "axios";
import { baseUrl } from "./Constants";
import "react-toastify/dist/ReactToastify.css";
import { Form, Alert, Input, Button, Space, Row, Col } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import MainImage from "./assets/undraw_med.svg";

const Registrartion = () => {
  const [RegisterForm] = Form.useForm();

  const onFormSubmit = (values) => {
    const data = {
      firstName: values.FirstName,
      lastName: values.LastName,
      email: values.Email,
      password: values.password,
      type: "User",
    };

    // console.log("data: ", data);
    const url = `${baseUrl}/Users/registration`;
    if (values.password === values.confirm_password) {
      axios
        .post(url, data)
        .then((result) => {
          const dt = result.data;
          console.log("dt: ", dt);
          if (dt.statusCode === 200) {
            toast.success(dt.statusMessage);
          } else {
            toast.info(dt.statusMessage);
          }
        })
        .catch((err) => console.log("error in register: ", err));
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <Row
          gutter={[8, 8]}
          className="row d-flex justify-content-center align-items-center h-100"
        >
          <Col lg={8} md={10} sm={10} xs={12}>
            <img src={MainImage} className="img-fluid" alt="Sample image" />
          </Col>
          <Col lg={10} md={10} sm={14} xs={12}>
            <Form
              form={RegisterForm}
              name="RegisterForm"
              onFinish={onFormSubmit}
            >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mt-4"></div>

              {/* FirstName Input */}
              <div className="mb-4">
                <Form.Item
                  id="form3Example3"
                  name="FirstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input placeholder="First Name" size="large"/>
                </Form.Item>
              </div>

              {/* Last NAme input */}
              <div className="mb-4">
                <Form.Item
                  id="form3Example3"
                  name="LastName"
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input placeholder="Last Name" size="large" />
                </Form.Item>
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
                  <Input placeholder="Email" size="large" />
                </Form.Item>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" size="large" />
                </Form.Item>
              </div>

              {/* <!-- confirm Password input --> */}
              <div className="form-outline mb-3">
                <Form.Item
                  name="confirm_password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Confirm Password" size="large" />
                </Form.Item>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3" style={{color:"black"}}>
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
                    Register
                  </Button>
                </Form.Item>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="link-color">
                    Login
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Registrartion;
