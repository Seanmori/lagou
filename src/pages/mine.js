import React, {Component} from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import './mine.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import UserInformation from '../components/userInformation.js';
import LoginAndRegister from '../components/login&register.js';

class Mine extends Component{
	constructor(){
		super();
		this.state = {
			isLogin:false
		}
		this.logout=this.logout.bind(this);
		this.toLogin=this.toLogin.bind(this);
	}
	componentWillMount(){
		var userInfoObj = JSON.parse(localStorage.getItem('user'));
		if (!userInfoObj) {
			this.setState({
				isLogin:false
			});
		}
		else if (userInfoObj) {
			this.setState({
				isLogin:true
			});
		}
		$("body").removeClass("radial");
	}
	componentDidMount(){
		if (this.state.isLogin) 
			document.querySelector(".logout").style.display = "block";
	}
	render(){
		var isLogin = this.state.isLogin?<UserInformation />:<LoginAndRegister />;
		
		return(
			<div>
				<Header />
				<div id="content">
			        {isLogin}
			        <div className="buttons">
			            <Link className="button deliver" to="/user/deliverlist" onClick={this.toLogin}>
			                <span>投递</span>    
			            </Link>
			            <Link className="button interview" to="/minterview/interviewlist" onClick={this.toLogin}>面试</Link>
			            <Link className="button invitation" to="/minvite/invitation" onClick={this.toLogin}>
			                <span>邀约</span>
			            </Link>
			            <Link className="button collect" to="/user/collectlist" onClick={this.toLogin}>收藏</Link>
			        </div>
			        <a className="logout" href="/user/mine" style={{display: "none"}} onClick={this.logout}>退出登录</a>
			    </div>
			    <Footer />
			</div>
		)
	}
	logout(){
		localStorage.removeItem('user');
		this.setState({
			isLogin:false
		});
	}
	toLogin(e){
		if (!localStorage.getItem('user')) {
			e.preventDefault();
			window.location='/login';
		}
	}
}

export default Mine;