import React from 'react';
import { Menu } from 'antd';
import Link from './Link';

const Header = () => {
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='accordion'>
        <Link href='/'>Accordion</Link>
      </Menu.Item>
      <Menu.Item key='search'>
        <Link href='/search'>Search</Link>
      </Menu.Item>
      <Menu.Item key='translate'>
        <Link href='/translate'>Translate</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
