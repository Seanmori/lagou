import React, {Component} from 'react';
import './login.css';
import $ from 'jquery';
import axios from 'axios';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			passwordSeeing:"password",
			eyeClass:"eye"
		}
		this.submit=this.submit.bind(this);
		this.focus=this.focus.bind(this);
		this.isPasswordCanBeSeen=this.isPasswordCanBeSeen.bind(this);
	}
	render(){
		return(
			<div className="new_wrapper">
			    <form data-view="loginView">
			    	<div className="new_register">
			    		<div data-propertyname="username" data-controltype="Phone" style={{display: "block"}}>
			    			<input type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top" onFocus={this.focus}/>
			    			<span data-valid-message="" id="input_tips" className="input_tips" style={{display: "none"}}></span>
			    		</div>
			    		<div data-propertyname="password" data-controltype="Password" style={{display: "block"}}>
							<div>
								<input type={this.state.passwordSeeing} placeholder="密码" className="r_psw btm" maxLength="16" onFocus={this.focus}/>
								<i className={this.state.eyeClass} onClick={this.isPasswordCanBeSeen}></i>
							</div>
			    			<span data-valid-message="" id="input_tips2" className="input_tips" style={{display: "none"}}></span>
			    		</div>	
			    	</div>
			        <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style={{display: "none"}}>
			            <input type="text" id="vcode" name="vcode" tabIndex="3" placeholder="请证明你不是机器人"/>
			            <img src="" width="113" height="42" id="vcodeImg"/>
			            <a>看不清楚，<em>换一张</em></a>   
			        </div>
			    	<div data-propertyname="submit" data-controltype="Botton" style={{display: "block"}}>
			    		<input type="button" className="btn_green" value="登录" onClick={this.submit}/>
			    	</div>	
			    </form>
			    <div className="register_text">还没帐号？</div>
			    <a href="./register" className="btn_green_border">注册</a>
			</div>
		)
	}
	componentWillMount(){
		$("body").addClass("radial");
	}
	focus(){
		$(".r_email").focus(function () {
			$("#input_tips").css({"display":"none"})
		})
		$(".r_psw").focus(function () {
			$("#input_tips2").css({"display":"none"})
		})
	}
	isPasswordCanBeSeen(){
		if ($(".r_psw").attr("type") == "password") {
			this.setState({
				passwordSeeing:"text",
				eyeClass:"eye openeye"
			});
		}
		if ($(".r_psw").attr("type") == "text") {
			this.setState({
				passwordSeeing:"password",
				eyeClass:"eye"
			});
		}	
	}
	submit(){
		var reg1 = /^1[3|4|5|8][0-9]\d{4,8}$/,
			reg2 = /^[0-9A-Za-z]{6,16}$/,
			usernameText = $(".r_email").val(),
			passwordText = $(".r_psw").val(),
			usernameTest = reg1.test(usernameText),
			passwordTest = reg2.test(passwordText);

		if (!usernameText)
			$("#input_tips").css({"display":"block"}).text("请输入常用账号")
		if (!passwordText)
			$("#input_tips2").css({"display":"block"}).text("请输入密码")

		if (usernameText&&!usernameTest)
			$("#input_tips").css({"display":"block"}).text("请输入有效账号")
		if (passwordText&&!passwordTest)
			$("#input_tips2").css({"display":"block"}).text("6-16位密码")

		if (usernameTest&&passwordTest) {
			axios.post("/api/login",{
				usernameText,passwordText
			}).then(function(res){
				console.log(res);  	
			})
			localStorage.setItem("user",JSON.stringify({username:usernameText,password:passwordText}));
			window.location="/";
		}

		
	}
}

export default Login