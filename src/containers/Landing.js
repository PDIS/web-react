import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Layout} from 'antd';
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
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={Members}/>
          </Content>
          <Footer />
        </Layout>
      </Router>
    )
  }
}