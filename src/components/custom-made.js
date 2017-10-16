import React, {Component} from 'react';
import './custom-made.css';

class CustomMade extends Component{
	constructor(){
		super();
		this.alert=this.alert.bind(this);
	}
	render(){
		return(
			<div className="custom-info none" style={{display: "block"}}>
			            <span className="info">10秒钟定制职位</span>
			            <a className="go" href="#" target="_self" onClick={this.alert}>
			                <em className="icon" style={{display: "inline-block"}}></em>
			                <em className="text">编辑</em>
			            </a>
			        </div>
		)
	}
	alert(){
		alert('该功能尚未完善，请回头再试');
	}
}

export default CustomMade

