import React, {Component} from 'react';
import './position.css';
import $ from 'jquery';
import DATA from '../mock/data.json';
import Jobs from '../components/jobs.js';
import CustomMade from '../components/custom-made.js';
import ToLogin from '../components/toLogin.js';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

class Position extends Component{
	constructor(){
		super();		
		this.state = {
			joblist:DATA.content.data.page.result,
			isLogin:false
		}
		this.closeAd=this.closeAd.bind(this);	
		this.showMore=this.showMore.bind(this);
	}
	componentWillMount(){
		var userInfo = localStorage.getItem('user');
		if (!userInfo) {
			this.setState({
				isLogin:false
			});
		}
		if (userInfo) {
			this.setState({
				isLogin:true
			});
		}
		$("body").removeClass("radial");
	}
	render(){
		
		var list = this.state.joblist.map((elem,index)=>{
			return <Jobs list={elem} />
		});
		var isLogin = this.state.isLogin?<CustomMade />:<ToLogin />
		return(
			<div>
				<Header />
				<div id="content">
					{isLogin}
			        <ul className="list">
			        	{list}
			        	<li className="activeable list-more" onClick={this.showMore}>加载更多</li>
			        </ul>
			        <div id="copyright">
				        <p>©2015 lagou.com, all right reserved </p>
				        <div className="copyright-item">
					        <span className="phone active">移动版&nbsp;·&nbsp;</span>
					        <span className="computer">电脑版&nbsp;·&nbsp;</span>
					        <a href="#header">回顶部</a>
				        </div>
			        </div>
			    </div>
			    <div id="push_bottom" className="animated" style={{display:"block",bottom: "45px"}}>
			        <div className="push_bottom_table">
			            <a className="push_bottom_download" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.alpha.lagouapk&amp;ckey=CK1337790743204" target="_blank" data-lg-tj-id="19qh" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
			                <div className="push_bottom_row">
			                    <div className="push_bottom_cell push_logo">
			                        <img src="//static.lagou.com/m/images/asset/custom/list/img/download_logo_new.png" width="100%" alt="lagou.com"/>
			                    </div>
			                    <div className="push_bottom_cell push_tips">
			                        <img src="//static.lagou.com/m/images/asset/custom/list/img/download_txt_new.png" width="100%" alt="拉勾 机会很多 挑满意的 手机投简历，在线聊Offer"/>
			                    </div>
			                    <div className="push_bottom_cell push_btn">
			                        <img src="//static.lagou.com/m/images/asset/custom/list/img/download_btn_new.png" width="100%" alt="下载APP"/>
			                    </div>
			                </div>
			            </a>
			            <div className="push_mascot">
			                <img className="push_mascot_img" src="//static.lagou.com/m/images/asset/custom/list/img/download_mascot.png" width="100%" alt="拉勾君"/>
			            </div>
			            <div className="close_btn" data-lg-tj-id="2ip0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" onClick={this.closeAd}>
			                <img className="close_btn_img" src="//static.lagou.com/m/images/asset/custom/list/img/download_btn_close.png" width="100%" alt="关闭"/>
			            </div>
			        </div>
			    </div>
		        <Footer />
		    </div>
		)
	}
	closeAd(){
		document.querySelector('.animated').style.display = "none";
	}
	showMore(){
		var more = this.state.joblist.concat(DATA.content.data.page.result);
		this.setState({
			joblist:more
		});
	}
}

export default Position;