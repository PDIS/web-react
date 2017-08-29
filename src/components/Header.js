import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import clearlogo from '../images/pdis-logo-final-clear.png'
import '../styles/layout.css'

class Head extends React.Component {
  render() {
    return (
        <div className="wrapper row1" style={{'position':'fixed','background':'#DDD','zIndex':'100'}}>
          <header id="header" className="hoc clear">

            <div id="logo" className="fl_left">
              <Link to='/'>
                <img src={clearlogo} alt="pdis logo" style={{'width':'100px'}} />
              </Link>
            </div>

            <nav id="mainav" className="fl_right">
              <ul className="clear">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">MEMBERS</Link></li>
              </ul>
            </nav>

          </header>
        </div>
    )
  }
}

export default Head;