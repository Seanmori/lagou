import React, {Component} from 'react';
import './jobs.css';

class Jobs extends Component{
	constructor(){
		super();
		this.toDetail=this.toDetail.bind(this);
	}
	render(){
		var {list} = this.props;
		return(	
			<li className="activeable list-item" data-positionid={list.positionId} data-companyid={list.companyId} onClick={this.toDetail}>
			    <img src={list.companyLogo} className="item-logo"/>
			    <div className="item-desc">
			        <h2 className="item-title">{list.companyName}</h2>
			        <p className="item-info">
			            <span className="item-pos">{list.positionName}[{list.city}]</span>
			            <span className="item-salary">{list.salary}</span>
			        </p>
			        <p className="item-time">{list.createTime}</p>
			    </div>
			</li>
		)
	}
	toDetail(){
		var {list} = this.props;
		window.location='/detail:'+list.positionId;
	}
}

export default Jobs;