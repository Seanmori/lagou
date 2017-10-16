import React, {Component} from 'react';
import './search.css';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SearchHistory from '../components/searchHistory.js';
import $ from 'jquery';

class Search extends Component{
	constructor(){
		super();
		let info = JSON.parse(localStorage.getItem('searchHistory')).searchInfo;
		this.state = {
			citiesState:0,
			city:"全国",
			searchList:0,
			searchInfo:info
		}
		this.showCities=this.showCities.bind(this);
		this.backToSearch=this.backToSearch.bind(this);
		this.selectCity=this.selectCity.bind(this);
		this.search=this.search.bind(this);
		this.delete=this.delete.bind(this);
	}
	componentWillMount(){
		$("body").removeClass("radial");
	}
	render(){
		var historyList = this.state.searchInfo.map((elem,index)=>{
			return <SearchHistory sList={elem} key={elem} delete={this.delete}/>
		});
		return(
			<div>
				<Header />
				<div id="content">
			        <div className="linputer">
			            <div className="lbutton" onClick={this.showCities}>
			                <span className="city">{this.state.city}</span>
			                <span className="cityicon"></span>
			            </div>
			            <div className="rinput">
			                <input ref="searchInput" className="inputer" type="text" placeholder="搜索职位或公司"/>
			                <span className="search" onClick={this.search}><em className="searchicon"></em></span>
			            </div>
			        </div>
			        <div className="listcon">
			            <ul className="history" style={{display: "block"}}>
			            	{historyList}
			            </ul>
			            <div className="custominfo none">
			                将搜索地区和关键词设为定制条件
			            </div>
			            <ul className="list" style={{display:this.state.searchList?"block":"none"}}>
				            <li className="list-empty">
					            <span className="icon"></span>
					            <span className="text">拉勾上暂时没有这样的职位</span>
				            </li>
			            </ul>
			        </div>
			    </div>
			    <Footer />
			    <div id="fulldialog-cid-1" className="fdialog-container" style={{display:this.state.citiesState?"block":"none"}}>
				 <div id="fulldialog-hid-1" className="fdialog-header">
				  拉勾网
				  <div className="left" onClick={this.backToSearch}>
				   <span className="corner"></span>
				  </div>
				 </div>
				 <div id="fulldialog-conid-1" className="fdialog-content">
				  <div className="fdialog-rcon">

				   <div className="cities-header">
				    热门城市
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="北京">北京</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="上海">上海</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="广州">广州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="深圳">深圳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="成都">成都</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="杭州">杭州</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    ABCDEF
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="安庆">安庆</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="安阳">安阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="保定">保定</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="北京">北京</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="包头">包头</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="长春">长春</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="成都">成都</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="重庆">重庆</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="长沙">长沙</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="常州">常州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="郴州">郴州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="沧州">沧州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="东莞">东莞</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="大连">大连</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="东营">东营</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="佛山">佛山</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="阜阳">阜阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="福州">福州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="抚州">抚州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    GHIJ
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="桂林">桂林</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="贵阳">贵阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="广州">广州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="赣州">赣州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="邯郸">邯郸</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="哈尔滨">哈尔滨</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="合肥">合肥</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="呼和浩特">呼和浩特</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="海口">海口</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="衡水">衡水</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="河源">河源</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="杭州">杭州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="惠州">惠州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="湖州">湖州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="金华">金华</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="九江">九江</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="吉林">吉林</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="江门">江门</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="济南">济南</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="济宁">济宁</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="嘉兴">嘉兴</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="荆州">荆州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    KLMN
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="昆明">昆明</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="聊城">聊城</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="廊坊">廊坊</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="丽水">丽水</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="拉萨">拉萨</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="临沂">临沂</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="洛阳">洛阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="连云港">连云港</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="兰州">兰州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="柳州">柳州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="泸州">泸州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="马鞍山">马鞍山</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="茂名">茂名</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="绵阳">绵阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="梅州">梅州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="宁波">宁波</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="南昌">南昌</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="南京">南京</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="南宁">南宁</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="南通">南通</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="南阳">南阳</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    OPQR
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="平顶山">平顶山</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="莆田">莆田</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="濮阳">濮阳</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="青岛">青岛</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="秦皇岛">秦皇岛</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="清远">清远</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="泉州">泉州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="衢州">衢州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="日照">日照</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    STUV
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="上海">上海</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="石家庄">石家庄</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="汕头">汕头</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="汕尾">汕尾</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="绍兴">绍兴</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="沈阳">沈阳</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="三亚">三亚</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="深圳">深圳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="苏州">苏州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="宿州">宿州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="泰安">泰安</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="天津">天津</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="唐山">唐山</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="太原">太原</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="台州">台州</td>
				     </tr>
				    </tbody>
				   </table>
				   <div className="cities-header">
				    WXYZ
				   </div>
				   <table className="cities-list">
				    <thead>
				     <tr>
				      <th></th>
				      <th></th>
				      <th></th>
				     </tr>
				    </thead>
				    <tbody>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="潍坊">潍坊</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="武汉">武汉</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="芜湖">芜湖</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="威海">威海</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="乌鲁木齐">乌鲁木齐</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="无锡">无锡</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="温州">温州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="西安">西安</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="孝感">孝感</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="香港特别行政区">香港特别行政区</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="厦门">厦门</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="西宁">西宁</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="新乡">新乡</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="咸阳">咸阳</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="襄阳">襄阳</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="徐州">徐州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="宜宾">宜宾</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="银川">银川</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="盐城">盐城</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="宜昌">宜昌</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="烟台">烟台</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="扬州">扬州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="淄博">淄博</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="珠海">珠海</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="镇江">镇江</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="湛江">湛江</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="肇庆">肇庆</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="中山">中山</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="遵义">遵义</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="郑州">郑州</td>
				     </tr>
				     <tr className="cities-list-item">
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="漳州">漳州</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="株洲">株洲</td>
				      <td onClick={this.selectCity} className="activeable cities-item" data-item="&nbsp;">&nbsp;</td>
				     </tr>
				    </tbody>
				   </table>
				  </div>
				 </div>
				</div>
			</div>
		)
	}
	showCities(){
		this.setState({
			citiesState:1
		});
	}
	backToSearch(){
		this.setState({
			citiesState:0
		});
	}
	selectCity(e){
		$("td").removeClass("selected");
		$(e.target).addClass("selected");
		var cityBeSelected = $(e.target).data("item");
		this.setState({
			city:cityBeSelected
		});
		this.backToSearch();
	}
	search(){
		var history = localStorage.getItem('searchHistory');
		if (!history) {
			let array = [];
			array.push(this.refs.searchInput.value);
			localStorage.setItem('searchHistory',JSON.stringify({searchInfo:array}));
		}
		if (history) {
			let array = JSON.parse(history).searchInfo
			array.push(this.refs.searchInput.value);
			localStorage.setItem('searchHistory',JSON.stringify({searchInfo:array}));
		}
		this.setState({
			searchList:1
		});
	}
	delete(){
		let info = JSON.parse(localStorage.getItem('searchHistory')).searchInfo;
		info.splice(this.props.sList,1);
		localStorage.setItem('searchHistory',JSON.stringify({searchInfo:info}));
		this.setState({
			searchInfo:info
		});
	}
}

export default Search;