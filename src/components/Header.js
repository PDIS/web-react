import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import '../styles/layout.css'
const { Header } = Layout;

class Head extends React.Component {
  render() {
    return (
      /* <Header style={{ position: 'fixed', width: '100%' }}>
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
      </Header> */
      <div className="bgded overlay" style={{"background-image":"url('images/demo/backgrounds/01.png')"}}> 
 
  <div className="wrapper row1">
    <header id="header" className="hoc clear"> 
 
      <div id="logo" className="fl_left">
        <h1><a href="#">PDIS</a></h1>
      </div>
      <nav id="mainav" className="fl_right">
        <ul className="clear">
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/about">MEMBERS</Link></li>
          {/*<li><a className="drop" href="#">Pages</a>
            <ul>
              <li><a href="pages/gallery.html">Gallery</a></li>
              <li><a href="pages/full-width.html">Full Width</a></li>
              <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
              <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
              <li><a href="pages/basic-grid.html">Basic Grid</a></li>
            </ul>
          </li>
          <li><a className="drop" href="#">Dropdown</a>
            <ul>
              <li><a href="#">Level 2</a></li>
              <li><a className="drop" href="#">Level 2 + Drop</a>
                <ul>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                  <li><a href="#">Level 3</a></li>
                </ul>
              </li>
              <li><a href="#">Level 2</a></li>
            </ul>
          </li>
          <li><a href="#">Link Text</a></li>
          <li><a href="#">Link Text</a></li>*/}
        </ul>
      </nav>
 
    </header>
  </div>
 
  <div id="pageintro" className="hoc clear">
    <article> 
     
      <h3 className="heading">Potenti integer dignissim</h3>
      <p>Nunc gravida sem dui tempus nunc at tristique magna turpis in magna nunc vitae vestibulum ligula mauris malesuada</p>
      <p className="font-x1 uppercase bold">Felis vitae ultricies blandit</p>
      <footer><a className="btn" href="#">Fermentum elementum</a></footer>
     
    </article>
  </div>
  
</div>
    )
  }
}

export default Head;