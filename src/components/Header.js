import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;

class Head extends React.Component {
  render() {
    return (
      <Header style={{ width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about">Members</Link></Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Head;