import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDown = ({ options }) => {
  const menu = (
    <Menu>
      {options.map((option, index) => {
        return <Menu.Item key={index}>{option.label}</Menu.Item>;
      })}
      {/* <Menu.Item key='0'>
        <a href='https://www.antgroup.com'>1st menu item</a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a href='https://www.aliyun.com'>2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>3rd menu item</Menu.Item> */}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          Click me <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default DropDown;
