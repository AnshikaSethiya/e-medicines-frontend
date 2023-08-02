import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants";
import "../Styles/customerList.css";

const CustomerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const Url = `${baseUrl}/Admin/userList`;
    axios
      .get(Url)
      .then((result) => {
        setData(result.data.listUsers);
        console.log(result.data.listUsers);
      })
      .catch((err) => {
        console.log("error in medicines: ", err);
      });
  };

  return (
    <div className="body-bg">
      <div className="container">
        <h1>User List</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Funds (in Rs.)</th>
              <th>Created On</th>
            </tr>
            {data &&
              data.map((item) => {
                return (
                  <tr>
                    <td data-th="First Name">{item.firstName}</td>
                    <td data-th="Last Name">{item.lastName}</td>
                    <td data-th="Email">{item.email}</td>
                    <td data-th="Fund">{item.fund}</td>
                    <td data-th="Created On">{item.createdOn}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
