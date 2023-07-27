import React from "react";
import {PlusOutlined, ReloadOutlined } from "@ant-design/icons"
import { Form, Space, Input, Card, InputNumber, DatePicker, Button } from "antd";
import { BiRupee } from "react-icons/bi";
import moment from "moment";
import { useState } from "react";

const AddMedicine = () => {
  const [addProduct] = Form.useForm();
  const [selectDate, setSelectedDate] = useState(null);

  const onFormSubmit = (values) => {
    console.log("parsed date: ", selectDate)
    console.log("values: ", values);
  }


  const onChange = (value, dateString) => {
    // console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setSelectedDate(dateString)
  };

  return (
    <Space>
      <Form name="addProduct" form={addProduct} onFinish={onFormSubmit}>
        <Card type="inner" title="Add Product" bordered={false} style={{ width: 700, backgroundColor:"#f5b921"}}>

            <Form.Item name="product" label="Product" rules={[{required:true}]}>
              <Input placeholder="Enter Medicine Name" />
            </Form.Item>

            <Form.Item label="Manufacturer" name="manufacturer" rules={[{ required: true, message: 'Please input manufacturer name' }]}>
              <Input placeholder="Enter Manufacturer Name"/>
            </Form.Item>

            <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please input quantity' }]}>
              <InputNumber type="number" style={{width:550}} placeholder="Enter Quantity" />
            </Form.Item>

            <Form.Item label="Unit Price" name="unitPrice" rules={[{ required: true, message: 'Please input unit price' }]}>
              <Input type="number" prefix={<BiRupee />} placeholder="Enter Unit Price" />
            </Form.Item>

            <Form.Item label="Expire Date" name="expDate" rules={[{ required: true, message: 'Please input expiry date' }]}>
              <DatePicker showTime value={selectDate} onChange={onChange} format="DD-MM-YYYY HH:mm:ss" style={{width:550}} placeholder="Enter Expiry Date" />
            </Form.Item>

            <Form.Item
              label="Image Url"
              name="imageUrl"
              rules={[
                {
                  required: true,
                  message:"Please input image url"
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
              <Input.TextArea rows={2} placeholder="Enter Image Url" />
            </Form.Item>

            <Form.Item label="Details" name="details" rules={[{ required: true, message: 'Please input product detail' }]}>
              <Input.TextArea rows={3} placeholder="Enter Product Detail"/>
            </Form.Item>

            <Space wrap>
              <Button icon={<PlusOutlined /> } htmlType="submit" type="primary" size="large">
                Add
              </Button>
              <Button icon={<ReloadOutlined />} size="large">Reset</Button>
        </Space>
        </Card>
      </Form>
    </Space>
  );
};

export default AddMedicine;
