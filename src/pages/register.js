import React, {Component} from 'react';
import './register.css';
import $ from 'jquery';
import axios from 'axios';

class Register extends Component{
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
			    <form id="registerForm" data-view="phoneRegister">
			        <div className="new_register">
			            <input type="hidden" id="otype" value=""/>
			            <div data-propertyname="phone" data-controltype="Phone" style={{display: "block"}}>
			                <input type="text" placeholder="手机号" className="border_btm r_phone top btm" onFocus={this.focus}/>
			                <span data-valid-message="" className="input_tips" id="input_tips1" style={{display: "none"}}></span>
			            </div>
			            <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style={{display: "block"}}>
			                <input type="text" id="vcode" name="vcode" tabIndex="3" className="top btm" placeholder="请证明你不是机器人"/><img className="yzm" src="https://passport.lagou.com/vcode/create?from=register&amp;refresh=1507686720934" onFocus={this.focus}/>
			                
			                <a>看不清楚，<em>换一张</em></a>
			                <span data-valid-message="" className="input_tips" id="input_tips2" style={{display: "none"}}></span>
			            </div>
			            <div data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode" style={{display: "block"}}>
			                <input type="text" tabIndex="2" className="top btm" id="vcode2" placeholder="短信验证码" onFocus={this.focus}/>
			                <input type="button" className="btn_active r_getVcode btn_disabled" value="获取"/>
			                <span data-valid-message="" className="input_tips" id="input_tips3" style={{display: "none"}}></span>
			            </div>
			        </div>
			        
			        <div className="reg_pwd" data-propertyname="password" data-controltype="Password" style={{display: "block"}}>
			            <div>
			                <input type={this.state.passwordSeeing} className="r_psw" placeholder="设置6-16位密码" maxLength="16" onFocus={this.focus}/>
			                <i className={this.state.eyeClass} onClick={this.isPasswordCanBeSeen}></i>
			            </div>
			            <span data-valid-message="" className="input_tips" id="input_tips4" style={{display: "none"}}></span>
			        </div>

			        <div data-propertyname="submit" data-controltype="Botton" style={{display: "block"}}>
			            <input type="button" className="btn_green" id="register" value="注册" onClick={this.submit}/>
			        </div>
			    </form>
			    <div className="register_text">已有帐号？</div>
			    <a href="./login" className="btn_green_border">登录</a>
			    <div className="register_text">点击注册，即代表您同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
			</div>
		)
	}
	componentWillMount(){
		$("body").addClass("radial");
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
	focus(){
		$(".r_phone").focus(function () {
			$("#input_tips1").css({"display":"none"})
		})
		$("#vcode").focus(function () {
			$("#input_tips2").css({"display":"none"})
		})
		$("#vcode2").focus(function () {
			$("#input_tips3").css({"display":"none"})
		})
		$(".r_psw").focus(function () {
			$("#input_tips4").css({"display":"none"})
		})
	}
	submit(){
		var reg1 = /^1[3|4|5|8][0-9]\d{4,8}$/,
			reg2 = /^[0-9]{6}$/,
			reg3 = /^[0-9A-Za-z]{6,16}$/,
			usernameText = $(".r_phone").val(),
			vcodeText = $("#vcode").val(),
			messageVcodeText = $("#vcode2").val(),
			passwordText = $(".r_psw").val(),
			usernameTest = reg1.test(usernameText),
			messageVcodeTest = reg2.test(messageVcodeText),
			passwordTest = reg3.test(passwordText);
		
		if (!usernameText) 
			$("#input_tips1").css({"display":"block"}).text("请填写手机号")
		if (!vcodeText) 
			$("#input_tips2").css({"display":"block"}).text("请输入验证码")
		if (!messageVcodeText) 
			$("#input_tips3").css({"display":"block"}).text("请输入验证码")
		if (!passwordText)
			$("#input_tips4").css({"display":"block"}).text("请输入密码")

		if (usernameText&&!usernameTest) 
			$("#input_tips1").css({"display":"block"}).text("手机号格式错误")
		if (messageVcodeText&&!messageVcodeTest) 
			$("#input_tips3").css({"display":"block"}).text("6位数字验证码")
		if (passwordText&&!passwordTest)
			$("#input_tips4").css({"display":"block"}).text("6-16位密码")

		if (usernameTest&&passwordTest) {
			axios.post("/api/login",{
				usernameText,passwordText
			}).then(function(res){
				console.log(res);  	
			})
			window.location="/login";
		}	
	}
}

export default Register