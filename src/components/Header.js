import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import clearlogo from '../images/pdis-logo-final-clear.png'
import './Header.css'

class Head extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <header id="header" className="hoc">

          <div id="logo" className="fl_left">
            <Link to='/'>
              <img src={clearlogo} alt="pdis logo" style={{'width':'100px','marginTop':'22px'}} />
            </Link>
          </div>

            <nav id="mainav" className="fl_right">
              <ul className="clear">
                <li className="active"><Link to="/">首頁</Link></li>
                <li><Link to="/track">追蹤</Link></li>
                <li><Link to="/about">我們是誰</Link></li>
              </ul>
            </nav>

        </header>
      </div>
    )
  }
}

export default Head;