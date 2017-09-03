import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import clearlogo from '../images/pdis-logo-final-clear.png'
import './Header.css'

class Head extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
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
      </div>
     /*  <div id="fh5co-header">
			<header id="fh5co-header-section">
				<div className="container">
					<div className="nav-header">
						<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
						<h1 id="fh5co-logo"><a href="index.html">Guar<span>dian</span></a></h1>

						<nav id="fh5co-menu-wrap" role="navigation">
							<ul className="sf-menu" id="fh5co-primary-menu">
								<li className="active">
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="portfolio.html" className="fh5co-sub-ddown">Projects</a>
									<ul className="fh5co-sub-menu">
										<li><a href="http://freehtml5.co/preview/?item=build-free-html5-bootstrap-template" target="_blank">Build</a></li>
										<li><a href="http://freehtml5.co/preview/?item=work-free-html5-template-bootstrap" target="_blank">Work</a></li>
										<li><a href="http://freehtml5.co/preview/?item=light-free-html5-template-bootstrap" target="_blank">Light</a></li>
										<li><a href="http://freehtml5.co/preview/?item=relic-free-html5-template-using-bootstrap" target="_blank">Relic</a></li>
										<li><a href="http://freehtml5.co/preview/?item=display-free-html5-template-using-bootstrap" target="_blank">Display</a></li>
										<li><a href="http://freehtml5.co/preview/?item=sprint-free-html5-template-bootstrap" target="_blank">Sprint</a></li>
									</ul>
								</li>
								<li>
									<a href="services.html" className="fh5co-sub-ddown">Services</a>
									 <ul className="fh5co-sub-menu">
									 	<li><a href="left-sidebar.html">Web Development</a></li>
									 	<li><a href="right-sidebar.html">Branding &amp; Identity</a></li>
										<li>
											<a href="#" className="fh5co-sub-ddown">Free HTML5</a>
											<ul className="fh5co-sub-menu">
												<li><a href="http://freehtml5.co/preview/?item=build-free-html5-bootstrap-template" target="_blank">Build</a></li>
												<li><a href="http://freehtml5.co/preview/?item=work-free-html5-template-bootstrap" target="_blank">Work</a></li>
												<li><a href="http://freehtml5.co/preview/?item=light-free-html5-template-bootstrap" target="_blank">Light</a></li>
												<li><a href="http://freehtml5.co/preview/?item=relic-free-html5-template-using-bootstrap" target="_blank">Relic</a></li>
												<li><a href="http://freehtml5.co/preview/?item=display-free-html5-template-using-bootstrap" target="_blank">Display</a></li>
												<li><a href="http://freehtml5.co/preview/?item=sprint-free-html5-template-bootstrap" target="_blank">Sprint</a></li>
											</ul>
										</li>
										<li><a href="#">UI Animation</a></li>
										<li><a href="#">Copywriting</a></li>
										<li><a href="#">Photography</a></li> 
									</ul>
								</li>
								<li><a href="about.html">About</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			
		</div> */
    )
  }
}

export default Head;