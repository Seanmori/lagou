import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Position from './pages/position.js';
import Search from './pages/search.js';
import Mine from './pages/mine.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Detail from './pages/detail.js';
import Delivery from './pages/delivery.js';
import Interview from './pages/interview.js';
import Invitation from './pages/invitation.js';
import Collection from './pages/collection.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Position}/>
        <Route path="/search" component={Search}/>
        <Route path="/user/mine" component={Mine}/>
	    <Route path="/login" component={Login}/>
	    <Route path="/register" component={Register}/>
	    <Route path="/detail:positionId" component={Detail}/>
	    <Route path="/user/deliverlist" component={Delivery}>
	    	<Route path="/user/deliverlist?type=0" component={Delivery}/>
	    	<Route path="/user/deliverlist?type=1" component={Delivery}/>
	    	<Route path="/user/deliverlist?type=2" component={Delivery}/>
	    </Route>
	    <Route path="/minterview/interviewlist" component={Interview}>
	    	<Route path="/minterview/interviewlist?type=0" component={Interview}/>
	    	<Route path="/minterview/interviewlist?type=1" component={Interview}/>
	    </Route>
	    <Route path="/minvite/invitation" component={Invitation}/>
	    <Route path="/user/collectlist" component={Collection}/>
      </Route>
    </Router>
	, document.getElementById('root'));
registerServiceWorker();
