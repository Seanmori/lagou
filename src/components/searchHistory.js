import React, {Component} from 'react';
import './searchHistory.css';


class SearchHistory extends Component{
	constructor(){
		super();
	}
	render(){
		console.log(JSON.parse(localStorage.getItem('searchHistory')).searchInfo);
		return(
			<li className="activeable history-item">
				<span className="text" data-name={this.props.sList}>{this.props.sList}</span>
				<div className="delcon" data-time="" data-name={this.props.sList}>
					<span className="delicon" onClick={this.props.delete}></span>
				</div>
			</li>
		)
	}
}

export default SearchHistory