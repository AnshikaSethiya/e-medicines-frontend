import React from "react";
import {
  PlusOutlined,
  ReloadOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import addMed from "./../assets/undraw_add_files.svg"
import {
  Form,
  Space,
  Input,
  Card, Col,
  InputNumber,
  DatePicker,
  Button,
} from "antd";
import { BiRupee } from "react-icons/bi";
import { useState } from "react";
import { baseUrl } from "../Constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import moment from "moment/moment";

const AdminAddMedicine = () => {
  const [addProduct] = Form.useForm();
  const [selectDate, setSelectedDate] = useState(null);

  const onFormSubmit = (values) => {
    // console.log("parsed date: ", selectDate);
    // console.log("values: ", values);

    const data = {
      name: values.product,
      manufacturer: values.manufacturer,
      details: values.details,
      unitPrice: values.unitPrice,
      discount: values.discount,
      quantity: values.quantity,
      expDate: selectDate,
      imageUrl: values.imageUrl,
      status: 0,
      type: "",
    };
    // console.log("data: ", data);
    const url = `${baseUrl}/Admin/addMedicine`;
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
      .catch((err) => console.log("error in add medicine: ", err));
  };

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setSelectedDate(dateString);
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content-left">
          <img src={addMed} alt="add-medicine" className="form-img" />
        </div>

        <div className="form-content-right">
          <Form name="addProduct" form={addProduct} onFinish={onFormSubmit} className="form">
              <Form.Item
                  name="product"
                  label="Product"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter Medicine Name" className="form-input" style={{width:450}}/>
                </Form.Item>

              <Form.Item
                label="Manufacturer"
                name="manufacturer"
                rules={[
                  { required: true, message: "Please input manufacturer name" },
                ]}
              >
                <Input placeholder="Enter Manufacturer Name" className="form-input" style={{width:430}}/>
              </Form.Item>

              <Form.Item
                label="Quantity"
                name="quantity"
                rules={[{ required: true, message: "Please input quantity" }]}
              >
                <InputNumber
                  type="number"
                  style={{width:450}}
                  className="form-input"
                  placeholder="Enter Quantity"
                />
              </Form.Item>

              <Form.Item
                label="Unit Price"
                name="unitPrice"
                rules={[{ required: true, message: "Please input unit price" }]}
              >
                <InputNumber
                  type="number"
                  style={{width:450}}
                  placeholder="Enter Unit Price in Rs"
                  className="form-input"
                />
              </Form.Item>

              <Form.Item
                label="Discount"
                name="discount"
                rules={[{ required: true, message: "Please input discount" }]}
              >
                <InputNumber
                  type="number"
                  style={{ width: 450 }}
                  placeholder="Enter discount in %"
                  className="form-input"
                />
              </Form.Item>

              <Form.Item
                label="Expire Date"
                name="expDate"
                rules={[
                  { required: true, message: "Please input expiry date" },
                ]}
              >
                <DatePicker
                  value={selectDate ? moment(selectDate, "YYYY-MM-DD") : null}
                  onChange={onChange}
                  format="YYYY-MM-DD"
                  style={{ width: 450, color:"#fff" }}
                  placeholder="Enter Expiry Date"
                  className="form-input"
                />
              </Form.Item>

              <Form.Item
                label="Image Url"
                name="imageUrl"
                style={{ width: 520 }}
                rules={[
                  {
                    required: true,
                    message: "Please input image url",
                  },
                  {
                    type: "url",
                    warningOnly: true,
                  },
                  {
                    type: "string",
                    min: 6,
                  },
                ]}
              >
                <Input.TextArea rows={2} placeholder="Enter Image Url" className="form-input"/>
              </Form.Item>

              <Form.Item
                label="Details"
                name="details"
                style={{ width: 520 }}
                rules={[
                  { required: true, message: "Please input product detail" },
                ]}
              >
                <Input.TextArea rows={3} placeholder="Enter Product Detail" className="form-input" />
              </Form.Item>

              <Space wrap>
                <Button
                  icon={<PlusOutlined />}
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  Add
                </Button>
                <Button icon={<ReloadOutlined />} size="large">
                  Reset
                </Button>
              </Space>
            {/* </Card> */}
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminAddMedicine;
