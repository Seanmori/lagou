import React, {Component} from 'react';
import './login&register.css';
import {Link} from 'react-router';

class LoginAndRegister extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className="logininfo">
			    <div className="nologin center">
			        <Link className="loginbut" to="/login" target="_self">登录 / 注册</Link>
			    </div>
			</div>
		)
	}
}

export default LoginAndRegister
