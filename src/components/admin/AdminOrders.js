import React, { useEffect, useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Card,
  Tooltip,
  Drawer,
  Form,
  Input,
  Select,
} from "antd";
import { RiEdit2Line } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { baseUrl } from "../Constants";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AdminOrders = () => {
  const [updateForm] = Form.useForm();
  const [data, setData] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [orderDetail, setOrderDetail] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 8 });

  useEffect(() => {
    getOrderData();
  }, []);

  const columns = [
    {
      title: "S. No",
      dataIndex: "SNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      render: (_, record) => {
        return (
          <Button
            onClick={() => {
              getOrderDetail(record.orderNo);
            }}
            style={{ border: "none" }}
          >
            {record.orderNo}
          </Button>
        );
      },
    },

    {
      title: "Total",
      dataIndex: "orderTotal",
      render: (_, record) => (
        <>
          <BiRupee /> {record.orderTotal}
        </>
      ),
    },

    {
      title: "Status",
      dataIndex: "orderStatus",
      render: (_, record) => {
        let color;
        if (record.orderStatus == "Pending") {
          color = "warning";
        } else if (record.orderStatus == "Rejected") {
          color = "error";
        } else {
          color = "success";
        }
        return (
          <Tag key={record.id} color={color}>
            {record.orderStatus}
          </Tag>
        );
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      render: (_, record) => {
        return <>{moment(record.orderDate).format("DD/MM/YYYY")}</>;
      },
    },
    {
      title: "Change Status",
      dataIndex: "action",
      align: "center",
      render: (_, record) => (
        <>
          <Tooltip title="Change Status">
            <RiEdit2Line
              onClick={() => {
                updateOrderStatus(record.orderNo);
              }}
              className="text-primary"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const detailsColumn = [
    {
      title: "S. No",
      dataIndex: "SNo",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Product Name",
      dataIndex: "name",
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
      title: "Total Price",
      dataIndex: "totalPrice",
      render: (_, record) => (
        <>
          <BiRupee /> {record.totalPrice}
        </>
      ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (_, record) => <>{record.discount} %</>,
    },
  ];

  const options = [
    {
      value: "Pending",
      label: "Pending",
    },
    {
      value: "Rejected",
      label: "Rejected",
    },
    {
      value: "Delivered",
      label: "Delivered",
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  //basic method of order detail drawer
  const showDrawer = () => {
    setOpenDetail(true);
  };
  const onClose = () => {
    setOpenDetail(false);
  };

  //basic methods of update status modal
  const showUpdateModal = () => {
    setOpenUpdate(true);
  };
  const handleUpdateOk = () => {
    setOpenUpdate(false);
  };
  const handleUpdateCancel = () => {
    setOpenUpdate(false);
  };

  // get all the order data
  const getOrderData = () => {
    const url = `${baseUrl}/Admin/orderListAdmin`;
    axios
      .get(url)
      .then((result) => {
        if (result.data.statusCode === 200) {
          // console.log(result.data.listOrders);
          setData(result.data.listOrders);
        }
      })
      .catch((err) => {
        console.log("error in get order: ", err);
      });
  };

  // get order detail
  const getOrderDetail = (orderNo) => {
    const url = `${baseUrl}/Users/orderDetail?orderNo=${orderNo}`;
    axios
      .get(url)
      .then((result) => {
        // console.log(result.data.listItems);
        setOrderDetail(result.data.listItems);
      })
      .catch((err) => {
        console.log("err in fetch order detail", err);
      });
    showDrawer();
  };

  //update order status
  const updateOrderStatus = (orderNo) => {
    console.log("order No: ", orderNo);
    updateForm.setFieldsValue({
      orderNo: orderNo,
    });
    showUpdateModal();
  };

  const onFormSubmit = (values) => {
    const url = `${baseUrl}/Admin/updateStatus`
    axios
    .put(url, values)
    .then((response) => {
      toast.success(response.data.statusMessage);
      console.log(response.data.statusMessage)
    }).catch((err) => {console.log("err in update status: ", err)});
    handleUpdateCancel();
    getOrderDetail();
  };

  return (
    <>
      <div className="container h-100">
        <Table
          title={() => <h3> Orders</h3>}
          columns={columns}
          dataSource={data}
          pagination={pagination}
          onChange={(pagination) => setPagination(pagination)}
        />
      </div>
      <Drawer
        width={700}
        title="Ordered Item"
        placement="right"
        onClose={onClose}
        open={openDetail}
      >
        <Table columns={detailsColumn} dataSource={orderDetail} />
      </Drawer>

      <Modal
        title="Update Status"
        okText="Update"
        open={openUpdate}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
        footer={
          <div key="userModalFooter">
            <Button key="back" onClick={handleUpdateCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              form="updateForm"
            >
              Save
            </Button>
          </div>
        }
      >
        <Card>
          <Form name="updateForm" form={updateForm} onFinish={onFormSubmit}>
            <Form.Item name="orderNo" value="orderNo" label="Order No">
              <Input disabled />
            </Form.Item>

            <Form.Item name="orderStatus" label="Status" value="orderStatus">
              <Select
                defaultValue="Pending"
                style={{
                  width: 320,
                }}
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
          </Form>
        </Card>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AdminOrders;
