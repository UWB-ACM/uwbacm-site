import React from 'react';

import Header from './Header';
import Mission from './Mission';
import Events from './Events';
import Officers from './Officers';
import SocialMedia from './SocialMedia';
import Contact from './Contact';
import Form from './Form';
import Head from './Head';

import '../../styles/reset.scss';
import '../../styles/index.scss';

const Home = () => (
	<div id="app">
		<Head />
		<Header />
		<Mission />
		<Events />
		<Officers />
		<Form />
		<SocialMedia />
		<Contact />
	</div>
);

export default Home;
