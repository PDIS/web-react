import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import './Footer.css'
const { Footer } = Layout;

class Foot extends React.Component {
  render() {
    return (
  <footer>
			<div id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 text-center">
							<p>Made by PDIS </p>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
  }
}

export default Foot;