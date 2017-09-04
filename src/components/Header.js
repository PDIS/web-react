import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import clearlogo from '../images/pdis-logo-final-clear.png'
import './Header.css'

class Head extends React.Component {
	render() {
		return (
      /* <div className="header-wrapper">
        <header id="header" className="hoc">
          <div className="nav-header">
            <div id="logo" className="fl_left">
              <Link to='/'>
                <img
                  src={clearlogo}
                  alt="pdis logo"
                  style={{
                  'width': '100px',
                  'marginTop': '22px'
                }}/>
              </Link>
            </div>

            <nav id="mainav" className="fl_right">
              <ul className="clear">
                <li className="active">
                  <Link to="/">首頁</Link>
                </li>
                <li>
                  <Link to="/track">追蹤</Link>
                </li>
                <li>
                  <Link to="/about">我們是誰</Link>
								</li>
								<li>
								<Link to="/tool">工具</Link>
							</li>
              </ul>
            </nav>
          </div>
        </header>
			</div> */
			<div className="wrapper row1">
				<header id="header" className="hoc clear">

					<div id="logo" className="fl_left">
						<Link to='/'>
							<img
								src={clearlogo}
								alt="pdis logo"
								style={{
									'width': '100px',
									'marginTop': '22px'
								}} />
						</Link>
					</div>

					<nav id="mainav" className="fl_right">
						<ul className="clear">
							<li className="active"><Link to="/">首頁</Link></li>
							<li><a className="drop" href="#">工作紀錄</a>
								<ul>
									<li><Link to="/">開放政府</Link></li>
									<li><Link to="/">數位服務</Link></li>
									<li><Link to="/">社會企業</Link></li>
									<li><Link to="/">青年咨詢委員會</Link></li>
									<li><Link to="/track">歷程</Link></li>
								</ul>
							</li>
							<li><a className="drop" href="#">如何</a>
								<ul>
									<li><Link to="/tool">工具</Link></li>
									<li><Link to="/">進行中</Link></li>
								</ul>
							</li>
							<li><Link to="/about">聯絡我們</Link></li>
						</ul>
					</nav>

				</header>
			</div>
		)
	}
}

export default Head;