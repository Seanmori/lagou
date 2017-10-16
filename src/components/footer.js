import React, {Component} from 'react';
import './footer.css'; 
import $ from 'jquery';
import {Link, IndexLink} from 'react-router';

class Footer extends Component{
	
	render(){
		return(
			<div>
				<div className="footer">
					<IndexLink to="/" className="footer-tab-custom" activeClassName="selected">
						<span className="icon"></span>
						<span className="text">职位</span>
					</IndexLink>
					<Link to="/search" className="footer-tab-search" activeClassName="selected">
						<span className="icon"></span>
						<span className="text">搜索</span>
					</Link>
					<Link to="/user/mine" className="footer-tab-mine" activeClassName="selected">
						<span className="icon"></span>
						<span className="text">我的</span>
					</Link>
				</div>
			</div>
		)
	}
	componentDidMount(){
		if ($(".selected")) {
			$(".selected .icon").addClass("selected");
		}
	}
}

export default Footer;