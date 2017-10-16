import React, {Component} from 'react';
import './userInformation.css';

class UserInformation extends Component{
	constructor(){
		super();
		this.state = {
			username:""
		}
	}
	componentWillMount(){
		var info = localStorage.getItem('user');
		if (info) {
			var userInfoObj = JSON.parse(info);
			this.setState({
				username:userInfoObj.username
			});
		}

	}
	render(){
		return(
			<div className="haslogin center">
                <a className="button" href="/" target="_self"> 简历&gt; </a>
                <div className="headcon">
                    <img className="headpic" src="//static.lagou.com/images/myresume/default_headpic.png"/>
                </div>
                <div className="name">{this.state.username}</div>
            </div>
		)
	}
}

export default UserInformation

