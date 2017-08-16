import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
const { Footer } = Layout;

class Foot extends React.Component {
  render() {
    return (
      <div className="wrapper row4">
  <footer id="footer" className="hoc clear"> 
   
    <div className="one_quarter first">
      <h6 className="heading">Turpis nam sapien</h6>
      <p>Bibendum ullamcorper cras imperdiet justo vitae odio dignissim porta maecenas vel ante pharetra.</p>
      <p>Lorem facilisis rutrum in sed sem proin interdum lectus non laoreet tellus leo imperdiet.</p>
    </div>
    <div className="one_quarter">
      <h6 className="heading">Pharetra a luctus</h6>
      <nav>
        <ul className="nospace">
          <li><a href="index.html"><i className="fa fa-lg fa-home"></i></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </nav>
      <ul className="faico clear">
        <li><a className="faicon-facebook" href="#"><i className="fa fa-facebook"></i></a></li>
        <li><a className="faicon-twitter" href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a className="faicon-dribble" href="#"><i className="fa fa-dribbble"></i></a></li>
        <li><a className="faicon-linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
        <li><a className="faicon-google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
        <li><a className="faicon-vk" href="#"><i className="fa fa-vk"></i></a></li>
      </ul>
    </div>
    <div className="one_quarter">
      <h6 className="heading">A maximus lectus</h6>
      <article>
        <h2 className="nospace font-x1"><a href="#">Suspendisse potenti proin</a></h2>
        <time className="font-xs" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
        <p>Tortor a erat aliquam a consequat augue a elementum ante donec luctus posuere mauris non tempus felis [&hellip;]</p>
      </article>
    </div>
    <div className="one_quarter">
      <h6 className="heading">Non sapien nunct</h6>
      <ul className="nospace linklist">
        <li><a href="#">Lectus pharetra quis arcu</a></li>
        <li><a href="#">Sed facilisis tempor velit ut</a></li>
        <li><a href="#">Et maximus lorem maximus</a></li>
        <li><a href="#">Habitant morbi tristique</a></li>
      </ul>
    </div>
  
  </footer>
</div>
    )
  }
}

export default Foot;