import React from 'react';
import {Route} from 'react-router-dom'
import {Layout} from 'antd';
import Home from '../containers/Home'
import Members from '../containers/Members'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tracking from '../containers/Tracking'
import Tool from '../containers/Tool'
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
      <Layout>
        <Header />
        <Content>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={Members}/>
          <Route path="/track" component={Tracking}/>
          <Route path="/tool" component={Tool}/>
        </Content>
        <Footer />
      </Layout>
    )
  }
}