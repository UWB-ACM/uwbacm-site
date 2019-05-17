import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Sponsors from './pages/sponsors/index';

const Routes = () => (
	<Router>
		<Route path="/" exact component={Home} />
		<Route path="/sponsors/" component={Sponsors} />
	</Router>
);

export default Routes;
