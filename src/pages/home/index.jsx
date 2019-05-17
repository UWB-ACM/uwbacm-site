import React, {useState} from 'react';

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

const Home = () => {
	const [pageY, setPageY] = useState(0);
	return (
		<div id="app" onWheel={(e) => setPageY(e.pageY)}>
			<Head />
			<Header pageY={pageY} />
			<Mission />
			<Events />
			<Officers />
			<Form />
			<SocialMedia />
			<Contact />
		</div>
	);
};

export default Home;
