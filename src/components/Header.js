import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;

class Head extends React.Component {
  render() {
    return (
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Head;