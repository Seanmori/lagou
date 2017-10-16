import React, {Component} from 'react';
import './toLogin.css';

class ToLogin extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="custom-info none" style={{display: "block"}}>
			            <span className="info">10秒钟定制职位</span>
			            <a className="go" href="/login" target="_self">
			                <em className="icon"></em>
			                <em className="text">去登录</em>
			            </a>
			        </div>
		)
	}
}

export default ToLogin