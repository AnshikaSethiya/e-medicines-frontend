import React, { useState, useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {PercentageOutlined} from "@ant-design/icons";
import locale from 'antd/es/date-picker/locale/zh_CN';
import { RiEdit2Line, RiDeleteBin7Line } from "react-icons/ri";
import {
  Space,
  Table,
  Tooltip,
  Card,
  Modal,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button
} from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import { baseUrl } from "../Constants";
import "./../Styles/admin.css";
import { ToastContainer, toast } from "react-toastify";

const AdminDashboard = () => {
  const { confirm } = Modal;
  const [updateForm] = Form.useForm();
  const [data, setData] = useState([]);
  const [date, setDate] = useState(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 8 });
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const adminProductColumn = [
    {
      title: "S. No",
      dataIndex: "SNo",
      render: (text, record, index) =>
        (pagination.current - 1) * pagination.pageSize + index + 1,
    },
    {
      title: "Image",
      dataIndex: "imgUrl",
      render: (_, record) => {
        return (
          <img
            src={record.imageUrl}
            key={record.id}
            alt="medicine image"
            style={{ width: "5rem" }}
          />
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      width: "35%",
    },
    {
      title: "Unit Price",
      dataIndex: "unitPrice",
      render: (_, record) => (
        <>
          <BiRupee /> {record.unitPrice}
        </>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (_, record) => <>{record.discount} %</>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Tooltip title="Edit Product">
            <RiEdit2Line
              onClick={() => updateMedicine(record)}
              className="text-primary"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Delete Product">
            <RiDeleteBin7Line
              onClick={() => showDeleteConfirm(record.id)}
              style={{
                fontSize: "1.5rem",
                color: "#D30000",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  //get all the medicine data
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

  //delete medicine
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure remove this Medicine?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const url = `${baseUrl}/Admin/deleteProduct?id=${id}`;
        axios
          .delete(url)
          .then((result) => {
            if (result.data.statusCode == 200) {
              window.location.reload();
              getData();
            } else {
              toast.error(result.data.statusMessage);
            }
          })
          .catch((err) => {
            console.log("Err in remove product:", err);
          });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleOk = () => {
    setIsUpdateModalOpen(false);
  };
  const handleCancel = () => {
    setIsUpdateModalOpen(false);
  };

  //on click of action button set medicine in modal
  const updateMedicine = (item) => {
    // const parsedDate = moment(item.expDate, "YYYY-MM-DD");
    const parsedDate = moment(item.expDate).format("YYYY-MM-DD");
    // console.log("date: ", parsedDate);
    setDate(parsedDate)
      updateForm.setFieldsValue({
        id: item.id,
        name: item.name,
        manufacturer: item.manufacturer,
        quantity: item.quantity,
        discount:item.discount,
        imageUrl: item.imageUrl,
        unitPrice: item.unitPrice,
        details: item.details
      });
      showModal();
  };  

  // on click of update button
  const onClickUpdate = (values) => {
    // console.log("set date: ", date);
    const data = {
      id: values.id,
      name: values.name,
      manufacturer: values.manufacturer,
      quantity: values.quantity,
      discount: values.discount,
      imageUrl: values.imageUrl,
      unitPrice: values.unitPrice,
      details: values.details,
      expDate: date,
      status: 0,
      type: "",
    }
    // console.log("values: ", data)
    const url = `${baseUrl}/Admin/updateMedicine`
    axios
    .put(url, data)
    .then((response) => {
      toast.success(response.data.statusMessage);
      // console.log(response.data)
    }).catch((err) => {console.log("err in update status: ", err)});
    handleCancel();
    getData();
  }

  return (
    <div className="container">
      <Card title={<h4>Total Products</h4>} style={{ paddingBottom: "3rem" }}>
        <Table
          columns={adminProductColumn}
          dataSource={data}
          pagination={pagination}
          onChange={(pagination) => setPagination(pagination)}
        />
      </Card>

      <Modal
        title="Edit Detail"
        open={isUpdateModalOpen}
        style={{top:"20px"}}
        onOk={handleOk}
        okText="Update"
        width={750}
        onCancel={handleCancel}
        footer={
          <div key="userModalFooter">
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              form="updateForm"
            >
              Update
            </Button>
          </div>
        }
      >
        <Form name="updateForm" form={updateForm} onFinish={onClickUpdate} autoComplete="off">
          <Card>
            <Form.Item label="id" name="id" hidden="true">
              <Input />
            </Form.Item>

            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input medicine name' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Manufacturer" name="manufacturer" rules={[{ required: true, message: 'Please input manufacturer name' }]}>
              <Input />
            </Form.Item>

            <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please input quantity' }]}>
              <InputNumber type="number"  style={{ width: 550 }}/>
            </Form.Item>

            <Form.Item label="Unit Price" name="unitPrice" rules={[{ required: true, message: 'Please input unit price' }]}>
              <Input type="number" prefix={<BiRupee />} />
            </Form.Item>

            <Form.Item
            label="Discount"
            name="discount"
            rules={[{ required: true, message: "Please input discount" }]}
          >
            <InputNumber
              type="number"
              style={{ width: 550 }}
              prefix={<PercentageOutlined />}
            />
          </Form.Item>

            <Form.Item hidden="true" label="Expire Date" name="expDate">
              {/* <DatePicker value={date} onChange={handleDateTmeChange} format="YYYY-MM-DD" style={{ width: 550 }} /> */}
              {/* <DatePicker value={date ? moment(date, "YYYY-MM-DD") : null}  format={dateFormat} /> */}
              {/* <DatePicker defaultValue={dayjs("2025-09-01", dateFormat)} format={dateFormat}/> */}
              <DatePicker value="expDate" />
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
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item label="Details" name="details" rules={[{ required: true, message: 'Please input product detail' }]}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Card>
        </Form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
