import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <>
      <div
        className="content-container App"
        sx={{ mx: "auto", my: "20px" }}
        maxWidth="xl"
      >
        <img
          sx={{
            height: 450,
            width: 450,
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 250, md: 400 },
          }}
          src="https://i.ibb.co/9Zr4rwK/image.png"
          alt="404 image"
        />
        <h3 sx={{ mx: "auto" }}>404 Page is not found Please check the url</h3>

        <Button
          type="primary"
          size="large"
          icon={<HomeOutlined />}
          sx={{ mb: 5, mt: 5 }}
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;
