import React, {Component} from 'react';
import './delivery.css';
import {Link} from 'react-router';

class Delivery extends Component{
	constructor(){
		super();
		this.backToMine=this.backToMine.bind(this);
	}
	render(){
		return(
			<div>
				<header id="header">投递记录
					<div className="left">
						<span className="corner" onClick={this.backToMine}></span>
					</div>
				</header>
				<div id="content">
			        <div className="tab">
			            <Link to="/user/deliverlist?type=0" style={{width:"33.3%"}} activeClassName="selected" className="tab-item selected">全部</Link>
			            <Link to="/user/deliverlist?type=1" style={{width:"33.3%"}} activeClassName="selected" className="tab-item">邀请面试</Link>
			            <Link to="/user/deliverlist?type=2" style={{width:"33.3%"}} activeClassName="selected" className="tab-item">不合适</Link>
			        </div>
			        <ul className="list"><li className="list-empty">
			            <span className="text">暂无记录~</span>
			        </li></ul>
			    </div>
			</div>
		)
	}
	backToMine(){
		window.location='/user/mine'
	}
}

export default Delivery