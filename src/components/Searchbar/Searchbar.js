import React from "react";
import "./Searchbar.css";
import { Divider } from "antd";

import { Input, Menu, Dropdown, Button, message, Space } from "antd";
import {
  CaretDownOutlined,
  BookOutlined,
  UserOutlined,
} from "@ant-design/icons";

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);

function Searchbar({ value, onChange }) {
  return (
    <div className="Searchbar">
      <Space>
        <Input
          placeholder="Find a repository..."
          style={{ width: 600, borderRadius: 5 }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <Dropdown overlay={menu} style={{ marginLeft: 10, borderRadius: 10 }}>
          <Button>
            Type: All <CaretDownOutlined />
          </Button>
        </Dropdown>

        <Dropdown overlay={menu}>
          <Button>
            Type: All <CaretDownOutlined />
          </Button>
        </Dropdown>

        <Button
          style={{
            backgroundColor: "#2EA44F",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          <BookOutlined /> New
        </Button>
      </Space>
      <Divider />
    </div>
  );
}

export default Searchbar;
