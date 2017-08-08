import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Layout, Menu, Breadcrumb } from 'antd';
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
      <Layout className="layout">
        <Header />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default Home;