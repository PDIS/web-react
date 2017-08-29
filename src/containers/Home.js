import React from 'react';
import logo from '../images/PDIS-logo.png'
import '../styles/Home.css'
import {Icon} from 'antd'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicSelect: 0,
      topicWord: [
        { prev: 'What',
          next: 'Do',
          desc: '我們做了些什麼我們做了些什麼我們做了些什麼我們做了些什麼我們做了些什麼我們做了些什麼'
        },
        { prev: 'How',
          next: 'Work',
          desc: '我們如何工作我們如何工作我們如何工作我們如何工作我們如何工作我們如何工作'
        },
        { prev: 'Who',
          next: 'Are',
          desc: '我們是誰我們是誰我們是誰我們是誰我們是誰我們是誰'
        },
      ]
    };
  }

  render() {
    return (
      <div className="home">

        <div className="face section">
          <div className="logo">
            <div className="prevWord">{this.state.topicWord[this.state.topicSelect].prev}</div>
            <img src={logo} alt="pdis logo" />
            <div className="nextWord">{this.state.topicWord[this.state.topicSelect].next}</div>
          </div>
          <div className="topic">
            <a href='#what' onMouseEnter={() => this.setState({topicSelect: 0})}>
              <Icon type='trophy' />
            </a>
            <a href='#how' onMouseEnter={() => this.setState({topicSelect: 1})}>
              <Icon type='coffee' />
            </a>
            <a href='#who' onMouseEnter={() => this.setState({topicSelect: 2})}>
              <Icon type='smile-o' />
            </a>
          </div>
          <div className='desc'>
            {this.state.topicWord[this.state.topicSelect].desc}
          </div>
        </div>

        <div className="what section" id="what">
          <div className="center">
            <Icon type='trophy' />
          </div>
        </div>

        <div className="how section" id="how">
          <div className="center">
            <Icon type='coffee' />
          </div>
        </div>

        <div className="who section" id="who">
          <div className="center">
            <Icon type='smile-o' />
          </div>
        </div>
      </div>
    );
  }
}