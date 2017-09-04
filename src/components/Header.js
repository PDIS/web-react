import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Dropdown, Menu, Icon, Button } from 'antd'
import clearlogo from '../images/pdis-logo-final-clear.png'
import './Header.css'

const SubMenu = Menu.SubMenu;

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
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

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

        <nav className="fat-nav fat-only">
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

        <div className="thin-only">
          <Button ghost type="primary" onClick={this.toggleCollapsed}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
        </div>

        <nav className="thin-nav thin-only" style={{'left': (this.state.collapsed ? '-99vw' : '0' )}}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            onClick={this.toggleCollapsed}
          >
            <Menu.Item key="0">
              <Icon type="cross" />
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </nav>

      </header>
    )
  }
}

export default Head;