import React from 'react';
import logo from '../images/PDIS-logo.png'
import '../styles/Home.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicSelect: 0,
      topicWord: [
        { prev: 'What',
          next: 'Do'
        },
        { prev: 'How',
          next: 'Work'
        },
        { prev: 'Who',
          next: 'Are'
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
            <a href='#what' onMouseEnter={() => this.setState({topicSelect: 0})}>WHAT</a>
            <a href='#how' onMouseEnter={() => this.setState({topicSelect: 1})}>HOW</a>
            <a href='#who' onMouseEnter={() => this.setState({topicSelect: 2})}>WHO</a>
          </div>
        </div>
        <div className="what section" id="what">
          <div className="center">
            WHAT
          </div>
        </div>
        <div className="how section" id="how">
          <div className="center">
            HOW
          </div>
        </div>
        <div className="who section" id="who">
          <div className="center">
            WHO
          </div>
        </div>
      </div>
    );
  }
}