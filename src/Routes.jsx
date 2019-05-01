import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';

const Routes = () => (
	<Router>
		<Route path="/" exact component={Home} />
		<Route path="/sponsors/" component={Sponsors} />
	</Router>
);

export default Routes;
