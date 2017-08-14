import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../images/PDIS-logo.png'
const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        Content
        <img src={logo}/>
      </div>
    );
  }
}

export default Home;