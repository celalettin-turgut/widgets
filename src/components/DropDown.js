import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropDown = ({ options, selected, setSelected }) => {
    const menu = (
        <Menu onClick={handleMenuClick}>
            {options
                .filter(option => {
                    return selected.value !== option.value;
                })
                .map(option => {
                    return (
                        <Menu.Item
                            onClick={e => setSelected(option)}
                            key={option.value}
                        >
                            {option.label}
                        </Menu.Item>
                    );
                })}
            {/* <Menu.Item key='0'>
        <a href='https://www.antgroup.com'>1st menu item</a>
      </Menu.Item>
     */}
        </Menu>
    );

    function handleMenuClick(e) {
        console.log('click', e);
    }

    return (
        <Dropdown overlay={menu}>
            <Button>
                {selected.label} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

export default DropDown;
