import React, {Component} from 'react';
import './collection.css';

class Collection extends Component{
	constructor(){
		super();
		this.backToMine=this.backToMine.bind(this);
	}
	render(){
		return(
			<div>
				<header id="header">我的收藏
					<div className="left">
						<span className="corner" onClick={this.backToMine}></span>
					</div>
				</header>
				<div id="content">
                	<ul className="list">
                		<li className="list-empty">
            				<span className="text">还没有收藏的职位~</span>
        				</li>
        			</ul>
                </div>
			</div>
		)
	}
	backToMine(){
		window.location='/user/mine'
	}
}

export default Collection