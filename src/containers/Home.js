import React from 'react';
import logo from '../images/PDIS-logo.png'
import './Home.css'
import {Icon, Row, Col, Button} from 'antd'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicSelect: 0,
      topicWord: [
        { prev: 'What',
          next: 'Do',
          desc: {__html: "<h1>我們做了些什麼？</h1><p>test test test</p>"},
          link: '#what'
        },
        { prev: 'How',
          next: 'Work',
          desc: {__html: "<h1>我們如何工作？</h1><p>test test test</p>"},
          link: '#how'
        },
        { prev: 'Who',
          next: 'Are',
          desc: {__html: "<h1>我們是誰？</h1><p>test test test</p>"},
          link: '#who'
        },
      ]
    };
  }

  render() {
    return (
      <div className="home">

        <div className="face section">
          <Row type="flex" justify="center" align="middle" gutter={16}>
            <Col lg={5} sm={5} xs={10}>
              <div className="logo center">
                <h1 className="prevWord">{this.state.topicWord[this.state.topicSelect].prev}</h1>
                <img src={logo} alt="pdis logo" />
                <h1 className="nextWord">{this.state.topicWord[this.state.topicSelect].next}</h1>
              </div>
            </Col>
            <Col lg={3} sm={3} xs={24}>
              <div className="topic center">
                <div className="circle-button">
                  <Button icon='trophy' shape='circle' size='large' onMouseEnter={() => this.setState({topicSelect: 0})} />
                </div>
                <div className="circle-button">
                <Button icon='coffee' shape='circle' size='large' onMouseEnter={() => this.setState({topicSelect: 1})} />
                </div>
                <div className="circle-button">
                <Button icon='smile-o' shape='circle' size='large' onMouseEnter={() => this.setState({topicSelect: 2})} />
                </div>
{/*                 <a href='#what' onMouseEnter={() => this.setState({topicSelect: 0})}>
                  <Icon type='trophy' />
                </a> */}
              </div>
            </Col>
            <Col lg={8} sm={10} xs={20}>
              <div className='desc' dangerouslySetInnerHTML={this.state.topicWord[this.state.topicSelect].desc} />
              <div className="go-button">
                <Button icon='down' size='large' onClick={() => (window.location.href = this.state.topicWord[this.state.topicSelect].link)}>
                  Find out more
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="what section" id="what">
          <h1 className="center">
            <Icon type='trophy' />
            &nbsp;
            What we do
          </h1>
        </div>

        <div className="how section" id="how">
          <h1 className="center">
            <Icon type='coffee' />
            &nbsp;
            How we work
          </h1>
        </div>

        <div className="who section" id="who">
          <h1 className="center">
            <Icon type='smile-o' />
            &nbsp;
            Who we are
          </h1>
        </div>
      </div>
    );
  }
}