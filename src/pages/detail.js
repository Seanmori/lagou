import React, {Component} from 'react';
import $ from 'jquery';
import './detail.css';

class Detail extends Component{
	constructor(){
		super();
		this.closeAd=this.closeAd.bind(this);
		this.backToPosition=this.backToPosition.bind(this);
		this.delivering=this.delivering.bind(this);
	}
	componentWillMount(){
		$("body").removeClass("radial");
	}
	render(){
		return(
			<div>
				<header id="header">职位详情
					<div className="left" onClick={this.backToPosition}>
						<span className="corner"></span>
					</div>
					<div className="right" onClick={this.backToPosition}>
						<span className="corner"></span>
					</div>
				</header>

				<div id="content">
			        <div className="postitle">
			            <h2 className="title">IVR开发工程师</h2>
			            <div className="collicon activeable">
			                <span className="icon notcoll"></span>
			                <span className="text">
			                                            未收藏
			                                    </span>
			            </div>
			        </div>

			        <div className="detail">
			            <div className="items">
			                                    <span className="item salary">
			                        <em className="icon"></em>
			                        <span className="text">10k-18k</span>
			                    </span>
			                                                    <span className="item workaddress">
			                        <em className="icon"></em>
			                        <span className="text">上海</span>
			                    </span>
			                                                    <span className="item jobnature">
			                        <em className="icon"></em>
			                        <span className="text">全职</span>
			                    </span>
			                                                    <span className="item workyear">
			                        <em className="icon"></em>
			                        <span className="text">1-3年</span>
			                    </span>
			                                                    <span className="item education">
			                        <em className="icon"></em>
			                        <span className="text">
			                            本科及以上                        </span>
			                    </span>
			                            </div>

			            <div className="temptation">
			                职位诱惑：发展前景好
			            </div>
			        </div>

			        <div className="company activeable">
			            <img src="//static.lagou.com/i/image/M00/6A/5A/CgqKkVgYEGiAYiIoAAC89h9nm6Y561.png" alt="" className="logo"/>
			            <div className="desc">
			                <div className="dleft">
			                    <h2 className="title">
			                        上海仟才
			                    </h2>
			                    <p className="info">
			                                                    移动互联网,金融
			                                                                            / A轮
			                                                                            / 50-150人
			                                            </p>
			                </div>
			                                    <span className="dright"></span>
			                            </div>
			        </div>

			        <div className="positiondesc">
			            <header className="header">
			                职位描述
			            </header>
			            <div className="content">
			                <p>岗位职责：</p>
							<p>1、从事内部智能语音外呼系统SaaS平台研发。</p>
							<p>2、提供基于深度学习的语音语义识别和算法优化。</p>
							<p>3、为行业客户提供接入实施服务支持。</p>
							<p>&nbsp;</p>
							<p>岗位要求：</p>
							<p>1、具备呼叫中心及相关领域3年以上工作经验。</p>
							<p>2、熟悉或开发应用过主流语音识别引擎，如讯飞、Nuance、云知声等。</p>
							<p>3、能够掌握主流语音系统平台，如：Avaya、华为、Notel、Alcatel等设备的调试、维护。</p>
							<p>4、熟悉并了解主流CTI、IVR、Reporting应用产品，有语音IVR系统（特别是AVAYA AEP、华为UAP）的经验优先。</p>
							<p>5、熟悉并了解主流录音应用，如：VERINT、NICE等的使用和维护。</p>
							<p>6、熟悉开发语言，Java，C。</p>
							<p>7、熟悉SQL (例如MySQL, SQL Server, Oracle等)。</p>
							<p>8、具有相关产品和领域资格认证证书者，及具体项目实施经验者优先考虑。</p>
							<p><br/></p>
			            </div>
			        </div>

			        <div className="positioneval">
			            <div className="eval-title">
			                面试评价
			                    <span id="total">(<span>0</span>)</span>
			            </div>
			            <ul className="list"><li className="list-item-empty list-item">暂无面试评价</li></ul>
			            <a className="eval-all" href="/user/expsList_3570170.html" style={{display: "none"}}></a>   
			        </div>
			        <div className="fix_btn_group">
			                <div className="deliver deliver_resume rows_bar" style={{display: "block"}} onClick={this.delivering}>投递简历</div>
			                <div className="deliver smallWX hollow use_smallWX">小程序打开</div>
			                <div className="deliver deliver_resume smallWX solid">投递简历</div>
			                                    </div>

			        <div id="push_bottom" onClick={this.closeAd}>
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
			                <div className="close_btn" data-lg-tj-id="2ip0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull">
			                    <img className="close_btn_img" src="//static.lagou.com/m/images/asset/custom/list/img/download_btn_close.png" width="100%" alt="关闭"/>
			                </div>
			            </div>
			        </div>     
			    </div>
			</div>
		)
	}
	closeAd(){
		document.querySelector('#push_bottom').style.display = "none";
	}
	backToPosition(){
		window.location="/";
	}
	delivering(){
		var userInfo = localStorage.getItem('user');
		if (!userInfo) {
			window.location='/login';
		}
		if (userInfo) {
			window.location='/';
		}
	}
}

export default Detail