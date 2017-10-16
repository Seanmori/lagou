import React, {Component} from 'react';
import './interview.css';
import {Link} from 'react-router';

class Interview extends Component{
	constructor(){
		super();
		this.backToMine=this.backToMine.bind(this);
	}
	render(){
		return(
			<div>
				<header id="header">我的面试
					<div className="left">
						<span className="corner" onClick={this.backToMine}></span>
					</div>
				</header>
				<div id="content">
			    	<div className="tab">
			            <Link to="/minterview/interviewlist?type=1" activeClassName="selected" className="tab-item">已面试</Link>
			            <Link to="/minterview/interviewlist?type=0" activeClassName="selected" className="tab-item selected">将面试</Link>
			        </div>
			        <ul className="list">
			        	<li className="list-empty">
			            	暂时没有将面试的记录，去<Link to="/">投简历</Link>吧
			            </li>
			        </ul>
			    </div>
			</div>
		)
	}
	backToMine(){
		window.location='/user/mine'
	}
}

export default Interview