import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Dropdown, Menu, Icon } from 'antd'
import clearlogo from '../images/pdis-logo-final-clear.png'
import './Header.css'

const menuWork = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">開放政府</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/">數位服務</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/">社會企業</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/">青年咨詢委員會</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="10">
      <Link to="/track">歷程</Link>
    </Menu.Item>
  </Menu>
)

const menuHow = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/tool">工具</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/">進行中</Link>
    </Menu.Item>
  </Menu>
)

class Head extends React.Component {
  render() {
    return (
      <header className="header-wrapper">

        <div className="clear-logo">
          <Link to='/'>
            <img
              src={clearlogo}
              alt="pdis logo"/>
          </Link>
        </div>

        <nav className="mainav">
          <ul>
            <li>
              <p>
                <Link to="/">首頁</Link>
              </p>
            </li>
            <li>
              <Dropdown overlay={menuWork} trigger={['click']}>
                <p>
                  <a className="ant-dropdown-link" href="#">
                    工作紀錄 <Icon type="down" />
                  </a>
                </p>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menuHow} trigger={['click']}>
                <p>
                  <a className="ant-dropdown-link" href="#">
                    工作流程 <Icon type="down" />
                  </a>
                </p>
              </Dropdown>
            </li>
            <li>
              <p>
                <Link to="/about">聯絡我們</Link>
              </p>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Head;