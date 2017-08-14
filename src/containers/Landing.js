import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Layout, Menu, Breadcrumb} from 'antd';
import Home from '../containers/Home'
import Members from '../containers/Members'
import Header from '../components/Header'
import Footer from '../components/Footer'
const { Content } = Layout;

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header />
          <Content>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Members}/>
          </Content>
          <Footer />
        </Layout>
      </Router>
    )
  }
}